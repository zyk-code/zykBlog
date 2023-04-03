---
title: python 笔记
date: 2023/3/22
tags: 
  - python 
categories: python
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
7、conda点击图标闪退

```powershell
1.管理员权限运行anaconda prompt
2.升级conda：
conda update anaconda-navigator

3.重置navigator: 
anaconda-navigator --reset

4.升级客户端：
conda update anaconda-client

5.升级安装依赖包：
conda update -f anaconda-client

6.再尝试打开anaconda

7.如果上方出现更新较慢，可以添加镜像源，加快速度：
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes

8.查看是否添加上源了：
conda config --show（看channels属性下是否有上方添加的两个镜像了）

9.如果镜像失效，删除镜像：
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/

在cmd中输入Anaconda-Navigator启动
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

```python
将整个模块(somemodule)导入，格式为： import somemodule

从某个模块中导入某个函数,格式为： from somemodule import somefunction

从某个模块中导入多个函数,格式为： from somemodule import firstfunc, secondfunc, thirdfunc

将某个模块中的全部函数导入，格式为： from somemodule import *
```

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
## 运算符号

    是有优先级的
    和c相比特殊的地方
    计算和比较、赋值、位运算、逻辑运算符号外
    
    逻辑运算使用的 and or not 去代表与或非  这个应用在判断条件上
    
    成员运算符使用 in  not in 来判断包括字符串，列表或元组中是否含有该成员
    
    身份运算符使用 is  not is 来比较两个对象的存储单元 可以使用id()函数获取存储单元

## 解释器

    Python 解释器可不止一种哦，有 CPython、IPython、Jython、PyPy 等。
    
    CPython 就是用 C 语言开发的了，是官方标准实现，拥有良好的生态，所以应用也就最为广泛了。
    
    IPython 是在 CPython 的基础之上在交互式方面得到增强的解释器（http://ipython.org/）。
    
    Jython 是专为 Java 平台设计的 Python 解释器（http://www.jython.org/），它把 Python 代码编译成 Java 字节码执行。
    
    PyPy 是 Python 语言（2.7.13和3.5.3）的一种快速、兼容的替代实现（http://pypy.org/），以速度快著称

## 迭代器与生成器
优雅的访问set和需要循环的列表等

一个迭代器类需要有: iter和next

__iter__() 方法返回一个特殊的迭代器对象， 这个迭代器对象实现了 __next__() 方法并通过 StopIteration 异常标识迭代的完成。

__next__() 方法（Python 2 里是 next()）会返回下一个迭代器对象。

StopIteration是异常用于标识迭代的完成



## 面向对象和类

- **类(Class):** 用来描述具有相同的属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。对象是类的实例。

- **方法：**类中定义的函数。

- **类变量：**类变量在整个实例化的对象中是公用的。类变量定义在类中且在函数体之外。类变量通常不作为实例变量使用。

- **数据成员：**类变量或者实例变量用于处理类及其实例对象的相关的数据。

- **方法重写：**如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖（override），也称为方法的重写。

- **局部变量：**定义在方法中的变量，只作用于当前实例的类。

- **实例变量：**在类的声明中，属性是用变量来表示的，这种变量就称为实例变量，实例变量就是一个用 self 修饰的变量。

- **继承：**即一个派生类（derived class）继承基类（base class）的字段和方法。继承也允许把一个派生类的对象作为一个基类对象对待。例如，有这样一个设计：一个Dog类型的对象派生自Animal类，这是模拟"是一个（is-a）"关系（例图，Dog是一个Animal）。

- **实例化：**创建一个类的实例，类的具体对象。

- **对象：**通过类定义的数据结构实例。对象包括两个数据成员（类变量和实例变量）和方法。

- **类的私有属性**

  **__private_attrs**：两个下划线开头，声明该属性为私有，不能在类的外部被使用或直接访问。在类内部的方法中使用时 **self.__private_attrs**。**self** 的名字并不是规定死的，也可以使用 **this**，但是最好还是按照约定使用 **self**。

  **__private_method**：两个下划线开头，声明该方法为私有方法，只能在类的内部调用 ，不能在类的外部调用。**self.__private_methods**()。

类的继承机制允许多个基类，派生类可以覆盖基类中的任何方法，方法中可以调用基类中的同名方法。（这样可能不具有多态功能）

##### 示例

```python
class people:
    #定义基本属性
    name = ''
    age = 0
    # 定义私有属性,私有属性在类外部无法直接进行访问
    __weight = 0
    # 定义构造方法
    def __init__(self,n,a,w):
        self.name = n
        self.age = a
        self.__weight = w
    def speak(self):
        print("%s 说: 我 %d 岁。" %(self.name,self.age))
 
# 单继承示例
class student(people):
    grade = ''
    def __init__(self,n,a,w,g):
        #调用父类的构函
        people.__init__(self,n,a,w)
        self.grade = g
    # 重写父类的方法
    def speak(self):
        print("%s 说: 我 %d 岁了，我在读 %d 年级"%(self.name,self.age,self.grade))
 
#另一个类，多重继承之前的准备
class speaker():
    topic = ''
    name = ''
    def __init__(self,n,t):
        self.name = n
        self.topic = t
    def speak(self):
        print("我叫 %s，我是一个演说家，我演讲的主题是 %s"%(self.name,self.topic))
 
# 多重继承
class sample(speaker,student):
    a =''
    def __init__(self,n,a,w,g,t):
        student.__init__(self,n,a,w,g)
        speaker.__init__(self,n,t)
 
test = sample("Tim",25,80,4,"Python")
test.speak()   #方法名同，默认调用的是在括号中参数位置（speaker,student）排前父类的方法
# 我叫 Tim，我是一个演说家，我演讲的主题是 Python
```

##### 注意

self 是指向类所创建的实例。

支持运算符号重载类似C++

## 装饰器

[博客地址](https://blog.csdn.net/qq_22918243/article/details/127484172)

使用符号为@
python装饰器本质上是一个函数，可以让其他函数在不需要做任何代码变动的前提下添加额外功能，
装饰器的返回值也是一个函数对象。简单的说装饰器就是一个用来返回函数的函数。

```python
def decro(func):  
    def wrapper(*args, **kwargs):  
        print("wrapper")  
        return func()  
  
    return wrapper

@decro  
def test():  
    print("test")  

test()
# wrapper
# test

```

1、**执行流程**是先执行完装饰器中的内容，在执行加入装饰器函数中的内容

2、加入装饰器会使得原函数的**函数信息** `__name__` 和 `__doc__` 变成 装饰器的信息

3、不改变函数信息的方式是引入wraps装饰器并在装饰器的执行函数中装饰。

```python
from functools import wraps  
  
def decro(func):  
  
    @wraps(func)  
    def wrapper(*args, **kwargs):  
        """ wrapper doc """  
        print("wrapper")  
        return func(*args, **kwargs)  
  
    return wrapper  
  
@decro  
def test():  
    """ test doc """  
    print("test")  

# 调用原函数
test.__wrapped__()
```

## 并发编程



#### 多进程
multiprocessing包 Process类
```python
from multiprocessing import Process

def fun():
    print("text Process")

Process_text = Process(target = fun)

Process_text.start() # 开始进程

```

#### 多线程
Threading的包 中的threading类，python自带的
```python
from threading import Thread

def fun():
    print("text threading")

thread_text = Thread(target = fun)

thread_text.start() # 开始线程，每个线程只能开始一次
threading.enumerate() # 查看当前线程池，返回list

```
线程的结束是内部run()，即被cpu执行完毕。如何下次要start，可以重新写一个线程，前面的会被python自动回收


### 

## 算法
### 数组去重
```python
# 使用set对数值去重复
list = [1,3,4,3,5,5]
res = []
s = set(list)
for i in s:
    res.append(i)
print(s)
print(res)
print(type(res[0]))
```