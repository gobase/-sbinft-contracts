/* eslint-disable node/no-missing-import */
import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { AdminMock } from "../../typechain";
import { ContractReceipt } from "ethers";

describe("Admin", function () {
  let deployer: SignerWithAddress;
  let nonAdmin: SignerWithAddress;
  let address1: SignerWithAddress;
  let address2: SignerWithAddress;
  let address3: SignerWithAddress;

  let cAdminMock: AdminMock;
  const newAdmminZeroError = "Admin:addAdmin newAdmin is the zero address";
  const callerOnlyAdminError = "Admin:onlyAdmin caller is not an Admin";
  const cremoveNonExistAdminError =
    "Admin:removeAdmin trying to remove non existing Admin";

  beforeEach(async function () {
    [deployer, nonAdmin, address1, address2, address3] =
      await ethers.getSigners();

    const cfAdminContract = await ethers.getContractFactory("AdminMock");

    cAdminMock = await cfAdminContract.deploy();
  });

  describe("Post deployment checks", function () {
    it("check deployer is an admin", async function () {
      expect(await cAdminMock.isAdmin(deployer.address)).to.equal(true);
    });

    it("non deployer is not admin", async function () {
      expect(await cAdminMock.isAdmin(nonAdmin.address)).to.equal(false);
    });
  });

  describe("addAdmin multiple", function () {
    it("check adding zero address as admin", async function () {
      await expect(
        cAdminMock["addAdmin(address[])"]([
          ethers.constants.AddressZero,
          address1.address,
        ])
      ).to.be.revertedWith(newAdmminZeroError);
      expect(await cAdminMock.isAdmin(address1.address)).to.equal(false);
      expect(await cAdminMock.isAdmin(ethers.constants.AddressZero)).to.equal(
        false
      );
    });

    it("can add admin", async function () {
      const addAdminTx = await cAdminMock["addAdmin(address[])"]([
        address1.address,
        address2.address,
      ]);
      const receipt: ContractReceipt = await addAdminTx.wait();
      const { events } = receipt;

      expect(events).to.be.an("array").to.have.lengthOf(2);
      const eventSignature = events?.map((item) => item.eventSignature);
      expect(eventSignature).to.include.members([
        "AdminAdded(address)",
        "AdminAdded(address)",
      ]);

      expect(await cAdminMock.isAdmin(address2.address)).to.equal(true);
      expect(await cAdminMock.isAdmin(address1.address)).to.equal(true);
    });

    it("[R]can not add admin from non admin signer", async function () {
      await expect(
        cAdminMock
          .connect(address1)
          ["addAdmin(address[])"]([address2.address, address3.address])
      ).to.be.revertedWith(callerOnlyAdminError);
    });
  });

  describe("addAdmin", function () {
    it("[R] adding zero address as an admin", async function () {
      await expect(
        cAdminMock["addAdmin(address)"](ethers.constants.AddressZero)
      ).to.be.revertedWith(newAdmminZeroError);
    });

    it("[R]can not add admin from non admin signer", async function () {
      await expect(
        cAdminMock.connect(address1)["addAdmin(address)"](address2.address)
      ).to.be.revertedWith(callerOnlyAdminError);
    });

    it("[R]can not add admin zero address", async function () {
      await expect(
        cAdminMock["addAdmin(address)"](ethers.constants.AddressZero)
      ).to.be.revertedWith(newAdmminZeroError);
    });

    it("can add admin", async function () {
      const addAdminTx = await cAdminMock["addAdmin(address)"](
        address1.address
      );

      const receipt: ContractReceipt = await addAdminTx.wait();
      const { events } = receipt;

      expect(events).to.be.an("array").to.have.lengthOf(1);
      const eventSignature = events?.map((item) => item.eventSignature);
      expect(eventSignature).to.include.members(["AdminAdded(address)"]);

      expect(await cAdminMock.isAdmin(address1.address)).to.equal(true);
    });
  });

  describe("removeAdmin", function () {
    it("[R] removing zero address", async function () {
      await expect(
        cAdminMock["addAdmin(address)"](ethers.constants.AddressZero)
      ).to.be.revertedWith(newAdmminZeroError);
      await expect(
        cAdminMock.removeAdmin(ethers.constants.AddressZero)
      ).to.be.revertedWith(cremoveNonExistAdminError);
    });

    it("[R]can not remove admin from non admin signer", async function () {
      await expect(
        cAdminMock.connect(address1).removeAdmin(address2.address)
      ).to.be.revertedWith(callerOnlyAdminError);
    });

    it("[R]can not remove admin non admin signer", async function () {
      await cAdminMock["addAdmin(address)"](address1.address);
      await expect(
        cAdminMock.connect(address1).removeAdmin(address2.address)
      ).to.be.revertedWith(cremoveNonExistAdminError);
    });

    it("can remove admin", async function () {
      await cAdminMock["addAdmin(address)"](address1.address);
      expect(await cAdminMock.isAdmin(address1.address)).to.equal(true);
      const reemoveAdminTx = await cAdminMock.removeAdmin(address1.address);

      const receipt: ContractReceipt = await reemoveAdminTx.wait();
      const { events } = receipt;

      expect(events).to.be.an("array").to.have.lengthOf(1);
      const eventSignature = events?.map((item) => item.eventSignature);
      expect(eventSignature).to.include.members(["AdminRemoved(address)"]);

      expect(await cAdminMock.isAdmin(address1.address)).to.equal(false);
    });
  });

  describe("isAdmin", function () {
    it("[R] check zero address", async function () {
      await expect(
        cAdminMock["addAdmin(address)"](ethers.constants.AddressZero)
      ).to.be.revertedWith(newAdmminZeroError);

      expect(await cAdminMock.isAdmin(ethers.constants.AddressZero)).to.equal(
        false
      );
    });

    it("check admin ", async function () {
      expect(await cAdminMock.isAdmin(deployer.address)).to.equal(true);
      expect(await cAdminMock.isAdmin(address1.address)).to.equal(false);
    });
  });
});
