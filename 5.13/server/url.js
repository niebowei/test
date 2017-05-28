let url = require("url");

let urlStr = "https://www.sogou.com/sie?hdq=AQxRG-4437&query=hhhh&ie=utf8";
//设置为true 可以将参数由字符串转换为对象 
let urlObj = url.parse(urlStr,true);

console.log(urlObj)