const weapp = require('../../es6/weapp')

describe('Promisify wrapper', () => {
  
  describe('API.request', () =>{
    const wx = {
      request: jest.fn()
    }

    const origin = wx.request
    const api = weapp(wx).request

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.uploadFile', () =>{
    const wx = {
      uploadFile: jest.fn()
    }

    const origin = wx.uploadFile
    const api = weapp(wx).uploadFile

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.downloadFile', () =>{
    const wx = {
      downloadFile: jest.fn()
    }

    const origin = wx.downloadFile
    const api = weapp(wx).downloadFile

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.connectSocket', () =>{
    const wx = {
      connectSocket: jest.fn()
    }

    const origin = wx.connectSocket
    const api = weapp(wx).connectSocket

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.sendSocketMessage', () =>{
    const wx = {
      sendSocketMessage: jest.fn()
    }

    const origin = wx.sendSocketMessage
    const api = weapp(wx).sendSocketMessage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.chooseImage', () =>{
    const wx = {
      chooseImage: jest.fn()
    }

    const origin = wx.chooseImage
    const api = weapp(wx).chooseImage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.previewImage', () =>{
    const wx = {
      previewImage: jest.fn()
    }

    const origin = wx.previewImage
    const api = weapp(wx).previewImage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getImageInfo', () =>{
    const wx = {
      getImageInfo: jest.fn()
    }

    const origin = wx.getImageInfo
    const api = weapp(wx).getImageInfo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.saveImageToPhotosAlbum', () =>{
    const wx = {
      saveImageToPhotosAlbum: jest.fn()
    }

    const origin = wx.saveImageToPhotosAlbum
    const api = weapp(wx).saveImageToPhotosAlbum

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.startRecord', () =>{
    const wx = {
      startRecord: jest.fn()
    }

    const origin = wx.startRecord
    const api = weapp(wx).startRecord

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.playVoice', () =>{
    const wx = {
      playVoice: jest.fn()
    }

    const origin = wx.playVoice
    const api = weapp(wx).playVoice

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getBackgroundAudioPlayerState', () =>{
    const wx = {
      getBackgroundAudioPlayerState: jest.fn()
    }

    const origin = wx.getBackgroundAudioPlayerState
    const api = weapp(wx).getBackgroundAudioPlayerState

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.playBackgroundAudio', () =>{
    const wx = {
      playBackgroundAudio: jest.fn()
    }

    const origin = wx.playBackgroundAudio
    const api = weapp(wx).playBackgroundAudio

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.seekBackgroundAudio', () =>{
    const wx = {
      seekBackgroundAudio: jest.fn()
    }

    const origin = wx.seekBackgroundAudio
    const api = weapp(wx).seekBackgroundAudio

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.chooseVideo', () =>{
    const wx = {
      chooseVideo: jest.fn()
    }

    const origin = wx.chooseVideo
    const api = weapp(wx).chooseVideo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.saveVideoToPhotosAlbum', () =>{
    const wx = {
      saveVideoToPhotosAlbum: jest.fn()
    }

    const origin = wx.saveVideoToPhotosAlbum
    const api = weapp(wx).saveVideoToPhotosAlbum

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.saveFile', () =>{
    const wx = {
      saveFile: jest.fn()
    }

    const origin = wx.saveFile
    const api = weapp(wx).saveFile

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getFileInfo', () =>{
    const wx = {
      getFileInfo: jest.fn()
    }

    const origin = wx.getFileInfo
    const api = weapp(wx).getFileInfo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getSavedFileList', () =>{
    const wx = {
      getSavedFileList: jest.fn()
    }

    const origin = wx.getSavedFileList
    const api = weapp(wx).getSavedFileList

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getSavedFileInfo', () =>{
    const wx = {
      getSavedFileInfo: jest.fn()
    }

    const origin = wx.getSavedFileInfo
    const api = weapp(wx).getSavedFileInfo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.removeSavedFile', () =>{
    const wx = {
      removeSavedFile: jest.fn()
    }

    const origin = wx.removeSavedFile
    const api = weapp(wx).removeSavedFile

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.openDocument', () =>{
    const wx = {
      openDocument: jest.fn()
    }

    const origin = wx.openDocument
    const api = weapp(wx).openDocument

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setStorage', () =>{
    const wx = {
      setStorage: jest.fn()
    }

    const origin = wx.setStorage
    const api = weapp(wx).setStorage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getStorage', () =>{
    const wx = {
      getStorage: jest.fn()
    }

    const origin = wx.getStorage
    const api = weapp(wx).getStorage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getStorageInfo', () =>{
    const wx = {
      getStorageInfo: jest.fn()
    }

    const origin = wx.getStorageInfo
    const api = weapp(wx).getStorageInfo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.removeStorage', () =>{
    const wx = {
      removeStorage: jest.fn()
    }

    const origin = wx.removeStorage
    const api = weapp(wx).removeStorage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.clearStorage', () =>{
    const wx = {
      clearStorage: jest.fn()
    }

    const origin = wx.clearStorage
    const api = weapp(wx).clearStorage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getLocation', () =>{
    const wx = {
      getLocation: jest.fn()
    }

    const origin = wx.getLocation
    const api = weapp(wx).getLocation

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.chooseLocation', () =>{
    const wx = {
      chooseLocation: jest.fn()
    }

    const origin = wx.chooseLocation
    const api = weapp(wx).chooseLocation

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.openLocation', () =>{
    const wx = {
      openLocation: jest.fn()
    }

    const origin = wx.openLocation
    const api = weapp(wx).openLocation

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getSystemInfo', () =>{
    const wx = {
      getSystemInfo: jest.fn()
    }

    const origin = wx.getSystemInfo
    const api = weapp(wx).getSystemInfo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getNetworkType', () =>{
    const wx = {
      getNetworkType: jest.fn()
    }

    const origin = wx.getNetworkType
    const api = weapp(wx).getNetworkType

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.startAccelerometer', () =>{
    const wx = {
      startAccelerometer: jest.fn()
    }

    const origin = wx.startAccelerometer
    const api = weapp(wx).startAccelerometer

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopAccelerometer', () =>{
    const wx = {
      stopAccelerometer: jest.fn()
    }

    const origin = wx.stopAccelerometer
    const api = weapp(wx).stopAccelerometer

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.startCompass', () =>{
    const wx = {
      startCompass: jest.fn()
    }

    const origin = wx.startCompass
    const api = weapp(wx).startCompass

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopCompass', () =>{
    const wx = {
      stopCompass: jest.fn()
    }

    const origin = wx.stopCompass
    const api = weapp(wx).stopCompass

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.makePhoneCall', () =>{
    const wx = {
      makePhoneCall: jest.fn()
    }

    const origin = wx.makePhoneCall
    const api = weapp(wx).makePhoneCall

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.scanCode', () =>{
    const wx = {
      scanCode: jest.fn()
    }

    const origin = wx.scanCode
    const api = weapp(wx).scanCode

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setClipboardData', () =>{
    const wx = {
      setClipboardData: jest.fn()
    }

    const origin = wx.setClipboardData
    const api = weapp(wx).setClipboardData

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getClipboardData', () =>{
    const wx = {
      getClipboardData: jest.fn()
    }

    const origin = wx.getClipboardData
    const api = weapp(wx).getClipboardData

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.openBluetoothAdapter', () =>{
    const wx = {
      openBluetoothAdapter: jest.fn()
    }

    const origin = wx.openBluetoothAdapter
    const api = weapp(wx).openBluetoothAdapter

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.closeBluetoothAdapter', () =>{
    const wx = {
      closeBluetoothAdapter: jest.fn()
    }

    const origin = wx.closeBluetoothAdapter
    const api = weapp(wx).closeBluetoothAdapter

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getBluetoothAdapterState', () =>{
    const wx = {
      getBluetoothAdapterState: jest.fn()
    }

    const origin = wx.getBluetoothAdapterState
    const api = weapp(wx).getBluetoothAdapterState

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.startBluetoothDevicesDiscovery', () =>{
    const wx = {
      startBluetoothDevicesDiscovery: jest.fn()
    }

    const origin = wx.startBluetoothDevicesDiscovery
    const api = weapp(wx).startBluetoothDevicesDiscovery

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopBluetoothDevicesDiscovery', () =>{
    const wx = {
      stopBluetoothDevicesDiscovery: jest.fn()
    }

    const origin = wx.stopBluetoothDevicesDiscovery
    const api = weapp(wx).stopBluetoothDevicesDiscovery

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getBluetoothDevices', () =>{
    const wx = {
      getBluetoothDevices: jest.fn()
    }

    const origin = wx.getBluetoothDevices
    const api = weapp(wx).getBluetoothDevices

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getConnectedBluetoothDevices', () =>{
    const wx = {
      getConnectedBluetoothDevices: jest.fn()
    }

    const origin = wx.getConnectedBluetoothDevices
    const api = weapp(wx).getConnectedBluetoothDevices

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.createBLEConnection', () =>{
    const wx = {
      createBLEConnection: jest.fn()
    }

    const origin = wx.createBLEConnection
    const api = weapp(wx).createBLEConnection

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.closeBLEConnection', () =>{
    const wx = {
      closeBLEConnection: jest.fn()
    }

    const origin = wx.closeBLEConnection
    const api = weapp(wx).closeBLEConnection

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getBLEDeviceServices', () =>{
    const wx = {
      getBLEDeviceServices: jest.fn()
    }

    const origin = wx.getBLEDeviceServices
    const api = weapp(wx).getBLEDeviceServices

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getBLEDeviceCharacteristics', () =>{
    const wx = {
      getBLEDeviceCharacteristics: jest.fn()
    }

    const origin = wx.getBLEDeviceCharacteristics
    const api = weapp(wx).getBLEDeviceCharacteristics

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.readBLECharacteristicValue', () =>{
    const wx = {
      readBLECharacteristicValue: jest.fn()
    }

    const origin = wx.readBLECharacteristicValue
    const api = weapp(wx).readBLECharacteristicValue

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.writeBLECharacteristicValue', () =>{
    const wx = {
      writeBLECharacteristicValue: jest.fn()
    }

    const origin = wx.writeBLECharacteristicValue
    const api = weapp(wx).writeBLECharacteristicValue

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.notifyBLECharacteristicValueChange', () =>{
    const wx = {
      notifyBLECharacteristicValueChange: jest.fn()
    }

    const origin = wx.notifyBLECharacteristicValueChange
    const api = weapp(wx).notifyBLECharacteristicValueChange

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.startBeaconDiscovery', () =>{
    const wx = {
      startBeaconDiscovery: jest.fn()
    }

    const origin = wx.startBeaconDiscovery
    const api = weapp(wx).startBeaconDiscovery

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopBeaconDiscovery', () =>{
    const wx = {
      stopBeaconDiscovery: jest.fn()
    }

    const origin = wx.stopBeaconDiscovery
    const api = weapp(wx).stopBeaconDiscovery

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getBeacons', () =>{
    const wx = {
      getBeacons: jest.fn()
    }

    const origin = wx.getBeacons
    const api = weapp(wx).getBeacons

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setScreenBrightness', () =>{
    const wx = {
      setScreenBrightness: jest.fn()
    }

    const origin = wx.setScreenBrightness
    const api = weapp(wx).setScreenBrightness

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getScreenBrightness', () =>{
    const wx = {
      getScreenBrightness: jest.fn()
    }

    const origin = wx.getScreenBrightness
    const api = weapp(wx).getScreenBrightness

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setKeepScreenOn', () =>{
    const wx = {
      setKeepScreenOn: jest.fn()
    }

    const origin = wx.setKeepScreenOn
    const api = weapp(wx).setKeepScreenOn

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.vibrateLong', () =>{
    const wx = {
      vibrateLong: jest.fn()
    }

    const origin = wx.vibrateLong
    const api = weapp(wx).vibrateLong

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.vibrateShort', () =>{
    const wx = {
      vibrateShort: jest.fn()
    }

    const origin = wx.vibrateShort
    const api = weapp(wx).vibrateShort

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.addPhoneContact', () =>{
    const wx = {
      addPhoneContact: jest.fn()
    }

    const origin = wx.addPhoneContact
    const api = weapp(wx).addPhoneContact

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getHCEState', () =>{
    const wx = {
      getHCEState: jest.fn()
    }

    const origin = wx.getHCEState
    const api = weapp(wx).getHCEState

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.startHCE', () =>{
    const wx = {
      startHCE: jest.fn()
    }

    const origin = wx.startHCE
    const api = weapp(wx).startHCE

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopHCE', () =>{
    const wx = {
      stopHCE: jest.fn()
    }

    const origin = wx.stopHCE
    const api = weapp(wx).stopHCE

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.sendHCEMessage', () =>{
    const wx = {
      sendHCEMessage: jest.fn()
    }

    const origin = wx.sendHCEMessage
    const api = weapp(wx).sendHCEMessage

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.startWifi', () =>{
    const wx = {
      startWifi: jest.fn()
    }

    const origin = wx.startWifi
    const api = weapp(wx).startWifi

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.stopWifi', () =>{
    const wx = {
      stopWifi: jest.fn()
    }

    const origin = wx.stopWifi
    const api = weapp(wx).stopWifi

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.connectWifi', () =>{
    const wx = {
      connectWifi: jest.fn()
    }

    const origin = wx.connectWifi
    const api = weapp(wx).connectWifi

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getWifiList', () =>{
    const wx = {
      getWifiList: jest.fn()
    }

    const origin = wx.getWifiList
    const api = weapp(wx).getWifiList

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setWifiList', () =>{
    const wx = {
      setWifiList: jest.fn()
    }

    const origin = wx.setWifiList
    const api = weapp(wx).setWifiList

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.presetWifiList', () =>{
    const wx = {
      presetWifiList: jest.fn()
    }

    const origin = wx.presetWifiList
    const api = weapp(wx).presetWifiList

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getConnectedWifi', () =>{
    const wx = {
      getConnectedWifi: jest.fn()
    }

    const origin = wx.getConnectedWifi
    const api = weapp(wx).getConnectedWifi

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.showToast', () =>{
    const wx = {
      showToast: jest.fn()
    }

    const origin = wx.showToast
    const api = weapp(wx).showToast

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.showLoading', () =>{
    const wx = {
      showLoading: jest.fn()
    }

    const origin = wx.showLoading
    const api = weapp(wx).showLoading

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.showModal', () =>{
    const wx = {
      showModal: jest.fn()
    }

    const origin = wx.showModal
    const api = weapp(wx).showModal

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.showActionSheet', () =>{
    const wx = {
      showActionSheet: jest.fn()
    }

    const origin = wx.showActionSheet
    const api = weapp(wx).showActionSheet

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setNavigationBarTitle', () =>{
    const wx = {
      setNavigationBarTitle: jest.fn()
    }

    const origin = wx.setNavigationBarTitle
    const api = weapp(wx).setNavigationBarTitle

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setNavigationBarColor', () =>{
    const wx = {
      setNavigationBarColor: jest.fn()
    }

    const origin = wx.setNavigationBarColor
    const api = weapp(wx).setNavigationBarColor

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.setTopBarText', () =>{
    const wx = {
      setTopBarText: jest.fn()
    }

    const origin = wx.setTopBarText
    const api = weapp(wx).setTopBarText

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.navigateTo', () =>{
    const wx = {
      navigateTo: jest.fn()
    }

    const origin = wx.navigateTo
    const api = weapp(wx).navigateTo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.redirectTo', () =>{
    const wx = {
      redirectTo: jest.fn()
    }

    const origin = wx.redirectTo
    const api = weapp(wx).redirectTo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.switchTab', () =>{
    const wx = {
      switchTab: jest.fn()
    }

    const origin = wx.switchTab
    const api = weapp(wx).switchTab

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.reLaunch', () =>{
    const wx = {
      reLaunch: jest.fn()
    }

    const origin = wx.reLaunch
    const api = weapp(wx).reLaunch

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.canvasToTempFilePath', () =>{
    const wx = {
      canvasToTempFilePath: jest.fn()
    }

    const origin = wx.canvasToTempFilePath
    const api = weapp(wx).canvasToTempFilePath

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.startPullDownRefresh', () =>{
    const wx = {
      startPullDownRefresh: jest.fn()
    }

    const origin = wx.startPullDownRefresh
    const api = weapp(wx).startPullDownRefresh

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getExtConfig', () =>{
    const wx = {
      getExtConfig: jest.fn()
    }

    const origin = wx.getExtConfig
    const api = weapp(wx).getExtConfig

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.login', () =>{
    const wx = {
      login: jest.fn()
    }

    const origin = wx.login
    const api = weapp(wx).login

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.checkSession', () =>{
    const wx = {
      checkSession: jest.fn()
    }

    const origin = wx.checkSession
    const api = weapp(wx).checkSession

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.authorize', () =>{
    const wx = {
      authorize: jest.fn()
    }

    const origin = wx.authorize
    const api = weapp(wx).authorize

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getUserInfo', () =>{
    const wx = {
      getUserInfo: jest.fn()
    }

    const origin = wx.getUserInfo
    const api = weapp(wx).getUserInfo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.addCard', () =>{
    const wx = {
      addCard: jest.fn()
    }

    const origin = wx.addCard
    const api = weapp(wx).addCard

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.openCard', () =>{
    const wx = {
      openCard: jest.fn()
    }

    const origin = wx.openCard
    const api = weapp(wx).openCard

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.showShareMenu', () =>{
    const wx = {
      showShareMenu: jest.fn()
    }

    const origin = wx.showShareMenu
    const api = weapp(wx).showShareMenu

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.hideShareMenu', () =>{
    const wx = {
      hideShareMenu: jest.fn()
    }

    const origin = wx.hideShareMenu
    const api = weapp(wx).hideShareMenu

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.updateShareMenu', () =>{
    const wx = {
      updateShareMenu: jest.fn()
    }

    const origin = wx.updateShareMenu
    const api = weapp(wx).updateShareMenu

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getShareInfo', () =>{
    const wx = {
      getShareInfo: jest.fn()
    }

    const origin = wx.getShareInfo
    const api = weapp(wx).getShareInfo

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.requestPayment', () =>{
    const wx = {
      requestPayment: jest.fn()
    }

    const origin = wx.requestPayment
    const api = weapp(wx).requestPayment

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.chooseAddress', () =>{
    const wx = {
      chooseAddress: jest.fn()
    }

    const origin = wx.chooseAddress
    const api = weapp(wx).chooseAddress

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.chooseInvoiceTitle', () =>{
    const wx = {
      chooseInvoiceTitle: jest.fn()
    }

    const origin = wx.chooseInvoiceTitle
    const api = weapp(wx).chooseInvoiceTitle

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.openSetting', () =>{
    const wx = {
      openSetting: jest.fn()
    }

    const origin = wx.openSetting
    const api = weapp(wx).openSetting

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getSetting', () =>{
    const wx = {
      getSetting: jest.fn()
    }

    const origin = wx.getSetting
    const api = weapp(wx).getSetting

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.getWeRunData', () =>{
    const wx = {
      getWeRunData: jest.fn()
    }

    const origin = wx.getWeRunData
    const api = weapp(wx).getWeRunData

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.navigateToMiniProgram', () =>{
    const wx = {
      navigateToMiniProgram: jest.fn()
    }

    const origin = wx.navigateToMiniProgram
    const api = weapp(wx).navigateToMiniProgram

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.navigateBackMiniProgram', () =>{
    const wx = {
      navigateBackMiniProgram: jest.fn()
    }

    const origin = wx.navigateBackMiniProgram
    const api = weapp(wx).navigateBackMiniProgram

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.checkIsSupportSoterAuthentication', () =>{
    const wx = {
      checkIsSupportSoterAuthentication: jest.fn()
    }

    const origin = wx.checkIsSupportSoterAuthentication
    const api = weapp(wx).checkIsSupportSoterAuthentication

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.startSoterAuthentication', () =>{
    const wx = {
      startSoterAuthentication: jest.fn()
    }

    const origin = wx.startSoterAuthentication
    const api = weapp(wx).startSoterAuthentication

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
  describe('API.checkIsSoterEnrolledInDevice', () =>{
    const wx = {
      checkIsSoterEnrolledInDevice: jest.fn()
    }

    const origin = wx.checkIsSoterEnrolledInDevice
    const api = weapp(wx).checkIsSoterEnrolledInDevice

    it('should return a promise object', () => {
      const ret = api()
      expect(Object.prototype.toString.call(ret)).toEqual('[object Promise]')
      expect(origin).toHaveBeenCalled()
    })
  })
  
})
