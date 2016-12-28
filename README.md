# Wechat applet API ES6 wrapper

## Features

- Promisified async API (goodbye girls! success, fail and complete)

- Shortcuts for `wx.request` API

- Applet runtime inspector (use for dev only)

```js
App({onLaunch(){ require('wxx/dist/inspector')(), ... }})
```

- Isolated Promise polyfill (by core-js promise)

```js
import Promise from 'wxx/dist/promise'
// or
import {Promise} from 'wxx'
```

- Enhancements for wx

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
```

> Visit [es6/wx/definitions.js](./es6/wx/definitions.js) for more details

## Install

`npm i xixilive/wxx --save-dev`

## Usage

```js
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

// you can use an all-in-one method
wxx.queryAuth().then(([code, userInfo]) => console.log)


// use Promise
Promise.all([]).then()
```

## Wrapped methods

### Network

#### `wx.request`

> wrapper: Promisify

```js
wxx.request({url, ...}).then().catch()
```

#### `wx.uploadFile`

> wrapper: Promisify

```js
wxx.uploadFile({url, ...}).then().catch()
```

#### `wx.downloadFile`

> wrapper: Promisify

```js
wxx.downloadFile({url,...}).then().catch()
```

#### `wx.connectSocket`

> wrapper: Promisify

```js
wxx.connectSocket({url, ...}).then().catch()
```

#### `wx.onSocketOpen`

> wrapper: Delegate

```js
wxx.onSocketOpen()
```

#### `wx.onSocketError`

> wrapper: Delegate

```js
wxx.onSocketError()
```

#### `wx.sendSocketMessage`

> wrapper: Promisify

```js
wxx.sendSocketMessage({data}).then().catch()
```

#### `wx.onSocketMessage`

> wrapper: Delegate

```js
wxx.onSocketMessage()
```

#### `wx.closeSocket`

> wrapper: Delegate

```js
wxx.closeSocket()
```

#### `wx.onSocketClose`

> wrapper: Delegate

```js
wxx.onSocketClose()
```

### Media

#### `wx.chooseImage`

> wrapper: Promisify

```js
wxx.chooseImage({count,...}).then().catch()
```

#### `wx.previewImage`

> wrapper: Promisify

```js
wxx.previewImage({current,...}).then().catch()
```

#### `wx.getImageInfo`

> wrapper: Promisify

```js
wxx.getImageInfo({src}).then().catch()
```

#### `wx.startRecord`

> wrapper: Promisify

```js
wxx.startRecord().then().catch()
```

#### `wx.stopRecord`

> wrapper: Delegate

```js
wxx.stopRecord()
```

#### `wx.playVoice`

> wrapper: Promisify

```js
wxx.playVoice({filePath}).then().catch()
```

#### `wx.pauseVoice`

> wrapper: Delegate

```js
wxx.pauseVoice()
```

#### `wx.stopVoice`

> wrapper: Delegate

```js
wxx.stopVoice()
```

#### `wx.getBackgroundAudioPlayerState`

> wrapper: Promisify

```js
wxx.getBackgroundAudioPlayerState().then().catch()
```

#### `wx.playBackgroundAudio`

> wrapper: Promisify

```js
wxx.playBackgroundAudio({dataUrl,...}).then().catch()
```

#### `wx.pauseBackgroundAudio`

> wrapper: Delegate

```js
wxx.pauseBackgroundAudio()
```

#### `wx.seekBackgroundAudio`

> wrapper: Promisify

```js
wxx.seekBackgroundAudio({position,...}).then().catch()
```

#### `wx.stopBackgroundAudio`

> wrapper: Delegate

```js
wxx.stopBackgroundAudio()
```

#### `wx.onBackgroundAudioPlay`

> wrapper: Delegate

```js
wxx.onBackgroundAudioPlay()
```

#### `wx.onBackgroundAudioPause`

> wrapper: Delegate

```js
wxx.onBackgroundAudioPause()
```

#### `wx.onBackgroundAudioStop`

> wrapper: Delegate

```js
wxx.onBackgroundAudioStop()
```

#### `wx.createAudioContext`

> wrapper: Delegate

```js
wxx.createAudioContext(audioId)
```

#### `wx.chooseVideo`

> wrapper: Promisify

```js
wxx.chooseVideo({sourceType,...}).then().catch()
```

#### `wx.createVideoContext`

> wrapper: Delegate

```js
wxx.createVideoContext(videoId)
```

### File

#### `wx.saveFile`

> wrapper: Promisify

```js
wxx.saveFile().then().catch()
```

#### `wx.getSavedFileList`

> wrapper: Promisify

```js
wxx.getSavedFileList().then().catch()
```

#### `wx.getSavedFileInfo`

> wrapper: Promisify

```js
wxx.getSavedFileInfo().then().catch()
```

#### `wx.removeSavedFile`

> wrapper: Promisify

```js
wxx.removeSavedFile().then().catch()
```

#### `wx.openDocument`

> wrapper: Promisify

```js
wxx.openDocument().then().catch()
```

### Storage

#### `wx.setStorage`

> wrapper: Promisify

```js
wxx.setStorage().then().catch()
```

#### `wx.getStorage`

> wrapper: Promisify

```js
wxx.getStorage().then().catch()
```

#### `wx.getStorageInfo`

> wrapper: Promisify

```js
wxx.getStorageInfo().then().catch()
```

#### `wx.removeStorage`

> wrapper: Promisify

```js
wxx.removeStorage().then().catch()
```

#### `wx.clearStorage`

> wrapper: Promisify

```js
wxx.clearStorage().then().catch()
```


#### `wx.setStorageSync`

> wrapper: Delegate

```js
wxx.setStorageSync()
```

#### `wx.getStorageSync`

> wrapper: Delegate

```js
wxx.getStorageSync()
```

#### `wx.getStorageInfoSync`

> wrapper: Delegate

```js
wxx.getStorageInfoSync()
```

#### `wx.removeStorageSync`

> wrapper: Delegate

```js
wxx.removeStorageSync()
```

#### `wx.clearStorageSync`

> wrapper: Delegate

```js
wxx.clearStorageSync()
```


### Location and Map

#### `wx.getLocation`

> wrapper: Promisify

```js
wxx.getLocation().then().catch()
```

#### `wx.chooseLocation`

> wrapper: Promisify

```js
wxx.chooseLocation().then().catch()
```

#### `wx.openLocation`

> wrapper: Promisify

```js
wxx.openLocation().then().catch()
```

#### `wx.createMapContext`

> wrapper: Delegate

```js
wxx.createMapContext()
```

### Devices

#### `wx.getSystemInfo`

> wrapper: Promisify

```js
wxx.getSystemInfo().then().catch()
```

#### `wx.getSystemInfoSync`

> wrapper: Delegate

```js
wxx.getSystemInfoSync()
```

#### `wx.getNetworkType`

> wrapper: Promisify

```js
wxx.getNetworkType().then().catch()
```

#### `wx.onAccelerometerChange`

> wrapper: Delegate

```js
wxx.onAccelerometerChange()
```

#### `wx.onCompassChange`

> wrapper: Delegate

```js
wxx.onCompassChange()
```

#### `wx.makePhoneCall`

> wrapper: Promisify

```js
wxx.makePhoneCall().then().catch()
```

#### `wx.scanCode`

> wrapper: Promisify

```js
wxx.scanCode().then().catch()
```

### UI

#### `wx.showToast`

> wrapper: Promisify

```js
wxx.showToast().then().catch()
```

#### `wx.hideToast`

> wrapper: Delegate

```js
wxx.hideToast()
```

#### `wx.showModal`

> wrapper: Promisify

```js
wxx.showModal().then().catch()
```
#### `wx.showActionSheet`

> wrapper: Promisify

```js
wxx.showActionSheet().then().catch()
```

#### `wx.setNavigationBarTitle`

> wrapper: Promisify

```js
wxx.setNavigationBarTitle().then().catch()
```

#### `wx.showNavigationBarLoading`

> wrapper: Delegate

```js
wxx.showNavigationBarLoading()
```

#### `wx.hideNavigationBarLoading`

> wrapper: Delegate

```js
wxx.hideNavigationBarLoading()
```

#### `wx.navigateTo`

> wrapper: Promisify

```js
wxx.navigateTo().then().catch()
```

#### `wx.redirectTo`

> wrapper: Promisify

```js
wxx.redirectTo().then().catch()
```

#### `wx.switchTab`

> wrapper: Promisify

```js
wxx.switchTab().then().catch()
```

#### `wx.navigateBack`

> wrapper: Delegate

```js
wxx.navigateBack()
```

#### `wx.createAnimation`

> wrapper: Delegate

```js
wxx.createAnimation()
```

#### `wx.createCanvasContext`

> wrapper: Delegate

```js
wxx.createCanvasContext()
```

#### `wx.createContext`

> wrapper: Delegate

```js
wxx.createContext()
```

#### `wx.drawCanvas`

> wrapper: Delegate

```js
wxx.drawCanvas()
```

#### `wx.canvasToTempFilePath`

> wrapper: Delegate

```js
wxx.canvasToTempFilePath()
```

#### `wx.stopPullDownRefresh`

> wrapper: Delegate

```js
wxx.stopPullDownRefresh()
```

### Authentication

#### `wx.login`

> wrapper: Promisify

```js
wxx.login().then().catch()
```
#### `wx.checkSession`

> wrapper: Promisify

```js
wxx.checkSession().then().catch()
```
#### `wx.getUserInfo`

> wrapper: Promisify

```js
wxx.getUserInfo().then().catch()
```

### Payment

#### `wx.requestPayment`

> wrapper: Promisify

```js
wxx.requestPayment().then().catch()
```

## Enhancements

> create shortcuts for request API, according to "WECHAT Applet" declared verbs(RFC 2616).

**NOTE**

The PATCH verb maybe useful for strict RESTful-ist, and so it has defined also.

### `wxx.request`

```js
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

```js
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

```js
import inspect from 'wxx/dist/inspector'

App({
  onLaunch(){
    inspect() // take a look at your dev-tool's console.
  },
  ......
})
```

## NOTICE

> tl;dr; Wechat Applet only require modules in `app local scope` currently, and so, you must to bundle all external dependencies into your app.

It assumes you have a app named `abc` in following structure:

```
abc/
  |-es6/
     |- app.js
  |-node_modules/
     |- wxx
     |- ...
  |-pages/
      |- start
        |- start.js
        |- start.json
        |- start.wxml
        |- start.wxss
      |- ...
  |-app.js
  |-app.json
  |-app.wxss
  |-package.json
  |-...
```

OBVIOUSLY, abc dependents on my `wxx` :), but you can't to require `wxx` in abc's files directly like this:

```
// abc/app.js
import wxx from 'wxx'

App({...})

// throw! throw! throw `module 'wxx.js' is not defined` at runtime
```

You should require `wxx` in your `local files` in this approach.

```
// abc/es6/app.js
import wxx from 'wxx'

export {wxx}
```

and build `abc/es6` into a bundle module, then you can require your bundle version in wechat applet code. I favoured `webpack` for this.

```
// webpack.config.js

module.exports = {
  ...,
  entry: {
    'app': './es6/app.js'
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  },
  ...
}
```

require bundle in applet code:

```
import {wxx} from './lib/app.bundle'

App({....})
```

take away, no thanks! 
