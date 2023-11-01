const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  let transactions;

  beforeEach(async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    transactions = await Transactions.deploy();
    await transactions.deployed();
  });

  it("Should add a new transaction to the blockchain", async function () {
    const receiver = "0x1234567890123456789012345678901234567890"; // Replace with the desired receiver address
    const amount = 100;
    const message = "Test transaction";
    const keyword = "Test";

    await transactions.addToBlockchain(receiver, amount, message, keyword);

    const allTransactions = await transactions.getAllTransactions();
    const transactionCount = await transactions.getTransactionCount();

    expect(allTransactions.length).to.equal(transactionCount);
    expect(allTransactions[0].sender).to.equal(await ethers.provider.getSigner().getAddress());
    expect(allTransactions[0].receiver).to.equal(receiver);
    expect(allTransactions[0].amount).to.equal(amount);
    expect(allTransactions[0].message).to.equal(message);
    expect(allTransactions[0].keyword).to.equal(keyword);
  });
});