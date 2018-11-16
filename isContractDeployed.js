
/*

This file is just to confirm whether a contract is deployed with given contractAddress and contractABI.

contractAddress can be extracted from ganache (local Blockchain )or else where (other blockchain)
 

*/
const Web3 = require('web3')
const web3 = new Web3('http://127.0.0.1:7545')


const contractABI = [{"constant":false,"inputs":[{"name":"x","type":"string"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ipfs","type":"string"},{"name":"tosend","type":"address"}],"name":"sendHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"getter","type":"address"}],"name":"getHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]

const contractAddress = '0x6aF30F1097Ddf5656Fc7386Dd951879b659ffC1e'

var contract = new web3.eth.Contract(contractABI,contractAddress)

//	contract.methods.balanceOf(account1).call((err,result) =>{console.log(result);})  only external ones are allowed !!

console.log(contract)
