const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PropertyRegistration", function () {
  let PropertyRegistration;

  before(async function () {
    PropertyRegistration = await ethers.getContractFactory("PropertyRegistration");
  });

  it("should register a property", async function () {
    const propertyRegistration = await PropertyRegistration.deploy();
    await propertyRegistration.deployed();

    const propertyName = "Example Property";
    const propertyLocation = "Example Location";

    await propertyRegistration.registerProperty(propertyName, propertyLocation);

    const property = await propertyRegistration.getProperty(1);

    expect(property.owner).to.equal(await ethers.provider.getSigner(0).getAddress());
    expect(property.propertyName).to.equal(propertyName);
    expect(property.propertyLocation).to.equal(propertyLocation);
    expect(property.isRegistered).to.equal(true);
  });

  it("should transfer a property", async function () {
    const propertyRegistration = await PropertyRegistration.deploy();
    await propertyRegistration.deployed();

    const owner1 = await ethers.provider.getSigner(0).getAddress();
    const owner2 = await ethers.provider.getSigner(1).getAddress();
    const propertyName = "Example Property";
    const propertyLocation = "Example Location";

    await propertyRegistration.registerProperty(propertyName, propertyLocation);

    await propertyRegistration.transferProperty(owner2, 1);

    const property = await propertyRegistration.getProperty(1);

    expect(property.owner).to.equal(owner2);
    expect(property.propertyName).to.equal(propertyName);
    expect(property.propertyLocation).to.equal(propertyLocation);
    expect(property.isRegistered).to.equal(true);
  });

  it("should return the registration count", async function () {
    const propertyRegistration = await PropertyRegistration.deploy();
    await propertyRegistration.deployed();

    const propertyName1 = "Property 1";
    const propertyLocation1 = "Location 1";
    const propertyName2 = "Property 2";
    const propertyLocation2 = "Location 2";

    await propertyRegistration.registerProperty(propertyName1, propertyLocation1);
    await propertyRegistration.registerProperty(propertyName2, propertyLocation2);

    const count = await propertyRegistration.getRegistrationCount();

    expect(count).to.equal(2);
  });
});
