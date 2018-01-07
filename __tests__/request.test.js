const weapp = require('../es6/weapp')

describe('Request', () => {
  const successResponse = {data: 'success', statusCode: 200}
  const failureResponse = {data: 'fail', statusCode: 300}

  describe('via shortcut method:', () => {
    const successMock = jest.fn()
    const failMock = jest.fn()

    const mocks = {
      //resolve
      success: (fn) => {
        return successMock.mockReturnValue(fn(successResponse))
      },

      //reject
      fail: (fn) => {
        return failMock.mockReturnValue(fn(failureResponse))
      }
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
      const req = weapp(wx(!!success)).request
      const withBody = ~['post', 'put', 'patch'].indexOf(verb)
      const args = withBody ? ['url', 'body'] : ['url']
      const expectResponse = (response) => {
        const calls = success ? successMock.mock.calls : failMock.mock.calls
        const {url, method, data} = calls.slice(-1)[0][0]
        expect(url).toEqual('url')
        expect(method).toEqual(method)
        expect(data).toEqual(withBody ? 'body' : undefined)
        expect(response).toEqual(success ? successResponse : failureResponse)
      }

      return req[verb](...args)[success ? 'then' : 'catch'](expectResponse)
    }

    ['get', 'post', 'put', 'patch', 'options', 'head', 'trace', 'connect'].forEach(verb => {
      it(`${verb.toUpperCase()} should be succeed`, perform(verb, true))
      it(`${verb.toUpperCase()} should be failed`, perform(verb, false))
    })
  })

  it('with init function should interpolate request params', () => {
    const mock = jest.fn()
    const resolve = (fn) => mock.mockReturnValue(fn(successResponse))
    const request = ({success, ...args}) => {
      resolve(success)(args)
    }
    return weapp({request}).request.get('url', () => ({dataType: 'json'})).then(response => {
      expect(response).toEqual(successResponse)
      const params = mock.mock.calls[0][0]
      expect(params.dataType).toEqual('json')
    })
  })
})
