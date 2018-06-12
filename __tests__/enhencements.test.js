const {
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


