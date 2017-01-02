// req: wrapped wx.request
const Http = (req) => (base) => {
  const baseUrl = `${base}/`.replace(/\/+$/, '/')

  const isObject = (obj) => {
    if(Object.prototype.toString.call(obj) !== '[object Object]'){
      return false
    }
    return Object.keys(obj).length > 0
  }

  //TODO: nested object to query string
  const toQueryString = (params) => {
    return Object.keys(params).reduce((mem, key) => {
      if(params[key]){
        mem.push(`${key}=${encodeURIComponent(params[key])}`)
      }
      return mem
    }, []).join('&')
  }

  const buildUrl = (path = '', params = {}) => {
    const url = `${baseUrl}${path.replace(/^\/+/, '')}`
    if(isObject(params)){
      return `${url}?${toQueryString(params)}`
    }
    return url
  }

  const requestWithParams = (method) => (path, params) => {
    const url = buildUrl(path, params)
    return req[method](url)
  }

  const requestWithBody = (method) => (path, body, params = null) => {
    const url = buildUrl(path, params)
    return req[method](url, body)
  }

  return {
    get: requestWithParams('get'),
    post: requestWithBody('post'),
    put: requestWithBody('put'),
    patch: requestWithBody('patch'),
    'delete': requestWithParams('delete'),
    head: requestWithParams('head')
  }
}

export default Http
