let EventEmitter = require("events");
let util = require("util");
//on emit removeListener
function Girl() {}
util.inherits(Girl,EventEmitter);
let girl = new Girl();
function cry(who) {
    console.log("哭"+who)
}
function eat(who) {
    console.log("吃"+who)
}
girl.on("女孩失恋了",cry);
girl.on("女孩失恋了",eat);
girl.emit("女孩失恋了","我");