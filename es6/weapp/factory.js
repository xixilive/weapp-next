import Promise from '../vendor/promise'

const resolveResponse = (response = {}) => {
  return new Promise((resolve, reject) => {
    if(response.statusCode >= 200 && response.statusCode < 300){
      resolve(response)
    }else{
      reject(response)
    }
  })
}

const promisify = (x, method) => (argObj) => {
  const promise = new Promise((resolve, reject) => {
    const options = Object.assign({}, argObj, {
      success: resolve,
      fail: reject,
      complete: null
    })
    x[method](options)
  })

  return method === 'request' ? promise.then(resolveResponse) : promise
}

const delegate = (x, method) => (...args) => {
  return x[method](...args)
}

export default {
  promisify,
  delegate
}
