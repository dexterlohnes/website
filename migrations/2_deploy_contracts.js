var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Item = artifacts.require("./Item.sol");
var ItemStore = artifacts.require("./ItemStore.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Item);
  deployer.deploy(ItemStore);
};
