module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  compilers:{
    solc:{
      version: "^0.8.0"
    }
  },
  
  networks: {
    develop: {
      port: 8545
    }
  }
};