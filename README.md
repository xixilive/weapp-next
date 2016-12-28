# Wechat applet API ES6 wrapper

## Usage

```
// import wrapper function from wxx
import wrapper from 'wxx'

// get wrapped wx Object
const wxx = wrapper(wx)

// use request API

wxx.request({url: 'http://github.com', method: 'GET'})
  .then(response => console.log)
  .catch(error => console.error)

// use shortcuts of request API, such as get, post, put, etc.
wxx.request.get('http://github.com')
  .then(response => console.log)
  .catch(error => console.error)

// to query Authentication Info
wxx.login().then(({code}) => console.log)
wxx.getUserInfo().then(({userInfo, ...}) => console.log)

// you can use a all-in-one method
wxx.queryAuth().then(([code, userInfo]) => console.log)
```

## Wrapped methods

### Network

#### `wx.request`

> wrapper: Promisify

```
wxx.request({url, ...}).then().catch()
```

#### `wx.uploadFile`

> wrapper: Promisify

```
wxx.uploadFile({url, ...}).then().catch()
```

#### `wx.downloadFile`

> wrapper: Promisify

```
wxx.downloadFile({url,...}).then().catch()
```

#### `wx.connectSocket`

> wrapper: Promisify

```
wxx.connectSocket({url, ...}).then().catch()
```

#### `wx.onSocketOpen`

> wrapper: Delegate

```
wxx.onSocketOpen()
```

#### `wx.onSocketError`

> wrapper: Delegate

```
wxx.onSocketError()
```

#### `wx.sendSocketMessage`

> wrapper: Promisify

```
wxx.sendSocketMessage({data}).then().catch()
```

#### `wx.onSocketMessage`

> wrapper: Delegate

```
wxx.onSocketMessage()
```

#### `wx.closeSocket`

> wrapper: Delegate

```
wxx.closeSocket()
```

#### `wx.onSocketClose`

> wrapper: Delegate

```
wxx.onSocketClose()
```

### Media

#### `wx.chooseImage`

> wrapper: Promisify

```
wxx.chooseImage({count,...}).then().catch()
```

#### `wx.previewImage`

> wrapper: Promisify

```
wxx.previewImage({current,...}).then().catch()
```

#### `wx.getImageInfo`

> wrapper: Promisify

```
wxx.getImageInfo({src}).then().catch()
```

#### `wx.startRecord`

> wrapper: Promisify

```
wxx.startRecord().then().catch()
```

#### `wx.stopRecord`

> wrapper: Delegate

```
wxx.stopRecord()
```

#### `wx.playVoice`

> wrapper: Promisify

```
wxx.playVoice({filePath}).then().catch()
```

#### `wx.pauseVoice`

> wrapper: Delegate

```
wxx.pauseVoice()
```

#### `wx.stopVoice`

> wrapper: Delegate

```
wxx.stopVoice()
```

#### `wx.getBackgroundAudioPlayerState`

> wrapper: Promisify

```
wxx.getBackgroundAudioPlayerState().then().catch()
```

#### `wx.playBackgroundAudio`

> wrapper: Promisify

```
wxx.playBackgroundAudio({dataUrl,...}).then().catch()
```

#### `wx.pauseBackgroundAudio`

> wrapper: Delegate

```
wxx.pauseBackgroundAudio()
```

#### `wx.seekBackgroundAudio`

> wrapper: Promisify

```
wxx.seekBackgroundAudio({position,...}).then().catch()
```

#### `wx.stopBackgroundAudio`

> wrapper: Delegate

```
wxx.stopBackgroundAudio()
```

#### `wx.onBackgroundAudioPlay`

> wrapper: Delegate

```
wxx.onBackgroundAudioPlay()
```

#### `wx.onBackgroundAudioPause`

> wrapper: Delegate

```
wxx.onBackgroundAudioPause()
```

#### `wx.onBackgroundAudioStop`

> wrapper: Delegate

```
wxx.onBackgroundAudioStop()
```

#### `wx.createAudioContext`

> wrapper: Delegate

```
wxx.createAudioContext(audioId)
```

#### `wx.chooseVideo`

> wrapper: Promisify

```
wxx.chooseVideo({sourceType,...}).then().catch()
```

#### `wx.createVideoContext`

> wrapper: Delegate

```
wxx.createVideoContext(videoId)
```

### File

#### `wx.saveFile`

> wrapper: Promisify

```
wxx.saveFile().then().catch()
```

#### `wx.getSavedFileList`

> wrapper: Promisify

```
wxx.getSavedFileList().then().catch()
```

#### `wx.getSavedFileInfo`

> wrapper: Promisify

```
wxx.getSavedFileInfo().then().catch()
```

#### `wx.removeSavedFile`

> wrapper: Promisify

```
wxx.removeSavedFile().then().catch()
```

#### `wx.openDocument`

> wrapper: Promisify

```
wxx.openDocument().then().catch()
```

### Storage

#### `wx.setStorage`

> wrapper: Promisify

```
wxx.setStorage().then().catch()
```

#### `wx.getStorage`

> wrapper: Promisify

```
wxx.getStorage().then().catch()
```

#### `wx.getStorageInfo`

> wrapper: Promisify

```
wxx.getStorageInfo().then().catch()
```

#### `wx.removeStorage`

> wrapper: Promisify

```
wxx.removeStorage().then().catch()
```

#### `wx.clearStorage`

> wrapper: Promisify

```
wxx.clearStorage().then().catch()
```


#### `wx.setStorageSync`

> wrapper: Delegate

```
wxx.setStorageSync()
```

#### `wx.getStorageSync`

> wrapper: Delegate

```
wxx.getStorageSync()
```

#### `wx.getStorageInfoSync`

> wrapper: Delegate

```
wxx.getStorageInfoSync()
```

#### `wx.removeStorageSync`

> wrapper: Delegate

```
wxx.removeStorageSync()
```

#### `wx.clearStorageSync`

> wrapper: Delegate

```
wxx.clearStorageSync()
```


### Location and Map

#### `wx.getLocation`

> wrapper: Promisify

```
wxx.getLocation().then().catch()
```

#### `wx.chooseLocation`

> wrapper: Promisify

```
wxx.chooseLocation().then().catch()
```

#### `wx.openLocation`

> wrapper: Promisify

```
wxx.openLocation().then().catch()
```

#### `wx.createMapContext`

> wrapper: Delegate

```
wxx.createMapContext()
```

### Devices

#### `wx.getSystemInfo`

> wrapper: Promisify

```
wxx.getSystemInfo().then().catch()
```

#### `wx.getSystemInfoSync`

> wrapper: Delegate

```
wxx.getSystemInfoSync()
```

#### `wx.getNetworkType`

> wrapper: Promisify

```
wxx.getNetworkType().then().catch()
```

#### `wx.onAccelerometerChange`

> wrapper: Delegate

```
wxx.onAccelerometerChange()
```

#### `wx.onCompassChange`

> wrapper: Delegate

```
wxx.onCompassChange()
```

#### `wx.makePhoneCall`

> wrapper: Promisify

```
wxx.makePhoneCall().then().catch()
```

#### `wx.scanCode`

> wrapper: Promisify

```
wxx.scanCode().then().catch()
```

### UI

#### `wx.showToast`

> wrapper: Promisify

```
wxx.showToast().then().catch()
```

#### `wx.hideToast`

> wrapper: Delegate

```
wxx.hideToast()
```

#### `wx.showModal`

> wrapper: Promisify

```
wxx.showModal().then().catch()
```
#### `wx.showActionSheet`

> wrapper: Promisify

```
wxx.showActionSheet().then().catch()
```

#### `wx.setNavigationBarTitle`

> wrapper: Promisify

```
wxx.setNavigationBarTitle().then().catch()
```

#### `wx.showNavigationBarLoading`

> wrapper: Delegate

```
wxx.showNavigationBarLoading()
```

#### `wx.hideNavigationBarLoading`

> wrapper: Delegate

```
wxx.hideNavigationBarLoading()
```

#### `wx.navigateTo`

> wrapper: Promisify

```
wxx.navigateTo().then().catch()
```

#### `wx.redirectTo`

> wrapper: Promisify

```
wxx.redirectTo().then().catch()
```

#### `wx.switchTab`

> wrapper: Promisify

```
wxx.switchTab().then().catch()
```

#### `wx.navigateBack`

> wrapper: Delegate

```
wxx.navigateBack()
```

#### `wx.createAnimation`

> wrapper: Delegate

```
wxx.createAnimation()
```

#### `wx.createCanvasContext`

> wrapper: Delegate

```
wxx.createCanvasContext()
```

#### `wx.createContext`

> wrapper: Delegate

```
wxx.createContext()
```

#### `wx.drawCanvas`

> wrapper: Delegate

```
wxx.drawCanvas()
```

#### `wx.canvasToTempFilePath`

> wrapper: Delegate

```
wxx.canvasToTempFilePath()
```

#### `wx.stopPullDownRefresh`

> wrapper: Delegate

```
wxx.stopPullDownRefresh()
```

### Authentication

#### `wx.login`

> wrapper: Promisify

```
wxx.login().then().catch()
```
#### `wx.checkSession`

> wrapper: Promisify

```
wxx.checkSession().then().catch()
```
#### `wx.getUserInfo`

> wrapper: Promisify

```
wxx.getUserInfo().then().catch()
```

### Payment

#### `wx.requestPayment`

> wrapper: Promisify

```
wxx.requestPayment().then().catch()
```

## Enhancements

> create shortcuts for request API, according to "WECHAT Applet" declared verbs(RFC 2616).

**NOTE**

The PATCH verb maybe useful for strict RESTful-ist, and so it has defined also.

### `wxx.request`

```
wxx.request.get(url:String [, init:Function])
wxx.request.post(url:String, body:String/Object, [, init:Function])
wxx.request.put(url:String, body:String/Object, [, init:Function])
wxx.request.patch(url:String, body:String/Object, [, init:Function])
wxx.request.delete(url:String [, init:Function])
wxx.request.head(url:String [, init:Function])
wxx.request.options(url:String [, init:Function])
wxx.request.trace(url:String [, init:Function])
wxx.request.connect(url:String [, init:Function])
```

### `wxx.queryAuth`

> login and getUserInfo in parallel

```
wxx.queryAuth().then(([code, data]) => {
  return wxx.request.post('https://api.server.com/session', {code, data})  
})

// on server side:
// 1. to exchange session_key via code,
// 2. decrypt and store userInfo, and create your app scope session etc.
```

## ES6 inspector

A simple inspector function to detect applet runtime features, such as new functions, new globals etc.
It will report detecting result in the console panel.

### usage

```
import inspect from 'wxx/dist/inspector'

App({
  onLaunch(){
    inspect() // take a look at your dev-tool's console.
  },
  ......
})
```
