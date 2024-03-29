---
title: 初识pytroch
date: 2023/3/22
tags: 
  - python 
  - pytroch
categories: python
---

## 环境配置

使用anconda配置

conda info -e 查看当前创建的所有环境

conda create -n torch python=3.6 创建名为torch的环境，后面跟python版本，其他同理

activate torch 激活 torch环境，激活其他的环境同理

然后就可以在环境中安装包

conda deactivate  退出当前环境

#### 环境管理  conda env

可以跟list remove 等指令查看和删除环境等

pycharm使用环境

## 相关知识点

##### 线性回归

简单的回归

求解一个方程 y= ax + b

梯度下降

## pytorch的基本使用

#### 使用记录

1、tensor <==> numpy	

```python
import torch
import numpy as np

x = torch.arange(12)
x_numpy = x.numpy()
print(type(x_numpy))
#<class 'numpy.ndarray'>

y = np.arange(12)
y_tensor = torch.from_numpy(y)
print(type(y_tensor))
#<class 'torch.Tensor'>
```

2、注意如果创建的tensor 的梯度。 numpy是可以直接将tensor转numpy,但是没有梯度信息，要保留梯度回传的计算图就需要detach



#### 创建tensor

empty 创建未初始化的矩阵 可以跟size

randon 创建随机值的矩阵

zeros 创建值为0的矩阵，可以跟type

tensor 创建一个指定值的对象，可以跟list，该方式为使用构造函数创建

new_ones  和 randn_like可以在已有的tensor中创建出一个新的tensor （具体作用不清楚）

size 可以查看tensor的大小，返回为一个元组

add（） 或是 + 可以将两个矩阵相加，+使用了运算符重载的功能，add通过out指定返回值赋值对象

add_() 是在每个tensor对象中的方法，作用是将运算后的值返回给原来对象

reshape(i, j)  将数据重新排列为 i 行 j 列

cat(x, y) 将 x 和 y 进行连结

#### 广播机制

两个张量不符合一般的运算规则时，就会将他们的维度进行扩充（一般为自身复制）

#### 数据

Dataset Dataload

