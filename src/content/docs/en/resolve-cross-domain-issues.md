---
title: "解决跨域的几种方式"
description: "解决跨域的几种方式"
---


## CORS

跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器  让运行在一个 origin (domain)上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域HTTP 请求。
CORS需要浏览器和服务器同时支持，但整个CORS过程都是浏览器完成的，无需用户参与，因此只要服务器实现CORS请求，就可以跨源通信了
其中CORS又分为简单请求和非简单请求

### 简单请求

简单请求不会触发CORS预检请求，只要满足两个条件就可看作是简单请求

一：请求方法为HEAD，GET或POST

二：HTTP信息头不超出以下几个字段

* Accept
* Accept-Language
* Content-Language
* Last-Event-ID
* Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

在简单请求中，浏览器会直接发出CORS请求，它会在请求的头信息中添加一个origin字段，用来说明本次请求来至那个源。

**在简单请求中，在服务器内，至少需要设置字段：** `Access-Control-Allow-Origin`

### 非简单请求

预检请求使用的**请求方法是OPTIONS** ，表示这个请求是来询问的。他的头信息中的关键字段是Orign，表示请求来自哪个源。除此之外，头信息中还包括两个字段：

* **Access-Control-Request-Method** ：该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法。
* **Access-Control-Request-Headers** ： 该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段。

**在非简单请求中，至少需要设置以下字段：**

```shell
'Access-Control-Allow-Origin'  
'Access-Control-Allow-Methods'
'Access-Control-Allow-Headers'
```

##### 减少OPTIONS请求次数：

OPTIONS请求次数过多就会损耗页面加载的性能，降低用户体验度。所以尽量要减少OPTIONS请求次数，可以后端在请求的返回头部添加：Access-Control-Max-Age：number。它表示预检请求的返回结果可以被缓存多久，单位是秒。该字段只对完全一样的URL的缓存设置生效，所以设置了缓存时间，在这个时间范围内，再次发送请求就不需要进行预检请求了。


## jsonP


**jsonp** 的原理就是利用`<script>`标签没有跨域限制，通过`<script>`标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据

## postMessage

postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：

* 页面和其打开的新窗口的数据传递
* 多窗口之间消息传递
* 页面与嵌套的iframe消息传递
* 上面三个场景的跨域数据传递

用法：postMessage(data,origin)方法接受两个参数：

* **data** ： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。
* **origin** ： 协议+主机+端口号，也可以设置为"*"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。

## 

#### nginx代理跨域

实质和CORS跨域原理一样，通过配置文件设置请求响应头Access-Control-Allow-Origin…等字段。

## webSocket协议跨域

WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。
