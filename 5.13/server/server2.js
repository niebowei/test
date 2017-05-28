let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");
let qs = require("querystring");  //jquery处理ajax模块
//req 代表客户端请求对象
//res 代表服务器响应对象
http.createServer(function (req,res) {
    console.log(req.url);
    let pathname = req.url;
    let urlObj = url.parse(pathname,true);
    let pathname2 = urlObj.pathname;
    // console.log(urlObj)
    // let pathname = urlObj.pathname
    let query = urlObj.query;
    if (req.url === "/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        let resHtml = fs.readFileSync("./getHtml.html");
        res.end(resHtml);
        return
    }


    if (pathname2 === '/getData'){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        //get 请求处理
        //准备空 字符串累加每次传输
        //获取请求方法
        if (req.method === "GET"){
            //这是get请求
            console.log("这是get请求");
            console.log(query)
        }else if (req.method === "POST"){
            //这是POST请求
            console.log("这是post请求")
            let str = "";
            req.on("data",function (data) {//一点一点传输  每次都会触发
                str += data;
            });

            req.on("end",function () {//整个数据传递完毕  类型为字符串
                console.log(str);
                let obj = qs.parse(str);
                console.log(obj);
                console.log(obj.name);
            });
        }




        let resJson = fs.readFileSync("./getData.json")
        res.end(resJson);
        // return

        // 接收post 数据请求
        return
    }




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

}).listen(3001,function () {
    console.log("监听3001端口")
});