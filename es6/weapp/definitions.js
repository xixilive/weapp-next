const definitions = [
  // http
  {name: 'request', wrapper: 'promisify'},
  {name: 'uploadFile', wrapper: 'promisify'},
  {name: 'downloadFile', wrapper: 'promisify'},

  // socket
  {name: 'connectSocket', wrapper: 'promisify'},
  {name: 'onSocketOpen', wrapper: 'callback'},
  {name: 'onSocketError', wrapper: 'callback'},
  {name: 'sendSocketMessage', wrapper: 'promisify'},
  {name: 'onSocketMessage', wrapper: 'callback'},
  {name: 'closeSocket', wrapper: 'delegate'},
  {name: 'onSocketClose', wrapper: 'callback'},

  // image
  {name: 'chooseImage', wrapper: 'promisify'},
  {name: 'previewImage', wrapper: 'promisify'},
  {name: 'getImageInfo', wrapper: 'promisify'},
  {name: 'saveImageToPhotosAlbum', wrapper: 'promisify'},

  // audio && voice
  {name: 'startRecord', wrapper: 'promisify'},
  {name: 'stopRecord', wrapper: 'delegate'},
  {name: 'getRecorderManager', wrapper: 'delegate'},
  {name: 'playVoice', wrapper: 'promisify'},
  {name: 'pauseVoice', wrapper: 'delegate'},
  {name: 'stopVoice', wrapper: 'delegate'},
  {name: 'getBackgroundAudioPlayerState', wrapper: 'promisify'},
  {name: 'playBackgroundAudio', wrapper: 'promisify'},
  {name: 'pauseBackgroundAudio', wrapper: 'delegate'},
  {name: 'seekBackgroundAudio', wrapper: 'promisify'},
  {name: 'stopBackgroundAudio', wrapper: 'delegate'},
  {name: 'onBackgroundAudioPlay', wrapper: 'callback'},
  {name: 'onBackgroundAudioPause', wrapper: 'callback'},
  {name: 'onBackgroundAudioStop', wrapper: 'callback'},
  {name: 'getBackgroundAudioManager', wrapper: 'delegate'},
  {name: 'createAudioContext', wrapper: 'delegate'},
  {name: 'createInnerAudioContext', wrapper: 'delegate'},

  // video && camera
  {name: 'chooseVideo', wrapper: 'promisify'},
  {name: 'saveVideoToPhotosAlbum', wrapper: 'promisify'},
  {name: 'createVideoContext', wrapper: 'delegate'},
  {name: 'createCameraContext', wrapper: 'overwrite', methods: {
    takePhoto: 'promisify',
    startRecord: 'promisify',
    stopRecord: 'promisify'
  }},
  {name: 'createLivePlayerContext', wrapper: 'overwrite', methods: {
    play: 'promisify',
    stop: 'promisify',
    mute: 'promisify',
    requestFullScreen: 'promisify',
    exitFullScreen: 'promisify'
  }},
  {name: 'createLivePusherContext', wrapper: 'overwrite', methods: {
    play: 'promisify',
    stop: 'promisify',
    mute: 'promisify',
    requestFullScreen: 'promisify',
    exitFullScreen: 'promisify'
  }},

  // file
  {name: 'saveFile', wrapper: 'promisify'},
  {name: 'getFileInfo', wrapper: 'promisify'},
  {name: 'getSavedFileList', wrapper: 'promisify'},
  {name: 'getSavedFileInfo', wrapper: 'promisify'},
  {name: 'removeSavedFile', wrapper: 'promisify'},
  {name: 'openDocument', wrapper: 'promisify'},

  // storage
  {name: 'setStorage', wrapper: 'promisify'},
  {name: 'getStorage', wrapper: 'promisify'},
  {name: 'getStorageInfo', wrapper: 'promisify'},
  {name: 'removeStorage', wrapper: 'promisify'},
  {name: 'clearStorage', wrapper: 'promisify'},
  {name: 'setStorageSync', wrapper: 'delegate'},
  {name: 'getStorageSync', wrapper: 'delegate'},
  {name: 'getStorageInfoSync', wrapper: 'delegate'},
  {name: 'removeStorageSync', wrapper: 'delegate'},
  {name: 'clearStorageSync', wrapper: 'delegate'},

  // location && map
  {name: 'getLocation', wrapper: 'promisify'},
  {name: 'chooseLocation', wrapper: 'promisify'},
  {name: 'openLocation', wrapper: 'promisify'},
  {name: 'createMapContext', wrapper: 'delegate'},

  // system: info
  {name: 'getSystemInfo', wrapper: 'promisify'},
  {name: 'getSystemInfoSync', wrapper: 'delegate'},
  {name: 'canIUse', wrapper: 'delegate'},

  // device: network status
  {name: 'getNetworkType', wrapper: 'promisify'},
  {name: 'onNetworkStatusChange', wrapper: 'callback'},

  // device: accelerometer
  {name: 'onAccelerometerChange', wrapper: 'callback'},
  {name: 'startAccelerometer', wrapper: 'promisify'},
  {name: 'stopAccelerometer', wrapper: 'promisify'},

  // device: compass
  {name: 'onCompassChange', wrapper: 'callback'},
  {name: 'startCompass', wrapper: 'promisify'},
  {name: 'stopCompass', wrapper: 'promisify'},

  // device: phone call
  {name: 'makePhoneCall', wrapper: 'promisify'},

  // device: scan
  {name: 'scanCode', wrapper: 'promisify'},

  // device: clipboard
  {name: 'setClipboardData', wrapper: 'promisify'},
  {name: 'getClipboardData', wrapper: 'promisify'},

  // device: BLE
  {name: 'openBluetoothAdapter', wrapper: 'promisify'},
  {name: 'closeBluetoothAdapter', wrapper: 'promisify'},
  {name: 'getBluetoothAdapterState', wrapper: 'promisify'},
  {name: 'onBluetoothAdapterStateChange', wrapper: 'callback'},
  {name: 'startBluetoothDevicesDiscovery', wrapper: 'promisify'},
  {name: 'stopBluetoothDevicesDiscovery', wrapper: 'promisify'},
  {name: 'getBluetoothDevices', wrapper: 'promisify'},
  {name: 'getConnectedBluetoothDevices', wrapper: 'promisify'},
  {name: 'onBluetoothDeviceFound', wrapper: 'callback'},
  {name: 'createBLEConnection', wrapper: 'promisify'},
  {name: 'closeBLEConnection', wrapper: 'promisify'},
  {name: 'getBLEDeviceServices', wrapper: 'promisify'},
  {name: 'getBLEDeviceCharacteristics', wrapper: 'promisify'},
  {name: 'readBLECharacteristicValue', wrapper: 'promisify'},
  {name: 'writeBLECharacteristicValue', wrapper: 'promisify'},
  {name: 'notifyBLECharacteristicValueChange', wrapper: 'promisify'},
  {name: 'onBLEConnectionStateChange', wrapper: 'callback'},
  {name: 'onBLECharacteristicValueChange', wrapper: 'callback'},

  // device: iBeacon
  {name: 'startBeaconDiscovery', wrapper: 'promisify'},
  {name: 'stopBeaconDiscovery', wrapper: 'promisify'},
  {name: 'getBeacons', wrapper: 'promisify'},
  {name: 'onBeaconUpdate', wrapper: 'callback'},
  {name: 'onBeaconServiceChange', wrapper: 'callback'},

  // device: screen
  {name: 'setScreenBrightness', wrapper: 'promisify'},
  {name: 'getScreenBrightness', wrapper: 'promisify'},
  {name: 'setKeepScreenOn', wrapper: 'promisify'},

  // device: captureScreen
  {name: 'onUserCaptureScreen', wrapper: 'callback'},

  // device: vibrate
  {name: 'vibrateLong', wrapper: 'promisify'},
  {name: 'vibrateShort', wrapper: 'promisify'},

  // device: contactor
  {name: 'addPhoneContact', wrapper: 'promisify'},

  // device: NFC
  {name: 'getHCEState', wrapper: 'promisify'},
  {name: 'startHCE', wrapper: 'promisify'},
  {name: 'stopHCE', wrapper: 'promisify'},
  {name: 'onHCEMessage', wrapper: 'callback'},
  {name: 'sendHCEMessage', wrapper: 'promisify'},

  // device: Wi-Fi
  {name: 'startWifi', wrapper: 'promisify'},
  {name: 'stopWifi', wrapper: 'promisify'},
  {name: 'connectWifi', wrapper: 'promisify'},
  {name: 'getWifiList', wrapper: 'promisify'},
  {name: 'onGetWifiList', wrapper: 'callback'},
  {name: 'setWifiList', wrapper: 'promisify'},
  {name: 'presetWifiList', wrapper: 'promisify'},
  {name: 'getConnectedWifi', wrapper: 'promisify'},
  {name: 'onWifiConnected', wrapper: 'callback'},
  {name: 'onEvaluateWifi', wrapper: 'callback'},

  // UI: interaction
  {name: 'showToast', wrapper: 'promisify'},
  {name: 'showLoading', wrapper: 'promisify'},
  {name: 'hideToast', wrapper: 'delegate'},
  {name: 'hideLoading', wrapper: 'delegate'},
  {name: 'showModal', wrapper: 'promisify'},
  {name: 'showActionSheet', wrapper: 'promisify'},

  // UI: navigation
  {name: 'setNavigationBarTitle', wrapper: 'promisify'},
  {name: 'showNavigationBarLoading', wrapper: 'delegate'},
  {name: 'hideNavigationBarLoading', wrapper: 'delegate'},
  {name: 'setNavigationBarColor', wrapper: 'promisify'},
  {name: 'setTopBarText', wrapper: 'promisify'},
  {name: 'navigateTo', wrapper: 'promisify'},
  {name: 'redirectTo', wrapper: 'promisify'},
  {name: 'switchTab', wrapper: 'promisify'},
  {name: 'navigateBack', wrapper: 'delegate'},
  {name: 'reLaunch', wrapper: 'promisify'},

  // UI: animation
  {name: 'createAnimation', wrapper: 'delegate'},

  // UI: position
  {name: 'pageScrollTo', wrapper: 'delegate'},
  {name: 'createSelectorQuery', wrapper: 'delegate'},

  // UI: canvas
  {name: 'createCanvasContext', wrapper: 'delegate'},
  {name: 'createContext', wrapper: 'delegate'}, // depreciate
  {name: 'drawCanvas', wrapper: 'delegate'}, // depreciate
  {name: 'canvasToTempFilePath', wrapper: 'promisify'},

  // UI: pull-refresh
  {name: 'startPullDownRefresh', wrapper: 'promisify'},
  {name: 'stopPullDownRefresh', wrapper: 'delegate'},

  // DOM
  {name: 'createSelectorQuery', wrapper: 'delegate'},

  // 3rd extension
  {name: 'getExtConfig', wrapper: 'promisify'},
  {name: 'getExtConfigSync', wrapper: 'delegate'},

  // Auth
  {name: 'login', wrapper: 'promisify'},
  {name: 'checkSession', wrapper: 'promisify'},
  {name: 'authorize', wrapper: 'promisify'},
  {name: 'getUserInfo', wrapper: 'promisify'},

  // Card
  {name: 'addCard', wrapper: 'promisify'},
  {name: 'openCard', wrapper: 'promisify'},

  // Share
  {name: 'showShareMenu', wrapper: 'promisify'},
  {name: 'hideShareMenu', wrapper: 'promisify'},
  {name: 'updateShareMenu', wrapper: 'promisify'},
  {name: 'getShareInfo', wrapper: 'promisify'},

  // Utitlities
  {name: 'requestPayment', wrapper: 'promisify'},
  {name: 'chooseAddress', wrapper: 'promisify'},
  {name: 'chooseInvoiceTitle', wrapper: 'promisify'},

  {name: 'openSetting', wrapper: 'promisify'},
  {name: 'getSetting', wrapper: 'promisify'},

  {name: 'arrayBufferToBase64', wrapper: 'delegate'},
  {name: 'base64ToArrayBuffer', wrapper: 'delegate'},

  {name: 'getWeRunData', wrapper: 'promisify'},
  {name: 'navigateToMiniProgram', wrapper: 'promisify'},
  {name: 'navigateBackMiniProgram', wrapper: 'promisify'},
  {name: 'checkIsSupportSoterAuthentication', wrapper: 'promisify'},
  {name: 'startSoterAuthentication', wrapper: 'promisify'},
  {name: 'checkIsSoterEnrolledInDevice', wrapper: 'promisify'},

  {name: 'reportAnalytics', wrapper: 'delegate'},
  {name: 'setEnableDebug', wrapper: 'delegate'}
]

function findDefinitions(filter = null){
  if('function' === typeof filter){
    return definitions.filter(filter)
  }
  if('string' === typeof filter){
    return findDefinitions(m => m.wrapper === filter)
  }
  return definitions
}

export default findDefinitions
