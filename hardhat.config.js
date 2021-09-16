require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
 const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
 const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      // Infura
       url: `https://polygon-mumbai.infura.io/v3/e45e320f3321476db2c9d69d8502e987`,
     // url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey],
      chainId: 80001,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/e45e320f3321476db2c9d69d8502e987`,
      accounts: [privateKey],
      chainId: 3,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/e45e320f3321476db2c9d69d8502e987`,
      accounts: [privateKey],
      chainId: 4,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    matic: {
      // Infura
       url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      //url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

