import getMethods from './definitions'
import factory from './factory'
import Http from './http'
import {shortcutRequest, requireAuth} from './enhancements'

const wrapMethods = (dest, src, methods) => {
  for(let i = 0; i < methods.length; i++){
    let {name, wrapper} = methods[i]
    dest[name] = factory[wrapper](src, name)
  }
}

export default function wxWrapper(x, grouped = false){
  const wxx = {
    VERSION: process.env.VERSION
  }

  const methods = getMethods(grouped)
  if(grouped){
    for(let g in methods){
      wxx[g] = {}
      wrapMethods(wxx[g], x, methods[g])
    }
    shortcutRequest(wxx.net.request)
    wxx.auth.requireAuth = requireAuth(wxx.auth.login, wxx.auth.getUserInfo)
    wxx.Http = Http(wxx.net.request)
  }else{
    wrapMethods(wxx, x, methods)
    shortcutRequest(wxx.request)
    wxx.requireAuth = requireAuth(wxx.login, wxx.getUserInfo)
    wxx.Http = Http(wxx.request)
  }

  return wxx
}
