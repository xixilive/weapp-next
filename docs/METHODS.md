## Wrapped wx methods

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
