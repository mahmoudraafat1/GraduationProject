// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint propertyprice, string propertyname, uint256 timestamp);
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint propertyprice;
        string propertyname;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint propertyprice, string memory propertyname) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, propertyprice, propertyname, block.timestamp));

        emit Transfer(msg.sender, receiver, propertyprice, propertyname, block.timestamp);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
