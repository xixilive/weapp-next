const {
  requireAuth,
  shortcutRequest
} = require('../es6/weapp/enhancements')

describe('shortcutRequest', () => {
  it('should define http verbs on request object', () => {
    const verbs = [
      'get', 'post', 'put', 'patch', 'delete',
      'options', 'head', 'trace', 'connect'
    ]

    const req = {}
    shortcutRequest(req)
    for(let i = 0; i < verbs.length; i++){
      expect(typeof req[verbs[i]]).toBe('function')
    }
  })
})

describe('requireAuth', () => {
  it('should resolves clean data for authentication', () => {
    const wxlogin = () => Promise.resolve({code: 'code', extra: 'extra'})
    const wxgetUserInfo = () => Promise.resolve({userInfo: 'userInfo', errMsg: 'WTF'})
    return requireAuth(wxlogin, wxgetUserInfo)().then(res => {
      expect(res).toEqual({code: 'code', userInfo: 'userInfo'})
    })
  })
})


