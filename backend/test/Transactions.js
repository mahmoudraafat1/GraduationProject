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

    const receiver = "0x1234567890123456789012345678901234567890";
    const propertyPrice = 100000;
    const propertyName = "Example Property";

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
    const propertyPrice1 = 100000;
    const propertyName1 = "Property 1";

    const receiver2 = "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef";
    const propertyPrice2 = 200000;
    const propertyName2 = "Property 2";

    await transactions.addToBlockchain(receiver1, propertyPrice1, propertyName1);
    await transactions.addToBlockchain(receiver2, propertyPrice2, propertyName2);

    const count = await transactions.getTransactionCount();

    assert.equal(count, 2);
  });
});