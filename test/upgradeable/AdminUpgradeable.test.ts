/* eslint-disable node/no-missing-import */
import { ethers } from "hardhat";
import * as hre from "hardhat";
import { expect } from "chai";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers.js";
import { ContractTransactionReceipt } from "ethers";
import { AdminUpgradeableMock } from "../../typechain-types";

describe("AdminUpgradeable", function () {
  let deployer: HardhatEthersSigner;
  let nonAdmin: HardhatEthersSigner;
  let address1: HardhatEthersSigner;
  let address2: HardhatEthersSigner;
  let address3: HardhatEthersSigner;

  let cAdminUpgradeableMock: AdminUpgradeableMock;
  const newAdmminZeroError = "Admin:addAdmin newAdmin is the zero address";
  const callerOnlyAdminError = "Admin:onlyAdmin caller is not an Admin";
  const cremoveNonExistAdminError =
    "Admin:removeAdmin trying to remove non existing Admin";

  beforeEach(async function () {
    [deployer, nonAdmin, address1, address2, address3] =
      await ethers.getSigners();

    cAdminUpgradeableMock = (await hre.upgrades.deployProxy(
      await ethers.getContractFactory("AdminUpgradeableMock"),
      [],
      {
        kind: "uups",
        initializer: "__AdminUpgradeableMock_init",
      },
    )) as unknown as AdminUpgradeableMock;
    await cAdminUpgradeableMock.waitForDeployment();
  });

  describe("Post deployment checks", function () {
    it("[R] could not re-initialize", async function () {
      await expect(
        cAdminUpgradeableMock.__AdminUpgradeableMock_init(),
      ).to.be.revertedWith("Initializable: contract is already initialized");
    });
    it("deployer is an admin", async function () {
      expect(await cAdminUpgradeableMock.isAdmin(deployer.address)).to.equal(
        true,
      );
    });

    it("non-deployer is not admin", async function () {
      expect(await cAdminUpgradeableMock.isAdmin(nonAdmin.address)).to.equal(
        false,
      );
    });
  });

  describe("addAdmin multiple", function () {
    it("[R]can not add admin from non admin signer", async function () {
      await expect(
        cAdminUpgradeableMock
          .connect(address1)
          ["addAdmin(address[])"]([address2.address, address3.address]),
      ).to.be.revertedWith(callerOnlyAdminError);
    });

    it("check adding zero address as admin", async function () {
      await expect(
        cAdminUpgradeableMock["addAdmin(address[])"]([
          ethers.ZeroAddress,
          address1.address,
        ]),
      ).to.be.revertedWith(newAdmminZeroError);
      expect(await cAdminUpgradeableMock.isAdmin(address1.address)).to.equal(
        false,
      );
      expect(await cAdminUpgradeableMock.isAdmin(ethers.ZeroAddress)).to.equal(
        false,
      );
    });

    it("can add admin", async function () {
      const addAdminTx = await cAdminUpgradeableMock["addAdmin(address[])"]([
        address1.address,
        address2.address,
      ]);
      const receipt = (await addAdminTx.wait()) as ContractTransactionReceipt;
      const { logs } = receipt;

      expect(logs).to.be.an("array").to.have.lengthOf(2);
      expect(await cAdminUpgradeableMock.isAdmin(address2.address)).to.equal(
        true,
      );
      expect(await cAdminUpgradeableMock.isAdmin(address1.address)).to.equal(
        true,
      );
    });
  });

  describe("addAdmin", function () {
    it("[R] adding zero address as an admin", async function () {
      await expect(
        cAdminUpgradeableMock["addAdmin(address)"](ethers.ZeroAddress),
      ).to.be.revertedWith(newAdmminZeroError);
    });

    it("[R]can not add admin from non admin signer", async function () {
      await expect(
        cAdminUpgradeableMock
          .connect(address1)
          ["addAdmin(address)"](address2.address),
      ).to.be.revertedWith(callerOnlyAdminError);
    });

    it("[R]can not add admin zero address", async function () {
      await expect(
        cAdminUpgradeableMock["addAdmin(address)"](ethers.ZeroAddress),
      ).to.be.revertedWith(newAdmminZeroError);
    });

    it("can add admin", async function () {
      const addAdminTx = await cAdminUpgradeableMock["addAdmin(address)"](
        address1.address,
      );

      const receipt = (await addAdminTx.wait()) as ContractTransactionReceipt;
      const { logs } = receipt;

      expect(logs).to.be.an("array").to.have.lengthOf(1);

      expect(await cAdminUpgradeableMock.isAdmin(address1.address)).to.equal(
        true,
      );
    });
  });

  describe("removeAdmin", function () {
    it("[R] removing zero address", async function () {
      await expect(
        cAdminUpgradeableMock["addAdmin(address)"](ethers.ZeroAddress),
      ).to.be.revertedWith(newAdmminZeroError);
      await expect(
        cAdminUpgradeableMock.removeAdmin(ethers.ZeroAddress),
      ).to.be.revertedWith(cremoveNonExistAdminError);
    });

    it("[R]can not remove admin from non admin signer", async function () {
      await expect(
        cAdminUpgradeableMock.connect(address1).removeAdmin(address2.address),
      ).to.be.revertedWith(callerOnlyAdminError);
    });

    it("[R]can not remove admin non admin signer", async function () {
      cAdminUpgradeableMock["addAdmin(address)"](address1.address);
      await expect(
        cAdminUpgradeableMock.connect(address1).removeAdmin(address2.address),
      ).to.be.revertedWith(cremoveNonExistAdminError);
      expect(await cAdminUpgradeableMock.isAdmin(address1.address)).to.equal(
        true,
      );
    });

    it("can remove admin", async function () {
      await cAdminUpgradeableMock["addAdmin(address)"](address1.address);

      expect(
        await cAdminUpgradeableMock.isAdmin(address1.address),
      ).to.be.equals(true);
      const reemoveAdminTx = await cAdminUpgradeableMock.removeAdmin(
        address1.address,
      );

      const receipt =
        (await reemoveAdminTx.wait()) as ContractTransactionReceipt;
      const { logs } = receipt;

      expect(logs).to.be.an("array").to.have.lengthOf(1);

      expect(await cAdminUpgradeableMock.isAdmin(address1.address)).to.equal(
        false,
      );
    });
  });

  describe("isAdmin", function () {
    it("[R] check zero address", async function () {
      await expect(
        cAdminUpgradeableMock["addAdmin(address)"](ethers.ZeroAddress),
      ).to.be.revertedWith(newAdmminZeroError);

      expect(await cAdminUpgradeableMock.isAdmin(ethers.ZeroAddress)).to.equal(
        false,
      );
    });

    it("check admin ", async function () {
      expect(await cAdminUpgradeableMock.isAdmin(deployer.address)).to.equal(
        true,
      );
      expect(await cAdminUpgradeableMock.isAdmin(address1.address)).to.equal(
        false,
      );
    });
  });
});
