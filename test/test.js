var gecko = require('../gecko').gecko()
<<<<<<< HEAD
	, assert = require('assert')
	, str = 'nodejs'
	
var binary = gecko.toBinary(str)
=======
  , assert = require('assert')
  , str = 'nodejs'
  , binary = gecko.toBinary(str)
  , hex = gecko.toHex(str)
  , keys = Object.keys(hex).length

>>>>>>> 0681b24df4ef031f93e17d980aaa313cf2a6c4e8
var actual = JSON.stringify(binary)
var expected = JSON.stringify({n:'01101110',o:'01101111',d:'01100100',e:'01100101',j:'01101010',s:'01110011'})
assert.equal(actual, expected, 'gecko.toBinary(str) failed')

var hex = gecko.toHex(str)
var actual = JSON.stringify(hex)
var expected = JSON.stringify({n:'6e',o:'6f',d:'64',e:'65',j:'6a',s:'73'})
assert.equal(actual, expected, 'gecko.toHex(str) failed')

<<<<<<< HEAD
console.log('yay everything passed')
=======
console.log('yay everything passed')





/*
{ n: '01101110',
  o: '01101111',
  d: '01100100',
  e: '01100101',
  j: '01101010',
  s: '01110011' }
{ n: 6e,
  o: 6f,
  d: 64,
  e: 65,
  j: 6a,
  s: 73 }
*/
>>>>>>> 0681b24df4ef031f93e17d980aaa313cf2a6c4e8
