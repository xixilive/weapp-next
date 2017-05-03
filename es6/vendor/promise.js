let promise
if('undefined' !== typeof Promise){
  promise = Promise
}else{
  console.warn('Promise vendor was depreciated, and will be remove in next release')
  promise = require('core-js/library/es6/promise')
  // flag for inspector
  promise.__polyfill__ = 'core-js'
}

export default promise
