---
title: 深度学习笔记
date: 2023/3/22 
tags: 
  - python 
  - DL
  - CNN 
categories: 3D vision
---
## Tensorflow安装

进入python环境

使用豆瓣镜像源下载安装

```powershell
pip install tensorflow-cpu==2.3.0 -i https://pypi.douban.com/simple/
```

tensorflow2.3.0需要注意
需要注意protobuf的版本换为pip install protobuf==3.19.0
需要注意numpy的版本换为pip install numpy==1.23.4

#### tensorflow的层级架构
![004](./image/DL/004.png)

tensorflow2.0也是动态可变的计算图，而且相比pytroch有更加完备的生态

tensorflow.js -- web端的机器学习

tensorflow.lite -- 移动端和嵌入式的模型部署


## Kaggle比赛

https://www.kaggle.com/
一个竞赛网站，是深度学习这边，有模型推理







## ML学习

[谷歌课程地址](https://developers.google.cn/machine-learning/crash-course/prereqs-and-prework?hl=zh-cn#algebra)

### 线性回归
一个简单的线性回归模型

```python
# 一个简单的线性回归
import tensorflow as tf
import pandas as pd
from matplotlib import pylab as plt
import numpy as np


# 定义模型

def build_model(learning_rate):
    # 使用Sequential方式创建模型，还有functional方式创建模型
    model = tf.keras.models.Sequential()

    # 给模型的输
    model.add(tf.keras.layers.Dense(units=1, input_shape=(1,)))

    #
    model.compile(optimizer=tf.keras.optimizers.RMSprop(),
                  loss="mean_squared_error",
                  metrics=[tf.keras.metrics.RootMeanSquaredError()])

    return model


# 训练模型
#  model-- 模型, feature-- 特征, label--标签, epochs, batch_size -- 批次大小

def train_model(model, feature, label, my_epochs, my_batch_size):
    # 训练过一次的模型
    history = model.fit(x=feature,
                        y=label,
                        batch_size=my_batch_size,
                        epochs=my_epochs)
    # 收集经过训练的权重和偏差
    train_weight = model.get_weights()[0]
    train_bias = model.get_weights()[0]

    # 收集上一次训练的epoch
    epochs = history.epoch

    # 上一次训练
    hist = pd.DataFrame(history.history)

    # 收集每一次的均值和方差
    rmse = hist["root_mean_squared_error"]

    return train_weight, train_bias, epochs, rmse


# 绘图特征值与标签值的关系图

def plot_model(train_weight, train_bias, feature, label):
    # 绘制坐标轴
    plt.xlabel("feature")
    plt.ylabel("label")
    plt.scatter(feature, label)

    # 模型的线
    x0 = 0
    y0 = np.array(train_bias)[0][0]
    x1 = feature[-1]
    y1 = np.array(train_bias + (train_weight * x1))[0][0]
    # print([x0, x1], [y0, y1])
    # print(train_bias + (train_weight * x1))
    # print(train_bias)
    plt.plot([x0, x1], [y0, y1], color='r')

    plt.show()


# 绘图损失曲线 训练次数-均方差

def plot_loss(epochs, rmse):
    plt.figure()
    plt.xlabel("Epoch")
    plt.ylabel("Root Mean Squared Error")

    plt.plot(epochs, rmse)
    plt.legend()
    plt.ylim([rmse.min() * 0.97, rmse.max()])
    plt.show()


# 自定义数据集

my_feature = ([1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0])
my_label = ([5.0, 8.8, 9.6, 14.2, 18.8, 19.5, 21.4, 26.8, 28.9, 32.0, 33.8, 38.2])

# 指定超参数
learning_rate = 0.01
epochs = 450
batch_size = 12

my_model = build_model(learning_rate)
train_weight, train_bias, epochs, rmse = train_model(my_model, my_feature, my_label, epochs, batch_size)

plot_model(train_weight, train_bias, my_feature, my_label)
plot_loss(epochs, rmse)
```
学习率（步长） 
训练批次

#### 泛化
泛化的能力是从真实数据中抽取出新数据并做出良好的预测
##### 如何评定一个模型？
理论上：
  有趣的领域：泛化理论
  基于衡量模型简单性 / 复杂性的理念
直觉：奥卡姆剃刀定律的形式化
  模型越简单，良好的实证结果就越有可能不仅仅是基于样本的特性
![001](./image/DL/001.png)

##### 欠拟合
模型过于简单，模型的描述能力弱
解决方式
1、增加源头数据量
2、数据增强
3、估计数据分布参数

##### 过拟合
模型过于复杂，参数过多，训练效果很好但对未知数据预测结果很差
解决方式：
1、正则化：通过在loss函数中加入范数作为约束条件，形成条件极值可以（拉格朗如乘数法 （下文具体介绍）
范数（和正则化相关）：1范数和2范数为常见
![002](./image/DL/002.jpg)
2、调整模型大小
3、随机失活（Dropot)：让隐层的神经元以一定的概率不被激活

  - 解析1
    使得每次更新梯度时参与计算的网络参数减少了，降低了模型容量，所以能防止过拟合。
  - 解析2
    使得权重分散，相当于正则化的作用
  - 解析3
    可以看作模型集合

#### 数据集(Data Set)
一个数据集的时候可以进行分组；训练集和测试集 (数据拆分随机)、测试集
!测试集不可于训练
验证集：是一个中间的集合，用在训练时找出相对理想的模型，然后将模型用于测试集
![003](./image/DL/003.svg)

#### 特征
数据源提取数据集值(特征工程)
好特征：
1、避免使用很少使用的离散特征值
2、首选清澈明朗的含义
3、功能的定义不会随时间而变化
数据清理对数据进行放缩 处理极端的离群值 分箱等，去除一些比较偏离和影响较小的数据。

##### 特征组合
将两个或多个特征相乘形状的组合特征。特征组合可能会提供超过这些特征单提供的预测能力，可以拟合非线性

#### 正则化

（结构风险最小化，即最小化loss和model complex）
$$
\min imize(Loss(Data|Model)) +complexity(Model)
$$
loss函数是体现模型损失，正则项则是体现模型复杂

##### 模型复杂度的刻画方式

- 将模型复杂度作为模型中所有特征的权重的函数。  （L2正则化或简化正则化） -- 过拟合
- 将模型复杂度作为具有非零权重的特征总数的函数。（L1正则化或稀疏正则化）-- 稀疏性

##### L2正则化

通过权重的绝地值衡量模型的复杂，绝对值高的比绝对值低的更复杂。w的绝对值越小对模型复杂影响越小，离群值（可以理解为偏离数值很大的w）影响对模型复杂性影响很大。
$$
{L_2}{\rm{reg}}ulation = \left\| {} \right.w\left. {} \right\|_2^2 = \sum\limits_{i = 1}^n {{w_i}}
$$
在使用时，引入正则化率（λ）来刻画正则化的效果。该值不能设置过高，会过于简化模型，发生欠拟合，也不能过低，简化的作用和很小。一般在（0-1）最为合适选择
$$
\min imize(Loss(Data|Model)) + \lambda  \times complexity(Model)
$$
使用该正则化对模型的影响

- 建议将权重值设为 0（但并非 0）

- 使权重的平均值接近于 0，且呈正态（钟形曲线或高斯曲线）分布

- 使得信息缺乏的特征 w接近0，即尽可能消除影响

  

该策略对逻辑回归很有作用

##### L1正则化





### 逻辑回归

将一个问题输入，转换为概率的输出（0，1）softmax     sigmoid激活函数






## 神经网络

ANN -- 人工神经网络

BP(Back Propagation) -- 反向传播（BP算法）一个十分重要和典型的神经网络



layer -- 层

