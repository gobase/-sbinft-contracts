import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { AdminMock } from "../typechain";

describe("Admin", function () {
  let ContractOwner: SignerWithAddress,
    Address1: SignerWithAddress,
    Address2: SignerWithAddress,
    Address3: SignerWithAddress;

  let cAdminContract: AdminMock;

  beforeEach(async function () {
    [ContractOwner, Address1, Address2, Address3] = await ethers.getSigners();

    const cfAdminContract = await ethers.getContractFactory("AdminMock");

    cAdminContract = await cfAdminContract.deploy();
  });

  describe("after deploy", function () {
    it("check deployer is an admin", async function () {
      expect(await cAdminContract.isAdmin(ContractOwner.address)).to.equal(
        true
      );
    });
  });

  describe("batchAddAdmin", function () {
    it("check adding zero address as admin", async function () {
      await expect(
        cAdminContract.batchAddAdmin([
          ethers.constants.AddressZero,
          Address1.address,
        ])
      ).to.be.revertedWith("Admin:addAdmin newAdmin is the zero address");
      expect(await cAdminContract.isAdmin(Address1.address)).to.equal(false);
      expect(
        await cAdminContract.isAdmin(ethers.constants.AddressZero)
      ).to.equal(false);
    });

    it("can add admin", async function () {
      await cAdminContract.batchAddAdmin([Address1.address, Address2.address]);
      expect(await cAdminContract.isAdmin(Address2.address)).to.equal(true);
      expect(await cAdminContract.isAdmin(Address1.address)).to.equal(true);
    });

    it("[R]can not add admin from non admin signer", async function () {
      await expect(
        cAdminContract
          .connect(Address1)
          .batchAddAdmin([Address2.address, Address3.address])
      ).to.be.revertedWith("Admin:onlyAdmin caller is not an Admin");
    });
  });

  describe("addAdmin", function () {
    it("[R] adding zero address as an admin", async function () {
      await expect(
        cAdminContract.addAdmin(ethers.constants.AddressZero)
      ).to.be.revertedWith("Admin:addAdmin newAdmin is the zero address");
    });

    it("[R]can not add admin from non admin signer", async function () {
      await expect(
        cAdminContract.connect(Address1).addAdmin(Address2.address)
      ).to.be.revertedWith("Admin:onlyAdmin caller is not an Admin");
    });

    it("[R]can not add admin zero address", async function () {
      await expect(
        cAdminContract.addAdmin(ethers.constants.AddressZero)
      ).to.be.revertedWith("Admin:addAdmin newAdmin is the zero address");
    });

    it("can add admin", async function () {
      await cAdminContract.addAdmin(Address1.address);
      expect(await cAdminContract.isAdmin(Address1.address)).to.equal(true);
    });
  });

  describe("removeAdmin", function () {
    it("[R] removing zero address", async function () {
      await expect(
        cAdminContract.addAdmin(ethers.constants.AddressZero)
      ).to.be.revertedWith("Admin:addAdmin newAdmin is the zero address");
      await expect(
        cAdminContract.removeAdmin(ethers.constants.AddressZero)
      ).to.be.revertedWith(
        "Admin:removeAdmin trying to remove non existing Admin"
      );
    });

    it("[R]can not remove admin from non admin signer", async function () {
      await expect(
        cAdminContract.connect(Address1).removeAdmin(Address2.address)
      ).to.be.revertedWith("Admin:onlyAdmin caller is not an Admin");
    });

    it("[R]can not remove admin non admin signer", async function () {
      await cAdminContract.addAdmin(Address1.address);
      await expect(
        cAdminContract.connect(Address1).removeAdmin(Address2.address)
      ).to.be.revertedWith(
        "Admin:removeAdmin trying to remove non existing Admin"
      );
    });

    it("can remove admin", async function () {
      await cAdminContract.addAdmin(Address1.address);
      expect(await cAdminContract.isAdmin(Address1.address)).to.equal(true);
      await cAdminContract.removeAdmin(Address1.address);
      expect(await cAdminContract.isAdmin(Address1.address)).to.equal(false);
    });
  });

  describe("isAdmin", function () {
    it("[R] check zero address", async function () {
      await expect(
        cAdminContract.addAdmin(ethers.constants.AddressZero)
      ).to.be.revertedWith("Admin:addAdmin newAdmin is the zero address");
      expect(
        await cAdminContract.isAdmin(ethers.constants.AddressZero)
      ).to.equal(false);
    });

    it("check admin ", async function () {
      expect(await cAdminContract.isAdmin(ContractOwner.address)).to.equal(
        true
      );
      expect(await cAdminContract.isAdmin(Address1.address)).to.equal(false);
    });
  });
});
