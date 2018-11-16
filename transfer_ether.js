var Tx = require('ethereumjs-tx')

const Web3 = require('web3')
const web3 = new Web3('http://127.0.0.1:7545')

const account1 = '0x996E4c63dDb88CC6e8d7a2442303c38A57BFF6Ce'
const account2 = '0xDaE003fF4C494f61F8d1952e5757C7cd0185faE8'

//console.log(web3.eth.accounts.create())

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')       //Buffer helps to convert string to binary data
//console.log(process.env.PRIVATE_KEY_1);
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

// web3.eth.getBalance(account1 , (err , bal) => {
//     console.log('account 1 balance : ' , web3.utils.fromWei(bal , 'ether'))
// })

// web3.eth.getBalance(account2 , (err , bal) => {
//     console.log('account 2 balance : ' , web3.utils.fromWei(bal , 'ether'))
// })

//get the transaction count from account 1 as it is the sender
web3.eth.getTransactionCount(account1, (err , txCount) => {

    const txObject = {
        nonce : web3.utils.toHex(txCount),          //all paramters should be in Hex
        to : account2,
        value : web3.utils.toHex(web3.utils.toWei('1' , 'ether')),
        gasLimit : web3.utils.toHex(21000),
        gasPrice : web3.utils.toHex(web3.utils.toWei('10','gwei'))
    }

    //Sign a transaction
    const tx = new Tx(txObject)
    tx.sign(privateKey1)

    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    //Broadcast a transaction
    web3.eth.sendSignedTransaction(raw , (err , txHash) => {
        console.log('txHash : ' , txHash)
    })
})

web3.eth.getBalance(account1 , (err , bal) => {
     console.log('account 1 balance : ' , web3.utils.fromWei(bal , 'ether'))
 })
web3.eth.getBalance(account2 , (err , bal) => {
     console.log('account 2 balance : ' , web3.utils.fromWei(bal , 'ether'))
 })
//Build Transaction

