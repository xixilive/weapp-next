# Wrap strategies for wx methods

## Promisify

Promisify wx async methods, which overrides `success`, `fail` and `complete` functions in the object argument with signature:

```js
{
  success: function(){},
  fail: function(){},
  complete: function(){},
  ...restArguments
}
```

and return a Promise object when wrapped method called, for example:

```js
// wx.getLocation is an async function
import weapp from 'weapp-next'

weapp.getLocation({type: 'wgs84'}).then(location => {
  const {latitude:x, longitude:y, speed:s, accuracy:a} = location
  console.log(`location info: %s, %s, %s, %s`, x, y, s, a)
})
```

## Delegate

Delegate method to global.wx object directly.

## Callback

Callbck strategy works as following logic:

1. If a callback function was passed to method, it just call it (likes Delegate).
2. If there without a callback function call, it return a promise object.

```js
import weapp from 'weapp-next'

// pass callbck function
weapp.onBluetoothDeviceFound((devices) => {
  console.log(devices)
})

// without callback function
weapp.onBluetoothDeviceFound().then(devices => {
  console.log(devices)
})

```

## Overwrite

create instance, and promisify instance methods.

```js
import weapp from 'weapp-next'

const camera = weapp.createCameraContext()
camera.takePhoto('high').then(...)
```

For more details, please read [es6/weapp/definitions.js](../es6/weapp/definitions.js)
