---
title: Vue
date: 2023/3/22
tags: 
  - vue
categories: web
---

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