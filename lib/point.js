let Point = require('yours-bitcoin/lib/point')
let Bn = require('yours-bitcoin/lib/bn')
let PubKey = require('yours-bitcoin/lib/pub-key')
let PrivKey = require('yours-bitcoin/lib/priv-key')

let G = Point.getG() // base point of the curve secp256k1
console.log(G.toString())
let N = Point.getN() // order of the curve secp256k1
console.log(N.toString())
let G2 = G.add(G) // "adding" - not really adding x and y
console.log(G2.toString())
let x2 = G.x.add(G.x)
let y2 = G.y.add(G.y)
console.log({x: x2.toString(), y: y2.toString()})
// if G2 = G.add(G), it is NOT the case that G2.x = G.x.add(G.x)
// because Point "add" (addition) is NOT equal vector addition
let P = G.mul(Bn(1))
console.log(G.toString())
console.log(P.toString())
let P2 = G.mul(Bn(2))
console.log(G2.toString())
console.log(P2.toString())
let P3 = G.mul(Bn(3))
let G3 = G.add(G).add(G) // "adding" - not really adding x and y
console.log(G3.toString())
console.log(P3.toString())
// G.mul(1) = G                  1G = G
// G.mul(2) = G.add(G)           2G = G + G
// G.mul(3) = G.add(G).add(G)    3G = G + G + G
// undefined:
// let P0 = G.mul(Bn(0))
// console.log(P0.toString())
let A = G.mul(Bn(50000))
let B = G.mul(Bn(2394829387497))
let C = G.mul(Bn(23))
console.log(A.toString())
console.log(B.toString())
console.log(C.toString())
console.log(A.add(B).add(C).toString())
console.log(A.add(B.add(C)).toString())
// Associativity: A+(B+C) = (A+B)+C
console.log(A.add(B).add(C).toString())
console.log(A.add(C).add(B).toString())
// Commutivity: A+B = B+A
// By definition, A-B ???? A+B = C, then C - B = A ... definition of subtraction
// ...computationally, subtraction is extremely difficult
let D = G.mul(Bn('44444442526666666666666666666662222222982349873459873459734592'))
console.log(D.toString())
// D = G + G + G + G + ... (some very large number of times) ... + G
// public key = (private key) * G
// P = pG  // computionally possible
// p = P/G // computationally impossible
let privKey = PrivKey.fromBn(Bn(50000))
let pubKey = PubKey.fromPrivKey(privKey)
console.log(privKey.bn.toString())
console.log(pubKey.point.toString())
console.log(G.mul(privKey.bn).toString())
