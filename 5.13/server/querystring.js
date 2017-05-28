let qs = require("querystring")

let str = "name=lili&id=1";
let obj = {
    name:"lili",
    id:1
};
//指定分隔符
console.log(qs.parse(str,"&"));
//可以相互转换
console.log(qs.stringify(obj,"&"));