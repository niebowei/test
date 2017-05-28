//http 内置模块  搭建server
let http = require('http');
let fs = require('fs');
let mime = require('mime') //第三方模块  解析mime类型
//req 代表客户端请求对象
//res 代表服务端响应对象
http.createServer(function (req,res) {
    console.log(req.url);
    let pathname = req.url;
    if(req.url==='/'){
        // res.setHeader("Content-Type","text/html;charset=utf-8");
        let resHtml = fs.readFileSync('./index.html');
        res.end(resHtml);
        return;
    }

    //其他的动态资源处理
    //先查找下当前存不存在这个文件
    let flag = fs.existsSync('.'+pathname);
    if(flag){
        res.setHeader("Content-Type",mime.lookup(pathname)+";charset=utf-8");
        let resJs = fs.readFileSync("."+pathname);
        res.end(resJs)
    }else {//如果不存在
        res.statusCode = 404;
        res.end("404 notfind")
    }






    //res.end('hello server');//结束响应  并且返回一些信息给客户端
}).listen(9090,function () {
    console.log("监听9090端口")
});