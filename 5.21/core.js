// 核心模块 node自带的模块  fs，http，url。。。
// util 工具包node自带的工具包  继承inherits

//原生js中有哪些继承方式
// 1、call
// function parent() {
//     this.cardId = "xxxxxx"
// }
// parent.prototype.eat = function () {
//     console.log("吃肉")
// };
// function child() {
//     parent.call(this);//在儿子类中执行parent方法并且让this指向儿子
//     //call只继承私有
// }
// let child = new child();

// 2、构造函数的方法  继承父级
function parent() {
    this.cardId = "xxxxxx"
}
parent.prototype.eat = function () {
    console.log("吃肉")
};
function child() {

}
//new parent不能传递参数
child.prototype = new parent();
//3、继承共有
child.prototype.__proto__ = parant.prototype
//4.儿子的原型只有分类的共有属性
function create(parentPro) {
    let Func = function () {

    };
    Func.prototype = parentPro;
    return new Func()
}
child.prototype = create(parent.prototype);
//5、继承共有 object.setPrototypeOf() es6
object.setPrototypeOf(child.prototype,parent.prototype)
// 6、node
function child() {
}
let util = require("util");
util.inherits(child,parent)//只继承公有属性
util.isArray()
util.isBoolean()
util.isDate()

//判断数据类型 typeof instanceof  object.prototype.toString.call()


