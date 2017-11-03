This is a starter project for my smartHome projects.

## How to use this project

To use this project With the Ionic CLI:

Firstly:join the root directory
```bash
npm install
ionic serve
```

if you want to build the project in your mobile phone,you should do this
with your mobile phone connection
```bash
$ ionic cordova platform add androids
$ ionic cordova run android
```

### learn note
karma-test  http://blog.csdn.net/xuexiiphone/article/details/52233289
http://blog.fens.me/nodejs-karma-jasmine/
unit-test http://blog.csdn.net/u010730126/article/details/51082068
UML-Tool  https://www.processon.com/diagrams/new?team=59ebeaefe4b07162476ce380#temp-system

## require analyzer
1.输入数据并能保存到数据库(sqlite3)-家族信息录入查询-登录/注册模块
2.通用的管理信息系统(模块化 单元测试 [测试数据库]智能家居数据 工作记录表(开机自动弹出今日工作任务脚本-根目录下的dailyWork.sh) 房屋租赁 药书资料 族谱信息 )  
3.web前端 数据库(药草图片 录音笔记 文献资料索引转换阅读等)

### 详细设计
1.web前端信息输入框填入数据->提交到数据库
2.当前工作任务记录表(时间 姓名 目标  备注) ---查看可参与的公益活动(活动获取api)

### 测试数据库
1.输入字段检查 区间范围检查
http://www.cnblogs.com/liuroy/p/5616327.html  sqlite3二进制图片
