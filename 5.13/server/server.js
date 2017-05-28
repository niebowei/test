let http = require("http");
let fs = require("fs");
let mime = require("mime");
//req 代表客户端请求对象
//res 代表服务器响应对象
http.createServer(function (req,res) {
    
    if (req.url === "/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        let resHtml = fs.readFileSync("./index.html");
        res.end(resHtml);
        return
    }
    let pathname = req.url
//    处理静态资源请求
//    定义文件路径是否能找到  返回值是布尔
    let flag = fs.existsSync("."+pathname);
    if(flag){
        res.setHeader("Content-Type",mime.lookup(pathname)+";charset=utf-8")
        let resContext = fs.readFileSync("."+req.url)
        res.end(resContext)

    }else {
        res.statusCode = 404;
        res.end("404页面没了")
    }


}).listen(3000,function () {
    console.log("监听3000端口")
});