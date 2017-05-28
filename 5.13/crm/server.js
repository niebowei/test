let http = require("http");
let url = require("url");
let fs = require("fs");
let mime = require("mime");
let qs = require("querystring");


http.createServer(function (req,res) {

    let {pathname,query} = url.parse(req.url,true);
    if (pathname === "/"){
        res.setHeader("Content-Type","text/html;charset=utf-8")
        let resHtml = fs.readFileSync("./index.html");
        res.end(resHtml);
        return;
    }
    if (pathname === "/add"){
        res.setHeader("Content-Type","text/html;charset=utf-8")
        let resHtml = fs.readFileSync("./addUser.html");
        res.end(resHtml);
        return;
    }
    //接口
    if(pathname=== '/getUserData'){//获取用户数据接口
        res.setHeader("Content-Type","application/json;charset=utf-8");
        let resJson = fs.readFileSync("./tsconfig.json")
        res.end(resJson)
        return
    }
    if(pathname === '/addUserData'){//添加用户数据接口
        let str = '';
        req.on('data',function (data) {
            str += data
        })
        req.on("end",function () {
            let userObj = qs.parse(str);
            console.log(str)
            let userList = fs.readFileSync('./tsconfig.json','utf8');
            userList = JSON.parse(userList);
            let lastInd = userList.data.length-1;
            userObj.id = userList.data[lastInd].id+1
            userList.data.push(userObj);
            let resFlag = fs.writeFileSync('./tsconfig.json',JSON.stringify(userList));
            let reObj = {
                "error" : 0,
                "msg" : ""
            }

            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            if(!resFlag){
             reObj.msg = "用户添加成功";
                res.end(JSON.stringify(reObj))
            }else {
                reObj.msg = "用户添加失败";
                res.end(JSON.stringify(reObj))
            }


        });
        // res.end("ok");
        return;
    }




    //处理静态资源
    let flag = fs.existsSync('.'+pathname);
    if (flag){
        res.setHeader("Content-Type",mime.lookup(pathname)+';charset=utf-8');
        let resContext = fs.readFileSync("."+pathname);
        res.end(resContext)
    }else {
        res.setHeader("Content-Type","text/plain;charset=utf-8")
        res.statusCode = 404;
        res.end("404 你的页面飞走了")
    }




}).listen(9080,function () {
    console.log("监听9080端口");
});