const secp = require('ethereum-cryptography/secp256k1')
const { toHex } = require('ethereum-cryptography/utils')
const fs = require('fs')

function generate(num) {
	let address = {}
	for (let i = 0; i < num; i++) {
		const privateKey = secp.utils.randomPrivateKey()
		const publicKey = secp.getPublicKey(privateKey)
		const ethAddress = toHex(publicKey.slice(1).slice(-20))
		console.log(`Private key: ${privateKey}`)
		console.log(`Public key: ${publicKey}`)
		console.log(`Address: ${ethAddress}`)
		console.log('\n\n\n')
		address[ethAddress] = Math.floor(Math.random() * 100)
	}
	return address
}

function writeAddressToFile() {
	fs.writeFileSync('addresses.json', JSON.stringify(generate(3)), 'utf-8')
}

module.exports = { writeAddressToFile }
