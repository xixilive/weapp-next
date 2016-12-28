const Inspect = require('../es6/inspector')

describe('Inspector', () => {
  it('should exports a function', () => {
    expect(typeof Inspect).toBe('function')
  })
})
