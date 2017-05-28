## events node 自带一个事件库（发布订阅模式）
- 发布订阅模式最常见的两个方法 on emit
- 发布订阅模式，订阅代表的就是一对多的关系，发布，就是当事件触发后，执行所有事情
{女生失恋了：[吃，逛街，哭]}

##搭建静态博客hexo
```
第一步 下载hexo
npm install hexo-cli -g
```
```
第二步生成 博客项目
hexo init blog
```
```
第三步 进入博客并安装依赖
cd blog && npm install
```
```
第四步 开启服务
hexo server
```
##部署到github上
-一个账号只能部署一个 用户名.github.io
npm install hexo-deployer-git --save
##发布github需要一个发布到github的插件
```
配置发布文件
deploy:
  type: git
  repo: https://niebowei:nnbbw2565133@github.com/niebowei/niebowei.github.io.git
  branch: master
```
##发布
-在当前目录下
```
hexo g 生成
hexo d 发布
```


