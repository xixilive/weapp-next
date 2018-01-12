# weapp-next

[![Greenkeeper badge](https://badges.greenkeeper.io/xixilive/weapp-next.svg)](https://greenkeeper.io/)

Weapp(微信小程序) official API wrapper, purpose to expose fashionable, friendly and fluent programming API.

### 风险提示

小程序核心库变动较快, 时间有限, 不能紧跟核心库的更新, 目前的封装的核心库版本是1.7.0. 引用本package可能因核心库变动带来不兼容的问题, 请谨慎使用.

[![Build Status](https://travis-ci.org/xixilive/weapp-next.svg?branch=master)](https://travis-ci.org/xixilive/weapp-next)

![weapp-screen-shot](./docs/screen-shot.png)

## Features

- Promisified async API

- Shortcuts for `wx.request` API

- Enhancements official APIs

- RESTful http client

## Install

```
# via Github
npm i xixilive/weapp-next --save-dev
```

```
# via npm
npm i weapp-next --save-dev
```

## Usage

`weapp-next` use UMD module system, you can load it in Commonjs or AMD format.

```js
import weapp, {Promise} from 'weapp-next'

// get wrapped wx Object
const {request, requireAuth, Http} = weapp(wx)

// use request API
request({url: 'https://test.com', method: 'GET'}).then(response => console.log)

// use shortcuts of request API, such as get, post, put, etc.
request.get('https://test.com').then(response => console.log)

// you can use an all-in-one method
weapp.requireAuth().then(([code, userInfo]) => console.log)

// use Http client
const http = Http('https://server.com/api')
http.get('/path').then(response => console.log)

// use Promise
Promise.all([...]).then()
```

## Wrapped methods

Wraps almost all of official APIs, see [Wrapped methods](./docs/METHODS.md)

## Enhancements

Creates http request shortcuts according to wechat applet declared verbs(RFC 2616). specially, the `PATCH` verb maybe useful for strict RESTful-ist, and so it has defined also.

### `weapp.request`

It resolve a response which take a statusCode in range of [200, 300), and reject a response which out of the range.

The resolved response and rejected reason/error is the response object from the native `wx.request`.

```js
import weapp from 'weapp-next'
const {request} = weapp(wx)

request({url, method: 'GET'})
  .then(response => {
    // response is the response object from wx.request
  })
  .catch(error => {
    // error is the response object from wx.request
  })

request.get(url:String [, init:Function])
request.post(url:String, body:String/Object, [, init:Function])
request.put(url:String, body:String/Object, [, init:Function])
request.patch(url:String, body:String/Object, [, init:Function])
request.delete(url:String [, init:Function])
request.head(url:String [, init:Function])
request.options(url:String [, init:Function])
request.trace(url:String [, init:Function])
request.connect(url:String [, init:Function])
```

Optional `init` argument is a zero-arugments function to interpolate request parameters, and it expects to return an Object value by contract. you can override any request params by the returned object except the `url` and `method`.

```js
// logic of init function
const config = {...}
return {...config, ...init(), url, method}
```

### `weapp.requireAuth`

> login and getUserInfo in parallel

```js
import weapp from 'weapp-next'
const {request, requireAuth} = weapp(wx)

requireAuth().then(([code, data]) => {
  return request.post('https://api.server.com/session', {code, data})  
})

// on server side:
// 1. to exchange session_key via code,
// 2. decrypt and store userInfo, and create your app scope session etc.
```

Here is a Express middleware for weapp login scenario which purpose to make it easy to integrate weapp login and getUserInfo logic. [express-weapp-auth](https://github.com/xixilive/express-weapp-auth)

## Use RESTful Http client

```js
import weapp from 'weapp-next'

const http = weapp(wx).Http('https://api.server.com/')
http.get('/status', {version: '1'}) // /status?version=1
http.post('/status', {data: {}})
```

## Moduling weapp development (TL;DW)

 [modulize wechat applet development](https://gist.github.com/xixilive/5bf1cde16f898faff2e652dbd08cf669) (chinese)
