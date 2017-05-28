function Girl() {
    this._events = {}
}
//{"女孩失恋了“：【】}
Girl.prototype.on = function (eventName,callback) {
    if (this._events[eventName]){//    第二次
        this._events[eventName].push(callback)
    }else {//    第一次
        this._events[eventName] = [callback]
    }
};
Girl.prototype.removeListener = function (eventName,callback) {
  if (this._events[eventName]){//filter过滤返回新数组，如果函数中返回true添加到新数组中，返回false这项不要了
      this._events[eventName] = this._events[eventName].filter(item=>{
          return item !== callback //返回true留下  返回false丢到
      })
  } 
};




Girl.prototype.emit = function (eventName,...others) {
    if (this._events[eventName]){
        this._events[eventName].forEach(item=>{
            item().apply(this,others)
        })//如何将数组中的每一次依次传入到函数中,foreach第二个参数是this指向
    }
};
let girl = new Girl();
function eat(who) {
    console.log("哭"+who)
}
function eat(who) {
    console.log("吃"+who)
}
girl.on("女孩失恋了",eat);
girl.on("女孩失恋了",eat);
girl.emit("女孩失恋了","我");



