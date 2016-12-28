# Wechat applet API ES6 wrapper

## Features

- Promisified async API (goodbye girls! success, fail and complete)

- Shortcuts for `wx.request` API

- Applet runtime inspector (use for dev only)

- Isolated Promise polyfill (from core-js)

```javascript
import Promise from 'wxx/dist/promise'
```

- Optional Grouped APIs:

```
wxx.auth.*
wxx.device.*
wxx.file.*
wxx.geo.*
wxx.media.*
wxx.net.*
wxx.payment.*
wxx.storage.*
wxx.ui.*

// visit es6/wx/definitions.js for more details
```

## Usage

```javascript
// import wrapper function from wxx
import wrapper from 'wxx'
import {Promise} from 'wxx'

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

// use init function for request
wxx.request.get('http://github.com', () => {
  return {
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    dataType: 'csv'
  }
})

// to query Authentication Info
wxx.login().then(({code}) => console.log)
wxx.getUserInfo().then(({userInfo, ...}) => console.log)

// you can use a all-in-one method
wxx.queryAuth().then(([code, userInfo]) => console.log)


// use Promise
Promise.all([]).then()
```

## Wrapped methods

### Network

#### `wx.request`

> wrapper: Promisify

```javascript
wxx.request({url, ...}).then().catch()
```

#### `wx.uploadFile`

> wrapper: Promisify

```javascript
wxx.uploadFile({url, ...}).then().catch()
```

#### `wx.downloadFile`

> wrapper: Promisify

```javascript
wxx.downloadFile({url,...}).then().catch()
```

#### `wx.connectSocket`

> wrapper: Promisify

```javascript
wxx.connectSocket({url, ...}).then().catch()
```

#### `wx.onSocketOpen`

> wrapper: Delegate

```javascript
wxx.onSocketOpen()
```

#### `wx.onSocketError`

> wrapper: Delegate

```javascript
wxx.onSocketError()
```

#### `wx.sendSocketMessage`

> wrapper: Promisify

```javascript
wxx.sendSocketMessage({data}).then().catch()
```

#### `wx.onSocketMessage`

> wrapper: Delegate

```javascript
wxx.onSocketMessage()
```

#### `wx.closeSocket`

> wrapper: Delegate

```javascript
wxx.closeSocket()
```

#### `wx.onSocketClose`

> wrapper: Delegate

```javascript
wxx.onSocketClose()
```

### Media

#### `wx.chooseImage`

> wrapper: Promisify

```javascript
wxx.chooseImage({count,...}).then().catch()
```

#### `wx.previewImage`

> wrapper: Promisify

```javascript
wxx.previewImage({current,...}).then().catch()
```

#### `wx.getImageInfo`

> wrapper: Promisify

```javascript
wxx.getImageInfo({src}).then().catch()
```

#### `wx.startRecord`

> wrapper: Promisify

```javascript
wxx.startRecord().then().catch()
```

#### `wx.stopRecord`

> wrapper: Delegate

```javascript
wxx.stopRecord()
```

#### `wx.playVoice`

> wrapper: Promisify

```javascript
wxx.playVoice({filePath}).then().catch()
```

#### `wx.pauseVoice`

> wrapper: Delegate

```javascript
wxx.pauseVoice()
```

#### `wx.stopVoice`

> wrapper: Delegate

```javascript
wxx.stopVoice()
```

#### `wx.getBackgroundAudioPlayerState`

> wrapper: Promisify

```javascript
wxx.getBackgroundAudioPlayerState().then().catch()
```

#### `wx.playBackgroundAudio`

> wrapper: Promisify

```javascript
wxx.playBackgroundAudio({dataUrl,...}).then().catch()
```

#### `wx.pauseBackgroundAudio`

> wrapper: Delegate

```javascript
wxx.pauseBackgroundAudio()
```

#### `wx.seekBackgroundAudio`

> wrapper: Promisify

```javascript
wxx.seekBackgroundAudio({position,...}).then().catch()
```

#### `wx.stopBackgroundAudio`

> wrapper: Delegate

```javascript
wxx.stopBackgroundAudio()
```

#### `wx.onBackgroundAudioPlay`

> wrapper: Delegate

```javascript
wxx.onBackgroundAudioPlay()
```

#### `wx.onBackgroundAudioPause`

> wrapper: Delegate

```javascript
wxx.onBackgroundAudioPause()
```

#### `wx.onBackgroundAudioStop`

> wrapper: Delegate

```javascript
wxx.onBackgroundAudioStop()
```

#### `wx.createAudioContext`

> wrapper: Delegate

```javascript
wxx.createAudioContext(audioId)
```

#### `wx.chooseVideo`

> wrapper: Promisify

```javascript
wxx.chooseVideo({sourceType,...}).then().catch()
```

#### `wx.createVideoContext`

> wrapper: Delegate

```javascript
wxx.createVideoContext(videoId)
```

### File

#### `wx.saveFile`

> wrapper: Promisify

```javascript
wxx.saveFile().then().catch()
```

#### `wx.getSavedFileList`

> wrapper: Promisify

```javascript
wxx.getSavedFileList().then().catch()
```

#### `wx.getSavedFileInfo`

> wrapper: Promisify

```javascript
wxx.getSavedFileInfo().then().catch()
```

#### `wx.removeSavedFile`

> wrapper: Promisify

```javascript
wxx.removeSavedFile().then().catch()
```

#### `wx.openDocument`

> wrapper: Promisify

```javascript
wxx.openDocument().then().catch()
```

### Storage

#### `wx.setStorage`

> wrapper: Promisify

```javascript
wxx.setStorage().then().catch()
```

#### `wx.getStorage`

> wrapper: Promisify

```javascript
wxx.getStorage().then().catch()
```

#### `wx.getStorageInfo`

> wrapper: Promisify

```javascript
wxx.getStorageInfo().then().catch()
```

#### `wx.removeStorage`

> wrapper: Promisify

```javascript
wxx.removeStorage().then().catch()
```

#### `wx.clearStorage`

> wrapper: Promisify

```javascript
wxx.clearStorage().then().catch()
```


#### `wx.setStorageSync`

> wrapper: Delegate

```javascript
wxx.setStorageSync()
```

#### `wx.getStorageSync`

> wrapper: Delegate

```javascript
wxx.getStorageSync()
```

#### `wx.getStorageInfoSync`

> wrapper: Delegate

```javascript
wxx.getStorageInfoSync()
```

#### `wx.removeStorageSync`

> wrapper: Delegate

```javascript
wxx.removeStorageSync()
```

#### `wx.clearStorageSync`

> wrapper: Delegate

```javascript
wxx.clearStorageSync()
```


### Location and Map

#### `wx.getLocation`

> wrapper: Promisify

```javascript
wxx.getLocation().then().catch()
```

#### `wx.chooseLocation`

> wrapper: Promisify

```javascript
wxx.chooseLocation().then().catch()
```

#### `wx.openLocation`

> wrapper: Promisify

```javascript
wxx.openLocation().then().catch()
```

#### `wx.createMapContext`

> wrapper: Delegate

```javascript
wxx.createMapContext()
```

### Devices

#### `wx.getSystemInfo`

> wrapper: Promisify

```javascript
wxx.getSystemInfo().then().catch()
```

#### `wx.getSystemInfoSync`

> wrapper: Delegate

```javascript
wxx.getSystemInfoSync()
```

#### `wx.getNetworkType`

> wrapper: Promisify

```javascript
wxx.getNetworkType().then().catch()
```

#### `wx.onAccelerometerChange`

> wrapper: Delegate

```javascript
wxx.onAccelerometerChange()
```

#### `wx.onCompassChange`

> wrapper: Delegate

```javascript
wxx.onCompassChange()
```

#### `wx.makePhoneCall`

> wrapper: Promisify

```javascript
wxx.makePhoneCall().then().catch()
```

#### `wx.scanCode`

> wrapper: Promisify

```javascript
wxx.scanCode().then().catch()
```

### UI

#### `wx.showToast`

> wrapper: Promisify

```javascript
wxx.showToast().then().catch()
```

#### `wx.hideToast`

> wrapper: Delegate

```javascript
wxx.hideToast()
```

#### `wx.showModal`

> wrapper: Promisify

```javascript
wxx.showModal().then().catch()
```
#### `wx.showActionSheet`

> wrapper: Promisify

```javascript
wxx.showActionSheet().then().catch()
```

#### `wx.setNavigationBarTitle`

> wrapper: Promisify

```javascript
wxx.setNavigationBarTitle().then().catch()
```

#### `wx.showNavigationBarLoading`

> wrapper: Delegate

```javascript
wxx.showNavigationBarLoading()
```

#### `wx.hideNavigationBarLoading`

> wrapper: Delegate

```javascript
wxx.hideNavigationBarLoading()
```

#### `wx.navigateTo`

> wrapper: Promisify

```javascript
wxx.navigateTo().then().catch()
```

#### `wx.redirectTo`

> wrapper: Promisify

```javascript
wxx.redirectTo().then().catch()
```

#### `wx.switchTab`

> wrapper: Promisify

```javascript
wxx.switchTab().then().catch()
```

#### `wx.navigateBack`

> wrapper: Delegate

```javascript
wxx.navigateBack()
```

#### `wx.createAnimation`

> wrapper: Delegate

```javascript
wxx.createAnimation()
```

#### `wx.createCanvasContext`

> wrapper: Delegate

```javascript
wxx.createCanvasContext()
```

#### `wx.createContext`

> wrapper: Delegate

```javascript
wxx.createContext()
```

#### `wx.drawCanvas`

> wrapper: Delegate

```javascript
wxx.drawCanvas()
```

#### `wx.canvasToTempFilePath`

> wrapper: Delegate

```javascript
wxx.canvasToTempFilePath()
```

#### `wx.stopPullDownRefresh`

> wrapper: Delegate

```javascript
wxx.stopPullDownRefresh()
```

### Authentication

#### `wx.login`

> wrapper: Promisify

```javascript
wxx.login().then().catch()
```
#### `wx.checkSession`

> wrapper: Promisify

```javascript
wxx.checkSession().then().catch()
```
#### `wx.getUserInfo`

> wrapper: Promisify

```javascript
wxx.getUserInfo().then().catch()
```

### Payment

#### `wx.requestPayment`

> wrapper: Promisify

```javascript
wxx.requestPayment().then().catch()
```

## Enhancements

> create shortcuts for request API, according to "WECHAT Applet" declared verbs(RFC 2616).

**NOTE**

The PATCH verb maybe useful for strict RESTful-ist, and so it has defined also.

### `wxx.request`

```javascript
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

```javascript
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

```javascript
import inspect from 'wxx/dist/inspector'

App({
  onLaunch(){
    inspect() // take a look at your dev-tool's console.
  },
  ......
})
```
