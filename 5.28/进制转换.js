//将任意进制转换成10进制 parserInt

// console.log(parseInt("111", 2));


//将任意进制转换成任意进制  toString


//将16进制转换成2进制 0xff
// console.log(0xff.toString(2))



// base64转换  将汉字转换成base64 没有加密功能
//加密 1、不可逆  不能解密 2、加密的结果长度都是一样的 3、不同内容加密后的结果不一致


// 一个汉字 3*8 => 6*4,每一个字节不能超过64这么大

var buffer = new Buffer("珠");
console.log(buffer)//e7 8f a0
console.log(0xe7.toString(2));//11100111
console.log(0x8f.toString(2));//10001111
console.log(0xa0.toString(2));//10100000

// 111001 111000 111110 100000 需要转化成10进制去对应的编码取值

console.log(parseInt("111001",2));
console.log(parseInt("111000",2));
console.log(parseInt("111110",2));
console.log(parseInt("100000",2));
//57 56 62 32





