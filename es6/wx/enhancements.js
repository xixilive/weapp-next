import Promise from '../vendor/promise'

const shortcut = (request, method) => (url, body, init) => {
  const config = {}
  if(typeof body === 'function'){
    init = body
    body = undefined
  }

  if(['GET', 'HEAD', 'DELETE', 'TRACE', 'CONNECT'].indexOf(method) !== -1){
    body = undefined
  }

  if(typeof init === 'function'){
    Object.assign(config, init())
  }

  if(body !== undefined){
    Object.assign(config, {body})
  }

  const {header} = config
  const {VERSION} = process.env
  config.header = Object.assign({}, header, {'X-Wrapped-With': `v${VERSION}`})
  return request(Object.assign(config, {url, method}))
}

// to decorate promisified request function
function shortcutRequest(req){
  req.get = shortcut(req, 'GET')
  req.post = shortcut(req, 'POST')
  req.put = shortcut(req, 'PUT')
  req.patch = shortcut(req, 'PATCH')
  req['delete'] = shortcut(req, 'DELETE')
  req.options = shortcut(req, 'OPTIONS')
  req.head = shortcut(req, 'HEAD')
  req.trace = shortcut(req, 'TRACE')
  req.connect = shortcut(req, 'CONNECT')
  return req
}

function requireAuth(login, getUserInfo){
  return () => Promise.all([login(), getUserInfo()])
}

export {
  shortcutRequest,
  requireAuth
}
