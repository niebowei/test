// 全局属性  global
// process 进程 env  pid  kill
// buffer 缓冲区
// clearImmediate 清除立即 
//
// 计算时间差   time 和 timeEnd
// console.time('start');
// for (let i = 0;i<10000000;i++){
//
// }
// console.timeEnd('start');

//2.setTimeout(this 代表定时器自己 不是global)
//改变this的方法   改变函数中的this指向
// 1用bind但是bind只能绑定一次
// 2（call，apply会导致函数执行）
//3 var that = this
//4 使用箭头函数处理函数，因为自己家没有this指向 从而解决了this指向 （压根就没有this）

// let obj = {
//     a:function () {
//         setTimeout(function () {
//             console.log(this);
//         }.bind(this),1000)
//     }
// }

// let obj = {
//     a:function () {
//         let that = this;
//         setTimeout(function () {
//             console.log(that);
//         },1000)
//     }
// }

// let obj = {
//     a:function () {
//         setTimeout(() => {
//             console.log(this);
//         },1000)
//     }
// }
//
// obj.a();

//二.传递参数  可以从第二个参数开始传递实参
// function eat(what) {
//     console.log(what)
// }
//
// setTimeout(eat,1000,"香蕉")

//三、获取除了第一个参数 后面所有参数
// function eat(what,what1,what2) {
//     //获取除了第一个参数 后面所有参数
//     //1、利用call改变argument中的this指向数组
//     let args = [].slice.call(arguments,1);
//     //2、argument转换为数组 es6语法
//     let args = Array.from(arguments).slice(1)
//     console.log(what)
// }


//3、剩余运算符   ...args  将其他参数转换成数组类型
// function eat(what,...args) {
// console.log(args)
// }

//也可当做拓展运算符
let arr = [1,2,3];
let arr1 = [4,5,6];
console.log(...arr,...arr1)//合并数组
setTimeout(eat,1000,"香蕉","苹果");



