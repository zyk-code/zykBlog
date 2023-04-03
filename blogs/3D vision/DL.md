---
title: 深度学习记录
date: 2023/3/22
tags: 
  - DL
categories: 3D vision
---

## 过程
![005](./image/DL/005.png)
1、将图像的特征展开为列向量输入到分类器或神经网络中，即使经过cnn等处理的特征图也是会展开（reshape）为列向量输入到全连接神经网络。

### 经典的激活函数
从这些经典的激活函数图像上可以看出，都会存在梯度消失的区间或不可导点，在使用的时候，可以选择合适的激活函数和约束避开这些点和区间的位置。
#### softmax激活函数

#### sigmoid激活函数
函数：
$$
S(x) = {1 \over {1 + {e^{ - x}}}}
$$

导数：
$$
{{dS(x)} \over {dx}} = {{{e^{ - x}}} \over {{{(1 + {e^{ - x}})}^2}}} = S(x)(1 - S(x))
$$
在代码中exp == e自然常数

  函数图像：
  ![sigmoid](./image/DL/sigmoid.png)

  导数（梯度）图像：
  ![grad_sigmoid](./image/DL/grad_sigmoid.png)

### relu激活函数（斜坡函数）
函数：
$$
f(x) = \max (0,x)
$$
导数：
$$
{{dS(x)} \over {dx}} = \left\{ {\matrix{
   1 & {x \ge 0}  \cr 
   0 & {x < 0}  \cr 

 } } \right.
$$
  函数图像：
  ![relu](./image/DL/relu.png)

  导数（梯度）图像：
  ![grad_relu](./image/DL/grad_relu.png)

这个有明显的梯度消失区间，固然它的变种leaky_relu就在梯度消失的区间上加入一定小量的斜率λ量，该变量可以随梯度传播改变大小。

  leaky_relu图像：
  ![leaky-relu](./image/DL/leaky_relu.png)

### tanh激活函数（双曲正切）
函数：
$$
f(x) = {{{e^x} - {e^{ - x}}} \over {{e^x} + {e^{ - x}}}}
$$

导数：
$$
{{df(x)} \over {dx}} = 1 - \tanh {(x)^2}
$$
  函数图像：
  ![tanh](./image/DL/tanh.png)

  导数（梯度）图像：
  ![grad_tanh](./image/DL/grad_tanh.png)

## 神经网络与经典的网络架构
### 全连接神经网络
每一层神经网络级联在一起的网络结构，在网络与中每一个神经元都会与后一层的每一个神经元连接。该网络是一种非线性分类器。
  例如：一个三层全连接（两隐层）网络的表达公式为:
$$
f(x) = {W_2}\max (0,{W_1}x + {b_1}) + {b_2}
$$
​									![006](./image/DL/006.png)
  命名机制：N层全连接神经网络——除输入层之外其他层的数量为N的网络
  该网络的激活函数是max()。正是激活函数使得全连接神经网络有非线性分类能力。如果失去了激活函数，就同一个线性分类器。
$$
f(x) = Wx + b
$$
注：W是一个模板，而且W不是一个列向量，而是由很多w1,w2,....的特征组成的矩阵


### 卷积神经网络



#### AlexNet:
8层 5conv+3全连接 
11×11的卷积核
使用 Dopout(随机失活)和 relu激活函数

ZFNet:
在AlexNet的基础上 s 为2

#### VGG：
3×3

#### GoogleNet；
利用1×1的神经网络进行通道压缩
全连接层1

#### ResNet：
残差神经网络

### rcnn

### fast-rcnn 、faster-rcnn & marks-rcnn

### transformer


## 