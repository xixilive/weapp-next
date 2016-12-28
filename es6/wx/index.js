import getMethods from './definitions'
import factory from './factory'
import {shortcutRequest, queryAuth} from './enhancements'

const wrapMethods = (dest, src, methods) => {
  for(let i = 0; i < methods.length; i++){
    let {name, wrapper} = methods[i]
    dest[name] = factory[wrapper](src, name)
  }
}

export default function wxWrapper(x, grouped = false){
  const wxx = {}
  const methods = getMethods(grouped)
  if(grouped){
    for(let g in methods){
      wxx[g] = {}
      wrapMethods(wxx[g], x, methods[g])
    }
    shortcutRequest(wxx.net.request)
    wxx.auth.queryAuth = queryAuth
  }else{
    wrapMethods(wxx, x, methods)
    shortcutRequest(wxx.request)
    wxx.queryAuth = queryAuth
  }

  return wxx
}
