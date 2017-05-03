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

function wxWrapper(x, grouped = false){
  const weapp = {
    VERSION: process.env.VERSION,
    API_VERSION: process.env.API_VERSION
  }

  const methods = getMethods(grouped)
  if(grouped){
    for(let g in methods){
      weapp[g] = {}
      wrapMethods(weapp[g], x, methods[g])
    }
    shortcutRequest(weapp.net.request)
    weapp.auth.requireAuth = requireAuth(weapp.auth.login, weapp.auth.getUserInfo)
    weapp.Http = Http(weapp.net.request)
  }else{
    wrapMethods(weapp, x, methods)
    shortcutRequest(weapp.request)
    weapp.requireAuth = requireAuth(weapp.login, weapp.getUserInfo)
    weapp.Http = Http(weapp.request)
  }

  return weapp
}

wxWrapper.group = (x) => wxWrapper(x, true)

export default wxWrapper
