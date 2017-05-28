// process进程
// process.kill(process.pid)杀死进程
// process.exit()退出进程
// 开发环境 和 上线环境
// 在电脑上 设置变量
// 1、在命令行设置环境  process.env代表当前环境变量
// set NODE_EVN=development;
//2、判断环境变量
// if (process.env.NODE_EVN == "development"){
//     console.log("开发环境")
// }else {
//     console.log("线上环境")
// }
//二、process.nextTick  下一队列（当前队列底部）
process.nextTick(function () {
   console.log('nextTick') 
});
setImmediate(function () {
    console.log("setImmediate")
});
//重要的事情放在nextTick中 稍微不重要的放在setImmediate