# Url2Png API
### v. 1.0.0

**Description:**  
Convert a URL to a PNG image and download.
**Base Path:** /  


**Base url:** url2png.spatialdev.com// 


## Table of Contents


[/url2png](#/url2png_post)&nbsp;&nbsp;![POST](https://github.com/spatialdev/static-api-docs/blob/master/images/post.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;Convert webpage to PNG.

[/url2png](#/url2png_group)&nbsp;&nbsp;![GROUP](https://github.com/spatialdev/static-api-docs/blob/master/images/group.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;



## API Endpoints



#### <a id="/url2png_post">/url2png</a>&nbsp;&nbsp;![POST](https://github.com/spatialdev/static-api-docs/blob/master/images/post.png?raw=true)

The url2png endpoint accepts a URL and returns a link to download


##### Parameters
|Name|In|Required|Type|Description|
|---|---|---|---|---|
|url|body|false|string|URL of webpage to convert|
|viewport_width|body|false|number|The width of the produced PNG (default is 1440px)|
|delay|body|false|number|The time delay (ms) before executing image capture (default is 5000 ms)|



##### Success 200 (Object)
|Name|Type|Description|
|---|---|---|
|message|string|success|
|downloadURL|string|The relative URL for download of the captured image. Root will be the same as the API.|

##### Error 400 (Object)
|Name|Type|Description|
|---|---|---|
|message|string|No URL to print in post data|
|status|string|Error Status|

##### Error 500 (Object)
|Name|Type|Description|
|---|---|---|
|message|string|Error message|
|status|string|Error Status|


#### <a id="/url2png_group">/url2png</a>&nbsp;&nbsp;![GROUP](https://github.com/spatialdev/static-api-docs/blob/master/images/group.png?raw=true)








