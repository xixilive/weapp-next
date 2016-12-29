const wrapper = require('../es6/wx')

describe('Request', () => {
  describe('via shortcut method:', () => {
    const successMock = jest.fn()
    const failMock = jest.fn()

    const mocks = {
      //resolve
      success: (fn) => successMock.mockReturnValue(fn('success')),

      //reject
      fail: (fn) => failMock.mockReturnValue(fn('fail'))
    }

    const request = (resolve) => ({success, fail, complete, ...args}) => {
      if(resolve){
        mocks.success(success)(args)
      }else{
        mocks.fail(fail)(args)
      }
    }

    const wx = (resolve) => ({request: request(resolve)})

    const perform = (verb, success) => () => {
      const req = wrapper(wx(!!success)).request
      const withBody = ~['post', 'put', 'patch'].indexOf(verb)
      const args = withBody ? ['url', 'body'] : ['url']
      const expectResponse = (response) => {
        const calls = success ? successMock.mock.calls : failMock.mock.calls
        const {url, method, body} = calls.slice(-1)[0][0]
        expect(url).toEqual('url')
        expect(method).toEqual(method)
        expect(body).toEqual(withBody ? 'body' : undefined)

        expect(response).toEqual(success ? 'success' : 'fail')
      }

      return req[verb](...args)[success ? 'then' : 'catch'](expectResponse)
    }

    ['get', 'post', 'put', 'patch', 'options', 'head', 'trace', 'connect'].forEach(verb => {
      it(`${verb.toUpperCase()} should be succeed`, perform(verb, true))
      it(`${verb.toUpperCase()} should be failed`, perform(verb, false))
    })
  })

  it('with init function should interprete request params', () => {
    const mock = jest.fn()
    const resolve = (fn) => mock.mockReturnValue(fn('success'))
    const request = ({success, ...args}) => {
      resolve(success)(args)
    }
    return wrapper({request}).request.get('url', () => ({dataType: 'json'})).then(response => {
      expect(response).toEqual('success')
      const params = mock.mock.calls[0][0]
      expect(params.dataType).toEqual('json')
    })
  })
})
