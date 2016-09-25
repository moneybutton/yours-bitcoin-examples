'use strict'
let Hash = require('yours-bitcoin/lib/hash')
let Bn = require('yours-bitcoin/lib/bn')

let buf = new Buffer('this is the data that i want to hash')
let buf2 = new Buffer('this is the data that i want to hash ')
let hash = Hash.sha1(buf)
let hash2 = Hash.sha1(buf2)
console.log(buf.toString())
console.log(buf.toString('hex'))
console.log(buf2.toString('hex'))
console.log(hash.toString('hex'))
console.log(hash2.toString('hex'))
let buf3 = new Buffer('')
let hash3 = Hash.sha1(buf3)
console.log(hash3.toString('hex'))
console.log(hash3.length)
let hash256 = Hash.sha256(buf)
console.log(hash.toString('hex'))
console.log(hash256.toString('hex'))
let hash256256 = Hash.sha256Sha256(buf)
console.log(hash256256.toString('hex'))
let extended
let hash_extended
let i
buf = buf2
for (i = 0; i < 234234234234; i++) {
  extended = Buffer.concat([buf, new Buffer(i.toString())])
  hash_extended = Hash.sha256Sha256(extended)
  if (hash_extended[0] === 0) {
    break
  }
}
console.log('hash_extended:', hash_extended.toString('hex'))
console.log('i:', i)
console.log('buf (hex):', buf.toString('hex'))
console.log('extended (hex):', extended.toString('hex'))
for (i = 0; i < 234234234234; i++) {
  extended = Buffer.concat([buf, new Buffer(i.toString())])
  hash_extended = Hash.sha256Sha256(extended)
  let hashBn = new Bn().fromBuffer(hash_extended)
  let targetBn = new Bn().fromHex('00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
  if (hashBn.lt(targetBn)) {
    break
  }
}
console.log('hash_extended:', hash_extended.toString('hex'))
console.log('i:', i)
console.log('buf (hex):', buf.toString('hex'))
console.log('extended (hex):', extended.toString('hex'))

// HMAC
let data = buf
let key = new Buffer('hello')
let hmac = Hash.sha256Hmac(data, key)
console.log(hmac.toString('hex'))
