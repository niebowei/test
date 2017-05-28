console.log("hello AA")
let add = (a,b)=>console.log(a+b);
console.log(this === module.exports);
//模块导出
// module.exports.add = add;
//批量导出
// module.exports = {
//     sya : 'nihao',
//     name : 'zhufeng',
//     add : add
// };
//
// exports = {//此方法不能批量导出，相当于开发于一个新的对象空间
//     id:20,
//     name:'zhufeng'
// }


//其实导出都是module.exports这个模块对象
exports.sayHi = () => console.log("say hi");
module.exports.add = add;


