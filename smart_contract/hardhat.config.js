require("@nomiclabs/hardhat-waffle");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


//  require('dotenv').config()
 module.exports = {
   solidity: "0.8.4",
   networks: {
     rinkeby: {
       url: "https://eth-rinkeby.alchemyapi.io/v2/W1WP0rg0olgryvHolGpzdGWAz8-cNyli",
       accounts: ["5088db5e862b28d5177caefe51d418a1fcff695122febedcb9e6be03f18d6744"],
     }
   }
 };