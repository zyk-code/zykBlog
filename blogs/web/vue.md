---
title: Vue
date: 2023/3/22
tags: 
  - vue
categories: web
---

# 语法基础
## VUE2

vue实例的配置对象

el -- vue的实例服务的dom/容器，可以通过vm.$mout('#app')， 挂载到容器上

data -- 对象式和函数式，组件中必须用对象式

vue实例只能和容器一一对应

### 模板语法template

插值 -- {}

    标签内容

指令 -- v-bind（单向） v-model（双向） ...

    标签

### 数据代理

#### Object.defineProterty

跟三个参数，其中第一个是代理对象，第二个是值，最后一个为配置项，配置项中可以限制数据的一些操作

配置项中可以跟get和set -- getter setter

getter 是获取值得映射

setter 是监控值得变化

#### 代理

通过一个对象代理另外一个对象得数据读写

```js
	let obj1 = {x:100}
        let obj2 = {y:200}

        // 可以通过obj2操 obj得x
        Object.defineProperty(obj2,'x',{
            get() {
                return obj1.x
            },
            set() {
                obj1.x = value
            }

        })
```

#### VUE的代理

实例中的数据是从data中代理过来的，如果没有定义data，在实例中会有_data(做了数据劫持)

##### _data的数据劫持

实现响应式

### 事件

v-on / @

#### 事件修饰符

prenvent  -- 阻止默认事件

stop -- 阻止事件冒泡

once -- 只是触发一次事件

capture -- 使用事件触发捕捉模式

self -- 只是event.target

## VUE3

# 项目调试记录
## blog
### 华为为AGC的兼容性插件解决方法

SDK可以根据需求引入
但是一般都需要有认证的登录才可以用的

使用任何的东西必须登入
    可以采用匿名登录的方式
    才可以操作数据库

使用clouldDB，在web端是需要适配旧版本的
使用高于webpack5时
    按照文档配置时候使用babel-poplyfill时候会有报错
    可以通过下描述方案解决
        安装 npm install node-polyfill-webpack-plugin
        在vue.config.js或是webpack.config.js中配置webpack

```javascript
// 头部引入
            const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
            // 第一种
            configureWebpack: (config) => {
                onst plugins = []
                plugins.push(new NodePolyfillPlugin())
            }
             // 第二种
            configureWebpack: {
                plugins: [new NodePolyfillPlugin()],
            }
```

    来源：csdn
        链接：https://blog.csdn.net/FantasyWeirdo/article/details/123552064

### 使用多表，同数据域

使用的方式就是配置好json，就会生成对应的数据库

通过开启对应的数据域（配置的）

这个数据域用来增删改查数据，需要通过where传入对应的数据对象

写也是通过new生成对应的数据对象在通过数据域写入到数据库中

### css记录
1、使用.navite解决el-card点击事件不触发

2、overflow属性可以设置滚动条的可见和不可见（visable hidden ）等

3、卡片hover浮动一下
```css
.box {
    ...
    box-shadow:0px 2px 2px #ddd;
    transform: translateY(0);
    transition: .2s linear;
}
.box:hover {
    box-shadow:0px 4px 4px #c8c8c8;
    transform: translateY(-6px);
    transition: .2s linear;
}
```

4、el的日历无法修改大小解决方法

使用深度选择器 /deep/ 去修改日历中每天的尺寸，详细CSS代码如下：

```css
.test /deep/  .el-calendar-table .el-calendar-day{
    width: 60px;
    height: 40px;
  }
```

5、轮播图卡片

无法加载本地图片，可以通过import导入


### 动态图表

就是echarts的重新绘图就可以，给实例好的echart DOM设置新的option配置，注不用全改，只需将变化的东西修改了就好
（vue获取dom使用refs）


# 深度学习库
## tensorflow.js
TensorFlow.js 是一个 JavaScript 库，用于在浏览器和 Node.js 训练和部署机器学习模型。这是在ml5.js的基础上构造出来
安装（Blog）
```
npm install @tensorflow/tfjs
npm install @tensorflow/tfjs-code
```
引入方式
```
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
```
### 基本使用
#### 张量
tensor 是不可修改的一种类型
定义张量的一般方式
tf.tensor(list, shap) 

推荐使用使用方式
 tf.scalar（零维）, tf.tensor1d（一维）, tf.tensor2d（二维）, tf.tensor3d（三维）、tf.tensor4d（四维）以及 tf.ones（值全是1）或者tf.zeros（值全是0）

#### 变量
将tensor 转化为变量使用
tf.variable(tensor)

### 回归曲线