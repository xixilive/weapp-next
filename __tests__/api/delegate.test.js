const weapp = require('../../es6/weapp')

describe('Delegate wrapper', () => {
  
  describe('API.closeSocket', () =>{
    const wx = {
      closeSocket: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.closeSocket
    const api = weapp(wx).closeSocket

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopRecord', () =>{
    const wx = {
      stopRecord: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.stopRecord
    const api = weapp(wx).stopRecord

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getRecorderManager', () =>{
    const wx = {
      getRecorderManager: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.getRecorderManager
    const api = weapp(wx).getRecorderManager

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.pauseVoice', () =>{
    const wx = {
      pauseVoice: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.pauseVoice
    const api = weapp(wx).pauseVoice

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopVoice', () =>{
    const wx = {
      stopVoice: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.stopVoice
    const api = weapp(wx).stopVoice

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.pauseBackgroundAudio', () =>{
    const wx = {
      pauseBackgroundAudio: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.pauseBackgroundAudio
    const api = weapp(wx).pauseBackgroundAudio

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopBackgroundAudio', () =>{
    const wx = {
      stopBackgroundAudio: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.stopBackgroundAudio
    const api = weapp(wx).stopBackgroundAudio

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getBackgroundAudioManager', () =>{
    const wx = {
      getBackgroundAudioManager: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.getBackgroundAudioManager
    const api = weapp(wx).getBackgroundAudioManager

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createAudioContext', () =>{
    const wx = {
      createAudioContext: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.createAudioContext
    const api = weapp(wx).createAudioContext

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createInnerAudioContext', () =>{
    const wx = {
      createInnerAudioContext: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.createInnerAudioContext
    const api = weapp(wx).createInnerAudioContext

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createVideoContext', () =>{
    const wx = {
      createVideoContext: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.createVideoContext
    const api = weapp(wx).createVideoContext

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setStorageSync', () =>{
    const wx = {
      setStorageSync: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.setStorageSync
    const api = weapp(wx).setStorageSync

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getStorageSync', () =>{
    const wx = {
      getStorageSync: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.getStorageSync
    const api = weapp(wx).getStorageSync

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getStorageInfoSync', () =>{
    const wx = {
      getStorageInfoSync: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.getStorageInfoSync
    const api = weapp(wx).getStorageInfoSync

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.removeStorageSync', () =>{
    const wx = {
      removeStorageSync: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.removeStorageSync
    const api = weapp(wx).removeStorageSync

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.clearStorageSync', () =>{
    const wx = {
      clearStorageSync: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.clearStorageSync
    const api = weapp(wx).clearStorageSync

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createMapContext', () =>{
    const wx = {
      createMapContext: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.createMapContext
    const api = weapp(wx).createMapContext

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getSystemInfoSync', () =>{
    const wx = {
      getSystemInfoSync: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.getSystemInfoSync
    const api = weapp(wx).getSystemInfoSync

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.canIUse', () =>{
    const wx = {
      canIUse: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.canIUse
    const api = weapp(wx).canIUse

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.hideToast', () =>{
    const wx = {
      hideToast: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.hideToast
    const api = weapp(wx).hideToast

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.hideLoading', () =>{
    const wx = {
      hideLoading: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.hideLoading
    const api = weapp(wx).hideLoading

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.showNavigationBarLoading', () =>{
    const wx = {
      showNavigationBarLoading: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.showNavigationBarLoading
    const api = weapp(wx).showNavigationBarLoading

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.hideNavigationBarLoading', () =>{
    const wx = {
      hideNavigationBarLoading: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.hideNavigationBarLoading
    const api = weapp(wx).hideNavigationBarLoading

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.navigateBack', () =>{
    const wx = {
      navigateBack: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.navigateBack
    const api = weapp(wx).navigateBack

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createAnimation', () =>{
    const wx = {
      createAnimation: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.createAnimation
    const api = weapp(wx).createAnimation

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.pageScrollTo', () =>{
    const wx = {
      pageScrollTo: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.pageScrollTo
    const api = weapp(wx).pageScrollTo

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createSelectorQuery', () =>{
    const wx = {
      createSelectorQuery: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.createSelectorQuery
    const api = weapp(wx).createSelectorQuery

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createCanvasContext', () =>{
    const wx = {
      createCanvasContext: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.createCanvasContext
    const api = weapp(wx).createCanvasContext

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createContext', () =>{
    const wx = {
      createContext: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.createContext
    const api = weapp(wx).createContext

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.drawCanvas', () =>{
    const wx = {
      drawCanvas: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.drawCanvas
    const api = weapp(wx).drawCanvas

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopPullDownRefresh', () =>{
    const wx = {
      stopPullDownRefresh: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.stopPullDownRefresh
    const api = weapp(wx).stopPullDownRefresh

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createSelectorQuery', () =>{
    const wx = {
      createSelectorQuery: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.createSelectorQuery
    const api = weapp(wx).createSelectorQuery

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getExtConfigSync', () =>{
    const wx = {
      getExtConfigSync: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.getExtConfigSync
    const api = weapp(wx).getExtConfigSync

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.arrayBufferToBase64', () =>{
    const wx = {
      arrayBufferToBase64: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.arrayBufferToBase64
    const api = weapp(wx).arrayBufferToBase64

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.base64ToArrayBuffer', () =>{
    const wx = {
      base64ToArrayBuffer: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.base64ToArrayBuffer
    const api = weapp(wx).base64ToArrayBuffer

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.reportAnalytics', () =>{
    const wx = {
      reportAnalytics: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.reportAnalytics
    const api = weapp(wx).reportAnalytics

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setEnableDebug', () =>{
    const wx = {
      setEnableDebug: jest.fn().mockReturnValue('RETURN')
    }

    const origin = wx.setEnableDebug
    const api = weapp(wx).setEnableDebug

    it('should delegate to origin', () => {
      const ret = api()
      expect(ret).toEqual('RETURN')
      expect(origin).toHaveBeenCalled()
    })
  })
  
})
