import { ethers, waffle } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Admin } from "../typechain";

describe("Admin", function () {
  let ContractOwner: SignerWithAddress,
    Address1: SignerWithAddress,
    Address2: SignerWithAddress,
    Address3: SignerWithAddress,
    Address4: SignerWithAddress;
  let zeroAddress: string;
  zeroAddress = "0x0000000000000000000000000000000000000000";

  let cAdminContract: Admin;

  beforeEach(async function () {
    [ContractOwner, Address1, Address2, Address3, Address4] =
      await ethers.getSigners();

    const cfAdminContract = await ethers.getContractFactory("Admin");

    cAdminContract = await cfAdminContract.deploy();
  });

  describe("addAdmin", function () {
    it("can add admin", async function () {
      await cAdminContract.addAdmin(Address1.address);
      expect(await cAdminContract.isAdmin(Address1.address)).to.equal(true);
    });
    it("[R]can not add admin from non admin signer", async function () {
      await expect(
        cAdminContract.connect(Address1).addAdmin(Address2.address)
      ).to.be.revertedWith("Admin:onlyAdmin caller is not an Admin");
    });
    it("[R]can not add admin zero address", async function () {
      await expect(cAdminContract.addAdmin(zeroAddress)).to.be.revertedWith(
        "Admin:addAdmin newAdmin is the zero address"
      );
    });
  });
  describe("removeAdmin", function () {
    it("can add admin", async function () {
      await cAdminContract.addAdmin(Address1.address);
      expect(await cAdminContract.isAdmin(Address1.address)).to.equal(true);
    });
    
  });
  describe("isAdmin", function () {
    it("check Contract Owner", async function () {
      expect(await cAdminContract.isAdmin(ContractOwner.address)).to.equal(
        true
      );
      expect(await cAdminContract.isAdmin(Address1.address)).to.equal(
        false
      );
    });
  });
});
