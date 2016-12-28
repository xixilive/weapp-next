import Promise from '../core-js/promise'

const promisify = (x, method) => (argObj) => {
  return new Promise((resolve, reject) => {
    const options = Object.assign({}, argObj, {
      success: resolve,
      fail: reject,
      complete: null
    })
    x[method](options)
  })
}

const delegate = (x, method) => (...args) => {
  return x[method](...args)
}

export default {
  promisify,
  delegate
}
