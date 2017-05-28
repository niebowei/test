// 1.node基于common.js规范

//common.js规范 (模块)
//1、如何使用模块    require 使用模块
// 文件模块  引用是需要相对路径引用  ./ ../ 
// 第三方模块  写模块名即可  nrm ls   nrm test   nrm use
//开发依赖 --save-dev
//发布依赖 --save
// 安装之前 需要初始化package.json
//   初始化时不能有汉字特殊符号而且也不能叫已经有的模块
//  如果外层文件有node_modules会向上安装
//不能有注释
//  npm init -y




// 核心模块  内置模块
//2、如何定义模块   在node中，一个js文件就是一个模块
//3、如何导出模块  1、exports  
//module.exports = exports ={}
//如果使用export导出必须使用属性添加，否则无法挂载到module.export上

// 卸载模块
// npm uninstall

