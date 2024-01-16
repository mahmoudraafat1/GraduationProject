const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  let Transactions;

  before(async function () {
    Transactions = await ethers.getContractFactory("Transactions");
  });

  it("should add a transaction to the blockchain", async function () {
    const transactions = await Transactions.deploy();
    await transactions.deployed();

    const receiver = "0x1234567890123456789012345678901234567899";
    const propertyPrice = 0.003;
    const propertyName = "123 Main St";

    await transactions.addToBlockchain(receiver, propertyPrice, propertyName);

    const allTransactions = await transactions.getAllTransactions();
    const transaction = allTransactions[0];

    assert.equal(transaction.sender, await ethers.provider.getSigner(0).getAddress());
    assert.equal(transaction.receiver, receiver);
    assert.equal(transaction.propertyprice, propertyPrice);
    assert.equal(transaction.propertyname, propertyName);
  });

  it("should return the transaction count", async function () {
    const transactions = await Transactions.deploy();
    await transactions.deployed();

    const receiver1 = "0x1234567890123456789012345678901234567890";
    const propertyPrice1 = 0.05;
    const propertyName1 = "456 Main St";

    const receiver2 = "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef";
    const propertyPrice2 = 0.02;
    const propertyName2 = "789 Main St";

    await transactions.addToBlockchain(receiver1, propertyPrice1, propertyName1);
    await transactions.addToBlockchain(receiver2, propertyPrice2, propertyName2);

    const count = await transactions.getTransactionCount();

    assert.equal(count, 2);
  });
});
