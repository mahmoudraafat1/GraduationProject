// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract PropertyRegistration {
    uint256 registrationCount;

    event Transfer(address from, address receiver, uint propertyId, uint256 timestamp);
    event Registration(address owner, uint propertyId, string propertyName, string propertyLocation, uint256 timestamp);

    struct Property {
        address owner;
        string propertyName;
        string propertyLocation;
        bool isRegistered;
        uint256 timestamp;
    }

    mapping(uint => Property) public properties;

    function registerProperty(string memory propertyName, string memory propertyLocation) public {
        registrationCount += 1;

        properties[registrationCount] = Property(
            msg.sender,
            propertyName,
            propertyLocation,
            true,
            block.timestamp
        );

        emit Registration(msg.sender, registrationCount, propertyName, propertyLocation, block.timestamp);
    }

    function transferProperty(address receiver, uint propertyId) public {
        require(properties[propertyId].isRegistered, "Property does not exist");
        require(properties[propertyId].owner == msg.sender, "Only the owner can transfer the property");

        properties[propertyId].owner = receiver;

        emit Transfer(msg.sender, receiver, propertyId, block.timestamp);
    }

    function getProperty(uint propertyId) public view returns (Property memory) {
        require(properties[propertyId].isRegistered, "Property does not exist");

        return properties[propertyId];
    }

    function getRegistrationCount() public view returns (uint256) {
        return registrationCount;
    }
}