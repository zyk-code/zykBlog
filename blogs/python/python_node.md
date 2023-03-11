---
title: python 笔记
tags: 
  - python 
categories:
  -  python
---
## 小技巧和注意点

1、可以使用set对数组去重

2、python没有++ -- ！ 没有null 只有 None

3、逻辑判断用的是 or and

4、ctl+/ 可以快速注释多行代码

5、没有赋值或者作用域出现问题，都会导致变量报错，类似local variable 'player1_img' referenced before assignment

6、在终端执行

```powershell
pip install KafkaProducer
```

命令时，出现no matching distribution found for XXX 或 Read timed out等问题

解决方案：把命令改为

```powershell
pip install KafkaProducer --default-timeout=100 -i https://pypi.tuna.tsinghua.edu.cn/simple
```



## 基础语法

### 标识符

1、第一个字符必须是字母表中字母或下划线 _ 。
2、标识符的其他的部分由字母、数字和下划线组成。
3、标识符对大小写敏感。

### 多行语法

通过\ 换行，数组 元组  字典内部的换行不用使用

例如 total = item_one +
    item_two +
    item_three

### 字符串的使用

""" """ or ''' ''' 这个可以多行字符，不需要使用转义 \

### 导包

使用 import 与 from...import

将整个模块(somemodule)导入，格式为： import somemodule

从某个模块中导入某个函数,格式为： from somemodule import somefunction

从某个模块中导入多个函数,格式为： from somemodule import firstfunc, secondfunc, thirdfunc

将某个模块中的全部函数导入，格式为： from somemodule import *

## 数据类型

--前三个为不可变数据类型 后三个为可变数据类型
--类型判断使用type()函数和isinstance(数据,类型)
--显示（使用函数强转）和隐示转换

### Number（数字）

    int -- 整形的所有
    float -- 浮点型
    bool -- 布尔型
    complex -- 复数型 例如 4+3j （比较特别）

### String（字符串）

    需要注意的是在字符串前跟 r 字符串中的转义符号就会失效 一般使用在路径上
    例如： dir_name = r"c\ean:nong "

### Tuple（元组）

    使用的符号是()
    值是不可修改
    但是可以查询  查询方式是使用下标查询

### List（列表）

    使用的符号是[]

### Set（集合）

    使用符号{} 或者 set(val)
    空集合必须通过set()创建
    这个数据类型就像数学中的那个集合，可以计算交并集

### Dictionary（字典）

    使用的符号是 {}
    不同于前面的数据，这里的数据存在方式是键值对的方式
    查询也是通过键值对查询

### 常见的数据类型转换函数

    int(x [,base])          将x转换为一个整数
    
    float(x)                将x转换到一个浮点数
    
    complex(real [,imag])   创建一个复数
    
    str(x)                  将对象 x 转换为字符串
    
    repr(x)                 将对象 x 转换为表达式字符串
    
    eval(str)               用来计算在字符串中的有效Python表达式,并返回一个对象
    
    tuple(s)                将序列 s 转换为一个元组
    
    list(s)                 将序列 s 转换为一个列表
    
    set(s)                  转换为可变集合
    
    dict(d)                 创建一个字典。d 必须是一个 (key, value)元组序列。
    
    frozenset(s)            转换为不可变集合
    
    chr(x)                  将一个整数转换为一个字符 这个应该是和ASII码对应
    
    ord(x)                  将一个字符转换为它的整数值 这个应该是和ASII码对应
    
    hex(x)                  将一个整数转换为一个十六进制字符串
    
    oct(x)                  将一个整数转换为一个八进制字符串
    
    abs(x)                  求x的绝对值

## 推导式

    这是python的一个特点
    可以应用在list tuple dictionary set
    作用类似js里面的map可以执行一个回调或对以上数据进行一个处理
    
    例如：
    # 列表的推导式
        list = [i for i in range(0,10)]
        print(list)
        print(type(list))
        # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        # <class 'list'>
    
    # 元组的推导式
        t = (i for i in range(0,10))
        print(t)
        print(type(t)) # 这里返回的是生成器对象 需要是用tuple转为元组
        tu = tuple(t)
        print(tu)
        print(type(tu))
        # <generator object`<genexpr>` at 0x000002AB8D68BBA0>
        # <class 'generator'>
        # (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
        # <class 'tuple'>
    
    # 集合的推导式
        s = {i for i in range(0,10)}
        print(s)
        print(type(s))
        # {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
        # <class 'set'>
    
    # 字典的推导式
        d = {i: i for i in range(0,10)}
        print(d)
        print(type(d))
        # {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
        # <class 'dict'>

## 解释器

    Python 解释器可不止一种哦，有 CPython、IPython、Jython、PyPy 等。
    
    CPython 就是用 C 语言开发的了，是官方标准实现，拥有良好的生态，所以应用也就最为广泛了。
    
    IPython 是在 CPython 的基础之上在交互式方面得到增强的解释器（http://ipython.org/）。
    
    Jython 是专为 Java 平台设计的 Python 解释器（http://www.jython.org/），它把 Python 代码编译成 Java 字节码执行。
    
    PyPy 是 Python 语言（2.7.13和3.5.3）的一种快速、兼容的替代实现（http://pypy.org/），以速度快著称

## 运算符号

    是有优先级的
    和c相比特殊的地方
    计算和比较、赋值、位运算、逻辑运算符号外
    
    逻辑运算使用的 and or not 去代表与或非  这个应用在判断条件上
    
    成员运算符使用 in  not in 来判断包括字符串，列表或元组中是否含有该成员
    
    身份运算符使用 is  not is 来比较两个对象的存储单元 可以使用id()函数获取存储单元

## 面向对象和类

class 各种通用

类内调用初始化的参数，要使用self关键字，类似于把这些属性封装到了这个指定对象内部


## 多线程
Threading的包，python自带的
```python
import threading

def fun():
    print("text threading")

thread_text = threading.Thread(target = fun)

thread_text.start() # 开始线程，每个线程只能开始一次
threading.enumerate() # 查看当前线程池，返回list

```
线程的结束是内部run()，即被cpu执行完毕。如何下次要start，可以重新写一个线程，前面的会被python自动回收