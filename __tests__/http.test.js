const Http = require('../es6/wx/http')

const req = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  patch: jest.fn(),
  delete: jest.fn(),
  head: jest.fn()
}

describe('Http', () => {
  const http = Http(req)('https://base.url')

  const reqWithParams = (verb) => () => {
    const method = http[verb]
    const mock = req[verb]
    method('/path')
    expect(mock).toHaveBeenCalledWith('https://base.url/path')
    method('/path', {q: 'q/'})
    expect(mock).toHaveBeenCalledWith('https://base.url/path?q=q%2F')
    expect(mock).toHaveBeenCalledTimes(2)
  }

  const reqWithBody = (verb) => () => {
    const method = http[verb]
    const mock = req[verb]
    method('/path')
    expect(mock).toHaveBeenCalledWith('https://base.url/path', undefined)
    method('/path', {q: 'q/'})
    expect(mock).toHaveBeenCalledWith('https://base.url/path', {q: 'q/'})
    expect(mock).toHaveBeenCalledTimes(2)
  }

  it('GET', reqWithParams('get'))
  it('DELETE', reqWithParams('delete'))
  it('HEAD', reqWithParams('head'))

  it('POST', reqWithBody('post'))
  it('PUT', reqWithBody('put'))
  it('PATCH', reqWithBody('patch'))
})
