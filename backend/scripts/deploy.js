const main = async () => {
  const Transactions = await hre.ethers.deployContract("Transactions");
  const PropertyRegistration = await hre.ethers.deployContract("PropertyRegistration");

  console.log("Deploying, please wait.");

  await Transactions.waitForDeployment();
  await PropertyRegistration.waitForDeployment();

  console.log(`Transactions contract deployed to ${await Transactions.getAddress()}`);
  console.log(`PropertyRegistration contract deployed to ${await PropertyRegistration.getAddress()}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
