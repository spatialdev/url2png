## Url2Png API: v1.0.0
#### Table of Contents


[/url2png](#/url2png_post)&nbsp;&nbsp;![POST](https://github.com/spatialdev/static-api-docs/blob/master/images/post.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;Convert webpage to PNG.



***
<br/>


#### <a id="/url2png_post">/url2png</a>&nbsp;&nbsp;![POST](https://github.com/spatialdev/static-api-docs/blob/master/images/post.png?raw=true)

The url2png endpoint accepts a URL and returns a link to download a PNG representation of the web page at the URL.

##### Parameters
|Name|Required|In|Type|Description|
|---|---|---|---|---|
|url|true|body|string|URL of webpage to convert|
|viewport_width|false|body|number|The width of the produced PNG (default is 1440px)|
|delay|false|body|number|The time delay (ms) before executing image capture (default is 5000 ms)|


##### Success 200 (Object)
|Name|Type|Description|
|---|---|---|
|message|string|success|
|downloadURL|string|The relative URL for download of the captured image. Root will be the same as the API.|

##### Error 400 (Object)
|Name|Type|Description|
|---|---|---|
|message|string|No URL to print in post data|

##### Error 500 (Object)
|Name|Type|Description|
|---|---|---|
|message|string|Error message|
|error|object|Error object.|



