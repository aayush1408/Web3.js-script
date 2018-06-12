var Web3 = require('web3');

// web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var accounts  = web3.eth.accounts;
// // console.log(accounts);
// var blockNumber = web3.eth.blockNumber;
// console.log(blockNumber-1);
// var block = web3.eth.getBlock(blockNumber);
// console.log(block);
for (var i=0; i < 10; i++) {
  console.log(web3.eth.getBlock(web3.eth.blockNumber + i));
}node_modules
