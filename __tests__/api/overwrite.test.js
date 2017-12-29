const weapp = require('../../es6/weapp')

describe('Overwrite wrapper222', () => {
  
  describe('API.createCameraContext', () =>{
    const mockInstance = {
    
    takePhoto: (o) => o.success('success'),
    
    startRecord: (o) => o.success('success'),
    
    stopRecord: (o) => o.success('success'),
    
    }

    const wx = {
      createCameraContext: jest.fn().mockReturnValue(mockInstance)
    }

    const origin = wx.createCameraContext
    const api = weapp(wx).createCameraContext

    describe('instance methods call', () => {
      const instance = api()
      
      it('#takePhoto', () => {
        return instance.takePhoto().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#startRecord', () => {
        return instance.startRecord().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#stopRecord', () => {
        return instance.stopRecord().then(result => {
          expect(result).toEqual('success')
        })
      })
      
    })
  })
  
  describe('API.createLivePlayerContext', () =>{
    const mockInstance = {
    
    play: (o) => o.success('success'),
    
    stop: (o) => o.success('success'),
    
    mute: (o) => o.success('success'),
    
    requestFullScreen: (o) => o.success('success'),
    
    exitFullScreen: (o) => o.success('success'),
    
    }

    const wx = {
      createLivePlayerContext: jest.fn().mockReturnValue(mockInstance)
    }

    const origin = wx.createLivePlayerContext
    const api = weapp(wx).createLivePlayerContext

    describe('instance methods call', () => {
      const instance = api()
      
      it('#play', () => {
        return instance.play().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#stop', () => {
        return instance.stop().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#mute', () => {
        return instance.mute().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#requestFullScreen', () => {
        return instance.requestFullScreen().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#exitFullScreen', () => {
        return instance.exitFullScreen().then(result => {
          expect(result).toEqual('success')
        })
      })
      
    })
  })
  
  describe('API.createLivePusherContext', () =>{
    const mockInstance = {
    
    play: (o) => o.success('success'),
    
    stop: (o) => o.success('success'),
    
    mute: (o) => o.success('success'),
    
    requestFullScreen: (o) => o.success('success'),
    
    exitFullScreen: (o) => o.success('success'),
    
    }

    const wx = {
      createLivePusherContext: jest.fn().mockReturnValue(mockInstance)
    }

    const origin = wx.createLivePusherContext
    const api = weapp(wx).createLivePusherContext

    describe('instance methods call', () => {
      const instance = api()
      
      it('#play', () => {
        return instance.play().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#stop', () => {
        return instance.stop().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#mute', () => {
        return instance.mute().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#requestFullScreen', () => {
        return instance.requestFullScreen().then(result => {
          expect(result).toEqual('success')
        })
      })
      
      it('#exitFullScreen', () => {
        return instance.exitFullScreen().then(result => {
          expect(result).toEqual('success')
        })
      })
      
    })
  })
  
})
