# weapp

封装[微信小程序API](https://mp.weixin.qq.com/debug/wxadoc/dev/api/), 提供符合潮流的, 易于使用的开发接口.

![weapp-screen-shot](./docs/screen-shot.png)

## Features

- Promisified async API (goodbye girls! success, fail and complete)

- Shortcuts for `wx.request` API

- Applet runtime inspector (use for dev only)

```js
App({onLaunch(){ require('weapp/dist/inspector')(), ... }})
```

- Isolated Promise polyfill (by [core-js](https://github.com/zloirock/core-js))

```js
import Promise from 'weapp/dist/promise'
// or
import {Promise} from 'weapp'
```

- Enhancements for `wx`

- Optional Grouped APIs:

```
weapp.auth.*
weapp.device.*
weapp.file.*
weapp.geo.*
weapp.media.*
weapp.net.*
weapp.payment.*
weapp.storage.*
weapp.ui.*
```

> Visit [es6/wx/definitions.js](./es6/wx/definitions.js) for more details

- RESTful http client

```js
import weapp from 'weapp'

const http = weapp(wx).Http('https://api.server.com/')
http.get('/status').then()
http.post('/status', {data: {}}).then()
```

## Install

`npm i xixilive/weapp --save-dev`

## Usage

```js
// import wrapper function from weapp
import weapp from 'weapp'
import {Promise} from 'weapp'

// get wrapped wx Object
const weapp = wrapper(wx)

// use request API

weapp.request({url: 'http://github.com', method: 'GET'})
  .then(response => console.log)
  .catch(error => console.error)

// use shortcuts of request API, such as get, post, put, etc.
weapp.request.get('http://github.com')
  .then(response => console.log)
  .catch(error => console.error)

// use init function for request
weapp.request.get('http://github.com', () => {
  return {
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    dataType: 'csv'
  }
})

// to query Authentication Info
weapp.login().then(({code}) => console.log)

weapp.getUserInfo().then(({userInfo, ...}) => console.log)

// you can use an all-in-one method
weapp.requireAuth().then(([code, userInfo]) => console.log)


// use Promise
Promise.all([]).then()
```

## Wrapped methods

Wraps almost all of `wx` methods, see [METHODS](./docs/METHODS.md)

## Enhancements

> create shortcuts for request API, according to "WECHAT Applet" declared verbs(RFC 2616).

**NOTE**

The PATCH verb maybe useful for strict RESTful-ist, and so it has defined also.

### `weapp.request`

```js
weapp.request.get(url:String [, init:Function])
weapp.request.post(url:String, body:String/Object, [, init:Function])
weapp.request.put(url:String, body:String/Object, [, init:Function])
weapp.request.patch(url:String, body:String/Object, [, init:Function])
weapp.request.delete(url:String [, init:Function])
weapp.request.head(url:String [, init:Function])
weapp.request.options(url:String [, init:Function])
weapp.request.trace(url:String [, init:Function])
weapp.request.connect(url:String [, init:Function])
```

### `weapp.requireAuth`

> login and getUserInfo in parallel

```js
weapp.requireAuth().then(([code, data]) => {
  return weapp.request.post('https://api.server.com/session', {code, data})  
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
import inspect from 'weapp/dist/inspector'

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
     |- weapp
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

OBVIOUSLY, abc dependents on my `weapp` :), but you can't to require `weapp` in abc's files directly like this:

```js
// abc/app.js
import weapp from 'weapp'

App({...})

// throw! throw! throw `module 'weapp.js' is not defined` at runtime
```

You should require `weapp` in your `local files` in this approach.

```js
// abc/es6/app.js
import weapp from 'weapp'

export {weapp}
```

and build `abc/es6` into a bundle module, then you can require your bundle version in wechat applet code. I favoured [webpack](https://webpack.github.io/) for this.

```js
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

```js
import {weapp} from './lib/app.bundle'

App({....})
```

take away, no thanks!
