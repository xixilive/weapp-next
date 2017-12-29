const resolveResponse = (res = {}) => {
  const isValidStatus = res.statusCode >= 200 && res.statusCode < 300
  return isValidStatus ? Promise.resolve(res) : Promise.reject(res)
}

const getResolver = (method) => {
  if(method === 'request'){
    return resolveResponse
  }
}

const wrappers = {}
wrappers.promisify = (x, method) => {
  const xfn = x[method]
  return function(obj){
    const promise = new Promise((resolve, reject) => {
      xfn(Object.assign({}, obj, {success: resolve, fail: reject, complete: null}))
    })
    const resolver = getResolver(method)
    return resolver ? promise.then(resolver) : promise
  }
}

wrappers.delegate = (x, method) => {
  const xfn = x[method]
  return function(...args){
    return xfn(...args)
  }
}

// callback or promise
wrappers.callback = (x, method) => {
  const xfn = x[method]
  return function(cb){
    if('function' === typeof cb){
      return xfn(cb)
    }
    return new Promise((resolve) => xfn(resolve))
  }
}

// overwrite
wrappers.overwrite = (x, method, {methods}) => {
  const xfn = x[method]
  return function(...args){
    const instance = xfn(...args)
    for(let im in methods){
      const fn = wrappers[methods[im]]
      if('function' !== typeof fn){
        throw new Error(`unknown warpper function: ${methods[im]}`)
      }
      const ofn = instance[im].bind(instance)
      instance[im] = (obj) => new Promise((resolve, reject) => {
        ofn(Object.assign({}, obj, {success: resolve, fail: reject, complete: null}))
      })
    }
    return instance
  }
}

export default wrappers
