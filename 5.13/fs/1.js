//fs 内置的文件系统模块
let fs = require('fs');
//同步读取
// let resHtml = fs.readFileSync('./index.html','utf8');//默认读取buffer格式 转换成utf8
// console.log(resHtml);
// console.log("123")

//异步读取
//callback
//@paraml1 err 错误信息 如读取成功 null
//@paraml2 result 读取内容
//通常异步代码都有回调函数 没有返回值
// let resHtml = fs.readFile('./index.html','utf8',function (err,result) {
//     console.log(err);
//     if (err){
//         throw Error(err)
//     }else {
//         console.log(result)
//     }
// });
// console.log("后面代码")

//@param1fd 文件路径
//@param2写入内容
//@param3 option  flag 默认为w  w写入并覆盖  a追加
//@param4 callback
// fs.writeFile('./data.txt','hello nodeJs',{flag:'a'},function (err,result) {
//     console.log(err)
//     if (err){
//         console.log(err)
//     }
// })

//写入内容要不是字符串格式 要不就是buffer格式   如是json需要JSON.stringify()
let resData = fs.readFileSync('./data2.txt');
fs.writeFileSync('./data.txt',resData)







