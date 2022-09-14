const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word === null || undefined === word){
    return undefined
  }else if(word.includes(startWord)){
    return word
  }else{
    return startWord+word
  }
}

module.exports = fillStartWord
