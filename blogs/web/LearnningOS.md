---
title: 计算机操作系统学习记录
date: 2023/3/22
tags:
  - learnning reword 
categories: web
---
# 第一章

### 概述

    操作系统是一个软件

    作为管理者
    操作系统的功能和要求
              功能：处理机管理 存储器（内存）管理 文件管理 设备管理
               要求： 高效 安全

    向用户提供服务
            需要提供：命令接口 程序接口 图形接口（GUI）

    命令接口：联机和脱机 就是交互式 一个是批处理（.bat）
            程序接口：win中的（dll）-- 一组系统调用
            GUI：就是我们可以通过图像和系统交互

    对硬件拓展

    特征（前面两个为基本）
        并发：并非并行，这个并发其实是宏观上，在很细分其实是有一定的时间交替的
        共享
        虚拟
        异步

### 发展过程

 手工（纸带打孔）
 批处理（单道、多道（中断技术）批处理系统）
 分时间操作系统（时间片）
 实时操作系统（可以优先响应紧急的任务，规定严格的时间，有软硬实时的区分）
 网络 分布式
 多道（中断技术）批处理系统--已经有并发，操作系统同时诞生

操作系统的运行机制和系统的结构
    运行机制：
        -- 指令和代码的区别：机器语言指令，一般的高级语言最后都会变成机器语言指令即2进制
        -- 指令也是有等级，特权和非特权，操作内存之类的指令就是特权
        -- 处理器的状态可以执行不同等级的指令， 用户态（目态）-- 只能非特权 核心态（管态）--两个都可以
        -- 这个状态是由cpu的内部寄出器决定的
        -- 相应的就有两种程序，应用程序和内核程序对应了两种状态

### 内核

    最接近硬件
        包含：时钟管理 中断管理 原语（驱动 cpu）系统资源的管理（有的os内核不包含）--进程管理 存储器管理 设备管理
        分为：大内核和微内核 （这是由于内核的架构而分的，就是设计时候的功能）
            大内核：一般代码多
            微内核：一般需要频繁切换cpu的状态，效率会低，方便维护

    中断和异常：
            中断机制：

# 第二章

## 进程于线程

### 进程

是在多道技术的发展 推动了进程

PCB 数据段 程序段 组成了进程实体 （静态）

PCB就是进程存在的唯一标识

进程（动态）是系统进行资源调度的单位

##### PCB

进程信息描述：进程标识符PID 用户标识UID

控制和信息： 优先级

资源分配清单：指针 外设

处理机相关信息：寄存器（保护数据）

##### 组织

链接：将PCB分为多个队列，并分配指针

    执行指针 就绪队列指针 阻塞队列指针 指向对应状态的PCB

索引：将多个PCB分配并建立索引表

    执行指针 就绪队列指针 阻塞队列指针 指向索引表，索引表中会对应到PCB

##### 特征

动态 并发 独立 异步 结构

### 进程的状态转换

###### 状态

三种基本状态

1. 运行：占用cpu，看多少核，就可以同时有多少进程
2. 就绪：具有运行状态，拥有资源，但cpu没有空位给它
3. 阻塞：等待某个事件的发生而没有运作，很像中断
4. 创建（情况）：给进程PID UID之类
5. 终止（情况）：回收内存的空间，PCB销毁

###### 状态转换

![1661500941952](image/计算机操作系统/1661500941952.png)

##### 进程控制

进程

原语：开关中断信号  运行在核心态下

### 进程通信

实现的方式：共享存储 消息传递 管道通信

##### 共享存储

给一个共享的内存空间，让两个进程进行消息或者数据交互，但这需要两个互斥（就是两者只有一者可以访问这个空间）

有两种方式：数据结构和存储区    前者比较低级有限制

##### 管道通信

固定大小的缓存区域，采用半双工通信--即在一个时间段内只能由一个进程向另外一个进程通信

对于管道的访问也是互斥，就是读写是分离

##### 消息传递

交换的是格式化的消息

消息： 消息头（身份信息，像写信的信封一样） 消息体

方式： 直接和间接（放到一个固定的地方，就像信箱）

### 线程

进程需要同时处理很多事情，但是进程一般串行的，为了提高并发的程度，引入线程

一个进程中分为多个线程，可以并发的执行，线程是最小的执行流单位。

线程只是调度的基本单位，资源的分配还是由进程进行。

组成：ID和TCB

基本状态和进程类似

##### 实现方式

用户级线程：是在用户态下进行

内核级线程： 由操作系统的内核管理  ，这个才是处理机分配的单位

##### 多线程模型

多对一：

一对一：

多对多：

## 调度

### 处理机调度

就是分配，排队

##### 高级调度(作业调度)

面向作业

就是调入内存的顺序   外存 => 内存

##### 中级调度(内存调度)

面向进程

 外存 => 内存

进程被调出外存会到挂起状态，会有一个队列，是把那个挂起状态调入和调出内存

挂起有两种就是就绪挂起和阻塞挂起。

挂起是放在进程映像里，而不在内存

##### 低级调度(进程调度)

最基本的调度，就是把一个进程调入cpu执行

内存 => CPU

##### 时机

当前运行的进程主动或是被动放弃处理机，就会发生进程调度

不可进程调度时：

1. 处理中断的时候
2. 进程在内核的临界区 内核临界区--就是访问内核一些数据结构（例如进程队列）
3. 进行原子操作的过程（原语）

##### 切换和过程

1. 对原运行的进程进行数据保护
2. 对新进来的进程进行数据恢复

##### 方式

非剥夺（非抢占）：只允许进程主动放弃

剥夺（抢占）：允许进程被动放弃处理机 -- 分时 实时

### 调度算法的评估指标

##### CPU利用率

就是cpu处于忙碌的时间占总时间的比例

甘特图

##### 系统吞吐量

单位时间内完成的作业

##### 周转时间

作业提交给系统到作业完成的时间

有平均和带权

##### 等待时间

等待被服务的时间

就是在外存中队列等待作业调度，还有进程内在系统内部，在等待IO设备实现的时间不算等待时间

##### 响应时间

用户提交到被响应的时间

### 调度算法

#### 用于早期批处理

##### FCFS（先来先服务）

先进入队列的作业/进程先进入就绪队列先进行行服务 -- 非抢占式

优缺点：

1. 公平简单
2. 对于长作业/进程后的短作业/进程会不利，对短作业不利

不会导致饥饿，就是都会进行服务

##### SJF（短作业优先）

最求平均等待时间最短，是要求当前到达的服务时间最短的优先被服务，可以用在进程（SPF）和作业

一般非抢占式，可以设计为抢占式（SRTN）-- 每当就绪队列变化时，要计算一下剩余的时间谁短就运行谁

优缺点：

1. 可以获的最短的平均等待时间、平均周转时间
2. 对于长作业不利

会导致饥饿

##### HRRN（高响应比优先）

综合考虑服务时间和等待时间

根据当前就绪队列的响应比进行选择，（等待时间+要求服务时间）/要求服务时间

一般为非抢占式

不会饥饿

#### 分时操作系统

##### RR（时间片轮转）

对于进程，公平地和轮流的进行进程服务，这个是根据进程的状态变化和就绪队列的变化进行的，在进程用完一个时间片或是进程主动放弃才进行调度。

时间片的长短因系统和状态而不同

用于进程调度

抢占式 -- 通过时钟中断打断

时间片太大，就有可能变为FCFS，时间片太小，会导致进程切换过于频繁，时间片时间要合理

优点：公平 响应快 适合分时操作系统

缺点： 进程切换的时间开销

不会饥饿

##### 优先级调度算法

每个进程和作业都有自己的一个优先级别，当进程或作业完成时进行调度，按照优先级进行处理

可用于进程和作业调度

抢占和非抢占

会饥饿

##### 多级反馈队列调度算法

一般用于进程调度，抢占式

设置多个队列，每个队列的时间片和级别都有区分

会饥饿


## 同步和互斥

### 同步

进程具有异步性，各自独立不可预知

进程同步就是让进程的执行符合我们给定的要求

### 互斥

资源的共享方式，对于可以互斥共享的临界资源

do{

进入区 -- 上锁

临界区 -- 访问资源

退出区-- 解锁

剩余区 -- 其余的处理

}while(1)

原则：

* 空闲让进入  -- 临界区空闲
* 忙则等待
* 有限等待 -- 保证不会饥饿
* 让权等待

##### 实现方式

###### 软件

单标志法
	思想两个进程在访问临界区后会把使用临界区的权限给另外一个

    使用一个标志变量控制访问临界区的访问

    违背了空闲让进

双标志先检查

    设置一个bool数组，下标对应进程，值对应是否进入临界区

    由于异步性，可能存在两个进程同时进去临界区

    违背忙则等待

双标志后检查

    不同于上者，只是先把自己的标记为设置true上锁，在看其他的进程是否访问临界区

    违背了空闲让进，有限等待

peterson算法

    将双标志后检查和单标结合，通过单标达到主动让步的行为

    未遵循让权等待

###### 硬件

中断屏蔽

适用内核进程的互斥实现

TestAndSet指令

使用TS指令上锁临界区，不会被中断打断，通过硬件实现标志

Swap指令

### 信号量机制

整形和记录型
