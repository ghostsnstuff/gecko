var gecko = require('../gecko').gecko()
<<<<<<< HEAD
	, assert = require('assert')
	, str = 'nodejs'
=======
  , assert = require('assert')
  , str = 'nodejs'
>>>>>>> f951bb72c3d0e669cb4b8591eafa4041cc04287e
	
var binary = gecko.toBinary(str)
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
>>>>>>> f951bb72c3d0e669cb4b8591eafa4041cc04287e
