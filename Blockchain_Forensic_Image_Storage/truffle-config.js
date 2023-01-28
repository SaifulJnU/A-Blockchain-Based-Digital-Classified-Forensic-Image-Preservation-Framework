require('babel-register');
require('babel-polyfill');

//require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" 
    },
    goerli: {
      networkCheckTimeout: 10000,
      provider: function(){
        return new HDWalletProvider(
          "loan recycle slow bind deal fire search chunk lecture jacket balcony abandon",
          "https://goerli.infura.io/v3/123946738ecf40149ff461f2809597da"
        )
      },
      gasPrice: 25000000000,
      network_id: "*" 
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.8.13",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}