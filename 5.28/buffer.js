// let sum = 0;
// for (let i = 1; i<=8;i++){
//     sum +=1*Math.pow(2,i-1);
// }
//
// console.log(sum);
//一个字节在十进制中 最大是255
// 16进制全部以0x开头 8进制以0开头

// 1.通过长度创建
// var buffer = new Buffer(6);
// buffer.fill(0);//手动填充buffer
// console.log(buffer)//内容是随机的,清空内存

// 2.通过数组创建[1,2,3]   十进制会转换成node可读的16进制
// var buffer = new Buffer([100,120,140]);
// console.log(buffer);//如果数组中的某个不能正确转换则是0，如果 超过255 对256取模， 如果写负数则加上256

// 3.通过字符串创建buffer
// var buffer = new Buffer('培训');
// console.log(buffer);//通过汉字创建的buffer内容和汉字是对应的，将buffer转换成字符方法是toString(),如果取buffer中的某一个，则是16进制代表的10进制
//1.buffer.toString   buffer.length
//2.slice
//3.copy  可以将小的buffer拷贝到大的buffer上
// buffer.copy();targetBuffer 目标buffer, targetStart 目标开始位置, sourceStart 源的开始 , sourceEnd 源的结束
// var buffer = new Buffer(12);
// var buf1 = new Buffer('珠峰');
// var buf2 = new Buffer('培训');
// buf2.copy(buffer,0,0,buf2.length);
// buf1.copy(buffer,buf2.length,0,buf1.length);
// console.log(buffer.toString());
// buf2.copy();

// 4.Buffer.concat([buf1,buf2]) buffer拼接  返回还是buffer
var buf1 = new Buffer('珠峰');
var buf2 = new Buffer('培训');
//如果不写长度  默认拼接后的长度  如果写的过长多余的会截取  如果长度过小 则多余的拷贝不进去
Buffer.myConcat = function (list,totalLength) {
  // 1.不传递长度，计算出一个总长度，根据计算出的长度构建一个大Buffer
    //2.如果传长度，按照传的长度构建buffer new Buffer
    //3.将list中每一个buffer拷贝到大buffer上  copy
    //4.最后截取掉多余的长度  slice
    if (typeof totalLength === "undefined"){
        totalLength = list.reduce((prev,next)=>{
            return prev+next.length
        },0)//计算总长度
    }


    let buffer = new Buffer(totalLength);

    let index = 0;
    list.forEach(item=>{
        item.copy(buffer,index);
        index+=item.length;
    });
    return buffer.slice(0,index)
    // let totalLength = 0;
    // for(let i=0;i<list.length;i++){
    //     totalLength+=list[i].length;
    // }
    //


};


console.log(Buffer.myConcat([buf1, buf2], 100).toString());


// var arr = [1,2,3,4];
// var ary = [arr,1,2,3];
// var newAry = ary.slice(0);//浅拷贝
// arr[0] = 100;
// console.log(newAry);
// buffer中存的也是内存地址，可以将buffer看成一个二维数组











// 3.如何拷贝一个对象  递归循环浅拷贝
// var obj = {name:1,age:2};
// var obj2 = {};
// object.assign(obj2,obj)//es6拷贝对象













