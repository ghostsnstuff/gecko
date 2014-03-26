exports.gecko = gecko

function gecko() {
  if(!(this instanceof gecko)) return new gecko()
    // converts string to tc binary
    this.toBinary = function(str) {
      var binary = {}
      for (var i = 0; i < str.length ; i++) {
        binary[str[i]] = zeroFill(str.charCodeAt(i).toString(2), 8) // radix 2
      }	
      return binary
    }
    // converts string to hex
    this.toHex = function(str) {
      var hex = {}
      for (var i = 0; i < str.length ; i++) {
        hex[str[i]] = str.charCodeAt(i).toString(16) // radix 16
      }	
      return hex
    }
}

function zeroFill(number, width) {
  width -= number.length
  if (width > 0) {
    return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number
  }
<<<<<<< HEAD
  return number + ''
}
=======
  return number + '' 
}
>>>>>>> f951bb72c3d0e669cb4b8591eafa4041cc04287e
