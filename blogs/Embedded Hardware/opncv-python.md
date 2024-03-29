---
title: Opencv使用踩坑记录
date: 2023/3/18
tags:
  - opencv
  - python
  - jetson nano
categories: jetson nano
---
1、yolov5 的依赖安装时有opencv的不需要重复安装
2、cis摄像头和usb摄像头时有不同的调用视频流方式

### 摄像头驱动

测试摄像头功能使用应用程序茄子（cheese）-- 可以拍照和拍视频

输入命令安装：

```shell
sudo apt-get install cheese
```

 装好后，用命令：

```shell
cheese
```

即可打开。

#### cis摄像头

这是使用管道

```python
# -*- coding: utf-8 -*-
import cv2
 
# 设置gstreamer管道参数
def gstreamer_pipeline(
    capture_width=1280, #摄像头预捕获的图像宽度
    capture_height=720, #摄像头预捕获的图像高度
    display_width=1280, #窗口显示的图像宽度
    display_height=720, #窗口显示的图像高度
    framerate=60,       #捕获帧率
    flip_method=0,      #是否旋转图像
):
    return (
        "nvarguscamerasrc ! "
        "video/x-raw(memory:NVMM), "
        "width=(int)%d, height=(int)%d, "
        "format=(string)NV12, framerate=(fraction)%d/1 ! "
        "nvvidconv flip-method=%d ! "
        "video/x-raw, width=(int)%d, height=(int)%d, format=(string)BGRx ! "
        "videoconvert ! "
        "video/x-raw, format=(string)BGR ! appsink"
        % (
            capture_width,
            capture_height,
            framerate,
            flip_method,
            display_width,
            display_height,
        )
    )
 
 
if __name__ == "__main__":
    capture_width = 1280
    capture_height = 720
    display_width = 1280
    display_height = 720
    framerate = 60
    flip_method = 0
 
    # 创建管道
    print(gstreamer_pipeline(capture_width,capture_height,display_width,display_height,framerate,flip_method))
 
    #管道与视频流绑定
    cap = cv2.VideoCapture(gstreamer_pipeline(flip_method=0), cv2.CAP_GSTREAMER)
 
    if cap.isOpened():
        window_handle = cv2.namedWindow("CSI Camera", cv2.WINDOW_AUTOSIZE)
        
        # 逐帧显示
        while cv2.getWindowProperty("CSI Camera", 0) >= 0:
            ret_val, img = cap.read()
            cv2.imshow("CSI Camera", img)
 
            keyCode = cv2.waitKey(30) & 0xFF         
            if keyCode == 27:# ESC键退出
                break
 
        cap.release()
        cv2.destroyAllWindows()
    else:
        print("打开摄像头失败")
```



#### usb摄像头

```python
# -*- coding: utf-8 -*-
import cv2
 
if __name__ == "__main__":
 
    cap = cv2.VideoCapture(3)	# 要通过命令查看当前接入的摄像头列表，填入video—对应的号码 
 
    if cap.isOpened():
        window_handle = cv2.namedWindow("D435", cv2.WINDOW_AUTOSIZE)
        
        # 逐帧显示
        while cv2.getWindowProperty("D435", 0) >= 0:
            ret_val, img = cap.read()
            cv2.imshow("D435", img)
 
            keyCode = cv2.waitKey(30) & 0xFF         
            if keyCode == 27:# ESC键退出
                break
 
        cap.release()
        cv2.destroyAllWindows()
    else:
        print("打开摄像头失败")
```

