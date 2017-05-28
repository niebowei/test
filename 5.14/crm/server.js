let http = require("http");
let url = require("url");
let fs = require("fs");
let mime = require("mime");
let qs = require("querystring");


http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    let pathname2 = url.parse(req.url,true).pathname;
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
    //读取所有用户信息
    let userList = fs.readFileSync('./tsconfig.json','utf8');
    userList = JSON.parse(userList);//目前所有的用户列表信息
    //接口
    if(pathname=== '/getUserData'){//获取用户数据接口
        res.setHeader("Content-Type","application/json;charset=utf-8");
        let resJson = fs.readFileSync("./tsconfig.json")
        res.end(resJson)
        return
    }

    if(pathname === '/addUserData'){//添加用户数据接口
        //接收post请求发送数据
        //定义字符串拼接
        let str = '';
        req.on('data',function (data) {
            str += data
        });
        req.on("end",function () {
            let userObj = qs.parse(str);//用户提交的信息
            console.log(str);


            let lastInd = userList.data.length-1;
            //给增加的用户分配id
            userObj.id = userList.data[lastInd].id+1
            //增加用户信息并增加到数据中  写入
            userList.data.push(userObj);
            let resFlag = fs.writeFileSync('./tsconfig.json',JSON.stringify(userList));
            let reObj = {
                "error" : 0,
                "msg" : ""
            };
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

    console.log(pathname2);
    //删除用户接口
    if(pathname2==='/removeInfo'){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        let rid = Number(query.id);
        let userData = userList.data;
        for (var i= 0;i<userData.length;i++){
            if(userData[i].id=== rid){
                userData.splice(i,1);
                break
            }
        }
        userList.data = userData
        fs.writeFileSync("./tsconfig.json",JSON.stringify(userList));
        let reText = {code:0,msg:"删除成功"};
        res.end(JSON.stringify(reText));
        return
    }

    if(pathname === '/getUserInfo'){
    //    定义字符串承接
        let str = '';
        req.on('data',function (data) {
            //多次累加
            str+=data
        });
        req.on('end',function () {
            let userObj = qs.parse(str);
            console.log(userObj);
            let dataId = userObj.id;
            for(let i = 0;i<userList.data.length;i++){
                if (dataId==userList.data[i].id){
                    userList.data[i]=userObj
                }
            }
            console.log(userList)
            let resFlag = fs.writeFileSync('./tsconfig.json',JSON.stringify(userList));
            let reRe = {code:0,msg:"用户修改成功"};
            if(!resFlag){
                console.log("成功")
                res.end(JSON.stringify(reRe));
            }else {

            }


        });
        return
    }




    //处理静态资源
    let flag = fs.existsSync('.'+pathname);//判断是否存在路径
    if (flag){
        res.setHeader("Content-Type",mime.lookup(pathname)+';charset=utf-8');
        let resContext = fs.readFileSync("."+pathname);
        res.end(resContext)
    }else {
        res.setHeader("Content-Type","text/plain;charset=utf-8")
        res.statusCode = 404;
        res.end("404 你的页面飞走了")
    }




}).listen(9081,function () {
    console.log("监听9081端口");
});