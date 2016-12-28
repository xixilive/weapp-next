const Promise = require('../es6/promise')
describe('Promise', () => {
  it('should exports a promise function', () => {
    expect(typeof Promise).toBe('function')
    expect(typeof Promise.all).toBe('function')
    expect(typeof Promise.resolve).toBe('function')
    expect(typeof Promise.reject).toBe('function')

    const instance = new Promise((r, j) => {})
    expect(typeof instance.then).toBe('function')
    expect(typeof instance.catch).toBe('function')
  })
})
