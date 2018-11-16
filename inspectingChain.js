
	const Web3 = require('web3')
	const web3 = new Web3('http://127.0.0.1:7545')
	
	//web3.eth.getBlockNumber().then(console.log)
	const backUpTo = 5
	web3.eth.getBlockNumber().then((latest)=>{
		
		for(let i=0;i<backUpTo;i++)
		{
			web3.eth.getBlock(latest - i).then((block)=>{
			/*console.log({
							/*blockNumber: block.number,
							blockHash: block.hash,
							parentHash: block.parentHash,
							gasLimit: block.gasLimit,
							gasUsed: block.gasUsed,
							timestamp: block.timestamp,
							transactions: block.transactions
							//block

							
						})*/
			var t = block.transactions
			web3.eth.getTransactionReceipt(t).then((obj)=>{
				//	console.log(
				//		obj.transactionHash,
						//t
						//from : obj.from,
						//to : obj.to,
				//	)
			web3.eth.getTransaction(obj.transactionHash).then(console.log)


			});
		})
		
		}
	
	})
	
