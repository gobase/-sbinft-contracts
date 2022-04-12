import { expect } from "chai";
import { ethers } from "hardhat";

describe("SBIERC20", function () {
  it("Write you test cases here", async function () {
    const [owner, user] = await ethers.getSigners();
    const SBIERC20 = await ethers.getContractFactory("SBIERC20");
    const sbiERC20 = await SBIERC20.deploy();
    await sbiERC20.deployed();

    await expect(sbiERC20.transfer(user.address, 50))
      .to.emit(sbiERC20, "Transfer")
      .withArgs(owner.address, user.address, 100);

    expect(await sbiERC20.name()).to.equal("SBIERC20");
    expect(await sbiERC20.symbol()).to.equal("SBI");
  });
});
