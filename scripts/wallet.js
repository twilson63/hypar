import Arweave from 'arweave'
import fs from 'fs'

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
})

const w = await arweave.wallets.generate()
fs.writeFileSync('./wallet.json', JSON.stringify(w))
console.log('Address: ', await arweave.wallets.jwkToAddress(w))
