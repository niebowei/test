// 收敛  返回叠加后的结果
var total = [1,2,3,4].reduce((prev,next)=>{
   console.log(prev,next);
    return prev+next;//返回值回作为下一次的循环的上一次
},0);//0是指定第一次的上一次
console.log(total)