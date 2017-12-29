const definitions = require('../es6/weapp/definitions')

describe('Filter defined methods', () => {
  it('should allows filter function', () => {
    const methods = definitions(method => method.name === 'request')
    expect(methods.length).toEqual(1)
    expect(methods[0]).toEqual({name: 'request', wrapper: 'promisify'})
  })

  it('should allows filter string', () => {
    const methods = definitions('promisify')
    const negative = m => m.wrapper !== 'promisify'
    expect(methods.length).toBeGreaterThan(0)
    expect(methods.filter(negative).length).toEqual(0)
  })
})
