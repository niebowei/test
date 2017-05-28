let http = require('http');
let fs = require('fs')
http.createServer(function (req,res) {
    let {pathname} = url.parse(req.url);
    if (pathname === '/'){

    }
    
    if(pathname === './getTime'){
        res.setHeader("Content-Type","text/plain;charset=utf-8");
        res.end(JSON.stringify(new Date().toLocaleString()))
    }
    return
}),listen(3000,function () {
    console.log("监听3000")
})