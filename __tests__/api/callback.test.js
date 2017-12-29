const weapp = require('../../es6/weapp')

describe('Callback wrapper', () => {
  
  describe('API.onSocketOpen', () =>{
    const wx = {
      onSocketOpen: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onSocketOpen
    const api = weapp(wx).onSocketOpen

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onSocketError', () =>{
    const wx = {
      onSocketError: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onSocketError
    const api = weapp(wx).onSocketError

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onSocketMessage', () =>{
    const wx = {
      onSocketMessage: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onSocketMessage
    const api = weapp(wx).onSocketMessage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onSocketClose', () =>{
    const wx = {
      onSocketClose: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onSocketClose
    const api = weapp(wx).onSocketClose

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onBackgroundAudioPlay', () =>{
    const wx = {
      onBackgroundAudioPlay: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onBackgroundAudioPlay
    const api = weapp(wx).onBackgroundAudioPlay

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onBackgroundAudioPause', () =>{
    const wx = {
      onBackgroundAudioPause: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onBackgroundAudioPause
    const api = weapp(wx).onBackgroundAudioPause

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onBackgroundAudioStop', () =>{
    const wx = {
      onBackgroundAudioStop: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onBackgroundAudioStop
    const api = weapp(wx).onBackgroundAudioStop

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onNetworkStatusChange', () =>{
    const wx = {
      onNetworkStatusChange: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onNetworkStatusChange
    const api = weapp(wx).onNetworkStatusChange

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onAccelerometerChange', () =>{
    const wx = {
      onAccelerometerChange: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onAccelerometerChange
    const api = weapp(wx).onAccelerometerChange

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onCompassChange', () =>{
    const wx = {
      onCompassChange: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onCompassChange
    const api = weapp(wx).onCompassChange

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onBluetoothAdapterStateChange', () =>{
    const wx = {
      onBluetoothAdapterStateChange: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onBluetoothAdapterStateChange
    const api = weapp(wx).onBluetoothAdapterStateChange

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onBluetoothDeviceFound', () =>{
    const wx = {
      onBluetoothDeviceFound: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onBluetoothDeviceFound
    const api = weapp(wx).onBluetoothDeviceFound

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onBLEConnectionStateChange', () =>{
    const wx = {
      onBLEConnectionStateChange: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onBLEConnectionStateChange
    const api = weapp(wx).onBLEConnectionStateChange

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onBLECharacteristicValueChange', () =>{
    const wx = {
      onBLECharacteristicValueChange: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onBLECharacteristicValueChange
    const api = weapp(wx).onBLECharacteristicValueChange

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onBeaconUpdate', () =>{
    const wx = {
      onBeaconUpdate: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onBeaconUpdate
    const api = weapp(wx).onBeaconUpdate

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onBeaconServiceChange', () =>{
    const wx = {
      onBeaconServiceChange: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onBeaconServiceChange
    const api = weapp(wx).onBeaconServiceChange

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onUserCaptureScreen', () =>{
    const wx = {
      onUserCaptureScreen: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onUserCaptureScreen
    const api = weapp(wx).onUserCaptureScreen

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onHCEMessage', () =>{
    const wx = {
      onHCEMessage: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onHCEMessage
    const api = weapp(wx).onHCEMessage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onGetWifiList', () =>{
    const wx = {
      onGetWifiList: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onGetWifiList
    const api = weapp(wx).onGetWifiList

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onWifiConnected', () =>{
    const wx = {
      onWifiConnected: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onWifiConnected
    const api = weapp(wx).onWifiConnected

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.onEvaluateWifi', () =>{
    const wx = {
      onEvaluateWifi: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.onEvaluateWifi
    const api = weapp(wx).onEvaluateWifi

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })

    it('should return origin\'s returnValue', () => {
      const ret = api(() => {})
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
})
