---
title: "HTTP常见状态码"
description: "HTTP常见状态码"
---

<!-- 2023/6/14 -->
HTTP 响应状态码用来表明特定 HTTP 请求是否成功完成

状态码通常以3位数字和短语原因组成列如 200 OK ,其中数字第一位指定了响应类别并归为以下五大类，其对应如下表

| 状态码 | 信息 | 描述 |
| ----- | ---- |----|
| 1xx | Informational（信息状态码） | (信息响应)接受请求正在处理 |
| 2xx | Success（成功状态码） | (成功响应)请求正常处理完毕 |
| 3xx | Redirection（重定向状态码）| (重定向消息)需要附加操作已完成请求 |
| 4xx | Client Error（客户端错误状态码）| (客户端错误响应 )请求有语法错误或请求无法实现 |
| 5xx | Server Error（服务器错误状态码）| (服务端错误响应 )服务器处理请求出错 |

HTTP状态码高达60余种,但常用的只有16种,因此单独将其列出
详细信息请看[HTTP响应状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status#%E4%BF%A1%E6%81%AF%E5%93%8D%E5%BA%94)
## 常用HTTP状态码

| 状态码  | 描述 |
| -----   |----|
|200	OK | 请求成功 |
|204	No Content | 无内容。服务器成功处理，但未返回内容|
|206	Partial Content | 对资源某一部分的请求，服务器成功处理了部分GET请求，响应报文中包含由Content-Range指定范围的实体内容。|
|301	Moved Permanently	|永久性重定向。请求资源的 URL 已永久更改。在响应中给出了新的 URL。|
|302	Found	|临时性重定向。与301类似。但资源只是临时被移动。客户端继续使用原有URI|
|303	See Other	|服务器发送此响应,以指示客户端通过一个 GET 请求在另一个 URI 中获取所请求的资源。|
| **304	Not Modified**	|未修改。用于浏览器缓存。代表所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。|
|307	Temporary Redirect |	临时重定向。与302类似。但不能更改所使用的 HTTP 方法：如果在第一个请求中使用了 POST，则在第二个请求中必须使用 POST。|
|400	Bad Request	| 客户端请求报文中存在错误，服务器无法理解，无法或不会处理请求。|
|401	Unauthorized	| 请求要求用户的身份认证，通过HTTP认证（BASIC认证，DIGEST认证）的认证信息，若之前已进行过一次请求，则表示用户认证失败|
|402	Payment Required |	保留，将来使用|
|403	Forbidden |	 客户端没有访问内容的权限，服务器拒绝执行此请求 与 401 Unauthorized 不同，服务器知道客户端的身份。|
|404	Not Found	|服务器找不到请求的资源|
|500	Internal Server Error	| 服务器内部错误，无法完成请求，也可能是web应用存在bug或某些临时故障|
|501	Not Implemented |	服务器不支持请求方法，无法完成请求|
|503	Service Unavailable	 |服务器没有准备好处理请求。常见原因是服务器因维护或重载而停机|