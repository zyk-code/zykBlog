---
title: 3D 相关的词解
tags:
  - node
categories:
  -  3D vision
---

## 图像
BEV（Bird's Eye View） -- 鸟瞰图
Range image -- 距离图像（深度图）
FV -- 前视图
点云
体素

## 网络
3dconv -- 3D 卷积
MaxPool3D -- 3D池化
SSD -- 随机梯度下降
BackBone -- yolo的图像处理（卷积和池化）

## yolo & 3d
开源的YOLO-6D，Complex-YOLOv4

### Complex yolov4 
基于三维投影的深度学习算法 
18年的算法
三维投影算法主要思想是用激光雷达点云的鸟瞰图（BEV）和前视图（FV）作为模型输入，将三维点云转换为二维图片

### YOLO-6D
一个利用2D目标的xy 预估出其余的6个点位置