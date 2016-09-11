let PubKey = require('yours-bitcoin/lib/pub-key')
let PrivKey = require('yours-bitcoin/lib/priv-key')

let privKey = PrivKey.fromRandom()
let pubKey = PubKey.fromPrivKey(privKey)
console.log(privKey.toString())
console.log(pubKey.toString())
pubKey.compressed = false
console.log(pubKey.toString())
