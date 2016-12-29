const Promise = require('core-js/library/es6/promise')

// flag for inspector
Promise.__polyfill__ = 'core-js'

export default Promise
