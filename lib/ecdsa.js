'use strict'
let Ecdsa = require('yours-bitcoin/lib/ecdsa')
let KeyPair = require('yours-bitcoin/lib/key-pair')
let Hash = require('yours-bitcoin/lib/hash')
let Bn = require('yours-bitcoin/lib/bn')

let keyPair = KeyPair.fromRandom()
let data = new Buffer('this is the message I want to sign')
let hash = Hash.sha256(data)

let sig = Ecdsa.sign(hash, keyPair)
console.log('data:', data.toString())
console.log('keyPair:', keyPair.toJSON())
console.log(sig.toString())
console.log('r:', sig.r.toString())
console.log('s:', sig.s.toString())

// sig.r = sig.r.add(Bn(1))
// sig.s = sig.s.add(Bn(1))
let verified = Ecdsa.verify(hash, sig, keyPair.pubKey)
console.log(verified)
