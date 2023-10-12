const main = async () => {
  const Transactions = await hre.ethers.deployContract("Transactions");

  console.log("Deploying, please wait.");
  
  await Transactions.waitForDeployment();

  console.log(`Contract deployed to ${await Transactions.getAddress()}`);
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