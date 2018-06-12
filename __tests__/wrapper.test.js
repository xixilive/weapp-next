const weapp = require('../es6/weapp')
const wx = jest.fn()

const methods = [
  'addCard', 'addPhoneContact', 'arrayBufferToBase64', 'authorize',
  'base64ToArrayBuffer', 'canIUse', 'canvasToTempFilePath',
  'checkIsSoterEnrolledInDevice', 'checkIsSupportSoterAuthentication',
  'checkSession', 'chooseAddress', 'chooseImage', 'chooseInvoiceTitle',
  'chooseLocation', 'chooseVideo', 'clearStorage', 'clearStorageSync',
  'closeBLEConnection', 'closeBluetoothAdapter', 'closeSocket', 'connectSocket',
  'connectWifi', 'createAnimation', 'createAudioContext', 'createBLEConnection',
  'createCameraContext', 'createCanvasContext', 'createContext',
  'createInnerAudioContext', 'createLivePlayerContext', 'createLivePusherContext',
  'createMapContext', 'createSelectorQuery', 'createSelectorQuery',
  'createVideoContext', 'downloadFile', 'drawCanvas', 'getBLEDeviceCharacteristics',
  'getBLEDeviceServices', 'getBackgroundAudioManager',
  'getBackgroundAudioPlayerState', 'getBeacons', 'getBluetoothAdapterState',
  'getBluetoothDevices', 'getClipboardData', 'getConnectedBluetoothDevices',
  'getConnectedWifi', 'getExtConfig', 'getExtConfigSync', 'getFileInfo',
  'getHCEState', 'getImageInfo', 'getLocation', 'getNetworkType', 'getRecorderManager',
  'getSavedFileInfo', 'getSavedFileList', 'getScreenBrightness', 'getSetting',
  'getShareInfo', 'getStorage', 'getStorageInfo', 'getStorageInfoSync',
  'getStorageSync', 'getSystemInfo', 'getSystemInfoSync', 'getUserInfo',
  'getWeRunData', 'getWifiList', 'hideLoading', 'hideNavigationBarLoading',
  'hideShareMenu', 'hideToast', 'login', 'makePhoneCall', 'navigateBack',
  'navigateBackMiniProgram', 'navigateTo', 'navigateToMiniProgram',
  'notifyBLECharacteristicValueChange', 'onAccelerometerChange',
  'onBLECharacteristicValueChange', 'onBLEConnectionStateChange',
  'onBackgroundAudioPause', 'onBackgroundAudioPlay', 'onBackgroundAudioStop',
  'onBeaconServiceChange', 'onBeaconUpdate', 'onBluetoothAdapterStateChange',
  'onBluetoothDeviceFound', 'onCompassChange', 'onEvaluateWifi', 'onGetWifiList',
  'onHCEMessage', 'onNetworkStatusChange', 'onSocketClose', 'onSocketError',
  'onSocketMessage', 'onSocketOpen', 'onUserCaptureScreen', 'onWifiConnected',
  'openBluetoothAdapter', 'openCard', 'openDocument', 'openLocation', 'openSetting',
  'pageScrollTo', 'pauseBackgroundAudio', 'pauseVoice', 'playBackgroundAudio',
  'playVoice', 'presetWifiList', 'previewImage', 'reLaunch', 'readBLECharacteristicValue',
  'redirectTo', 'removeSavedFile', 'removeStorage', 'removeStorageSync', 'reportAnalytics',
  'request', 'requestPayment', 'saveFile', 'saveImageToPhotosAlbum', 'saveVideoToPhotosAlbum',
  'scanCode', 'seekBackgroundAudio', 'sendHCEMessage', 'sendSocketMessage', 'setClipboardData',
  'setEnableDebug', 'setKeepScreenOn', 'setNavigationBarColor', 'setNavigationBarTitle',
  'setScreenBrightness', 'setStorage', 'setStorageSync', 'setTopBarText', 'setWifiList',
  'showActionSheet', 'showLoading', 'showModal', 'showNavigationBarLoading', 'showShareMenu',
  'showToast', 'startAccelerometer', 'startBeaconDiscovery', 'startBluetoothDevicesDiscovery',
  'startCompass', 'startHCE', 'startPullDownRefresh', 'startRecord', 'startSoterAuthentication',
  'startWifi', 'stopAccelerometer', 'stopBackgroundAudio', 'stopBeaconDiscovery',
  'stopBluetoothDevicesDiscovery', 'stopCompass', 'stopHCE', 'stopPullDownRefresh',
  'stopRecord', 'stopVoice', 'stopWifi', 'switchTab', 'updateShareMenu', 'uploadFile',
  'vibrateLong', 'vibrateShort', 'writeBLECharacteristicValue'
]

describe('Wrapped methods', () => {
  const httpVerbs = ['get', 'post', 'put', 'patch', 'delete', 'options', 'head', 'trace', 'connect']

  describe('Standard', () => {
    let api
    beforeAll(() => api = weapp(wx))

    it('should be defined', () => {
      methods.forEach(name => {
        expect(typeof api[name]).toBe('function')
      })

      httpVerbs.forEach(verb => expect(typeof api.request[verb]).toBe('function'))
      expect(typeof api.requireAuth).toBe('function')
      expect(typeof api.Http).toBe('function')
    })

    it('depreciate requireAuth', () => {
      expect(api.requireAuth).toThrow()
    })
  })
})
