---
title: c++ 学习记录
tags: 
  - c++  
categories:
  -  c++
---

## C++语法

### 小细节

1. iostream是没有.h 其它的头文件   这是c99标准
2. 命名空间 namespace
3. cout 输出 double类型需要跟showpoint `cout << showpoint << a; `

### 常识

* **栈：** 在函数内部声明的所有变量都将占用栈内存。
* **堆：** 这是程序中未使用的内存，在程序运行时可用于动态分配内存

## 内容

#### 面向对象

类的定义方式和成员函数

```c++
class Box{
    public:
        // 属性
        double length;
        double withd;
        // 声明成员函数 也可以在这里定义函数（方法）
        double get_length(void);
        double get_withd(void);
        double area(void);
        void set(double len,double wth);
};
// 定义成员函数
double Box::get_length(void){
    return length;
}
double Box::get_withd(void){
    return withd;
}
double Box::area(void){
    return length * withd;
}
void Box::set(double len,double wth){
    length = len;
    withd = wth;
}
```

##### 注意：私有的成员和受保护的成员不能使用直接成员访问运算符 (.) 来直接访问

##### 数据封装和数据抽象

这种方式对数据可以保护和提供对外访问数据的接口

**public、private、protected** 称为访问修饰符 是对数据封装，防止函数直接访问数据

public -- 可以通过 . 和 成员函数的方式访问

private -- 只有类和友元函数可以访问 ，如没有给定会默认为次数据封装类型

    所以一般的操作是这样的

```c++
class Box{
    private:
         // 属性
        double length;
        double withd;

    public:
        // 声明成员函数
        double get_length(void);
        double get_withd(void);
        double area(void);
        void set(double len,double wth);
};
// 定义成员函数
```

protected -- 一般是用在子类（派生类）访问的数据

```c++

class Box
{
   protected:
      double width;
};
 
class SmallBox:Box // SmallBox 是派生类
{
   public:
      void setSmallWidth( double wid );
      double getSmallWidth( void );
};
```

##### 继承

支持多重继承

有public, protected, private三种继承方式，它们相应地改变了基类成员的访问属性。

* 1. **public 继承：** 基类 public 成员，protected 成员，private 成员的访问属性在派生类中分别变成：public, protected, private
* 2. **protected 继承：** 基类 public 成员，protected 成员，private 成员的访问属性在派生类中分别变成：protected, protected, private
* 3. **private 继承：** 基类 public 成员，protected 成员，private 成员的访问属性在派生类中分别变成：private, private, private

但无论哪种继承方式，上面两点都没有改变：

* 1.private 成员只能被本类成员（类内）和友元访问，不能被派生类访问；
* 2.protected 成员可以被派生类访问。

##### 构造函数和析构函数

构造函数就是创建实例的时候会执行，这个和new关键字有关。

构造函数的名称与类的名称是完全相同的，并且不会返回任何类型，也不会返回 void，可以用于初始化，可以传参数，可以通过一个叫初始化字段。

```c++
class Box{
    public:
        double length;
        double withd;
        // 构造函数声明
        Box(double len, double wth);

};
Box::Box(double len, double wth){
    cout << "执行初始化的东西" << endl;
    length = len;
    withd = wth;
}
// 构造函数有参可以跟
Box box(1.0, 2.0);
```

**析构函数**是类的一种特殊的成员函数，它会在每次删除所创建的对象时执行。应该是和销毁内存有关的东修

析构函数的名称与类的名称是完全相同的，只是在前面加了个波浪号（~）作为前缀，它不会返回任何值，也不能带有任何参数。析构函数有助于在跳出程序（比如关闭文件、释放内存等）前释放资源。

```c++
class Box{
    public:
        double length;
        double withd;
        // 构造函数声明
        Box(double len, double wth);
	~Box();
};
Box::Box(double len, double wth){
    cout << "执行初始化的东西" << endl;
    length = len;
    withd = wth;
}
// 构造函数有参可以跟
Box box(1.0, 2.0);
```

**拷贝构造函数**是一种特殊的构造函数，它在创建对象时，是使用同一类中之前创建的对象来初始化新创建的对象。拷贝构造函数通常用于：

* 通过使用另一个同类型的对象来初始化新创建的对象。
* 复制对象把它作为参数传递给函数。
* 复制对象，并从函数返回这个对象。

  ```c++
  class Line
  {
     public:
        int getLength( void );
        Line( int len );             // 简单的构造函数
        Line( const Line &obj);      // 拷贝构造函数
        ~Line();                     // 析构函数

     private:
        int *ptr;
  };
  // 拷贝构造函数
  Line::Line(const Line &obj)
  {
      cout << "调用拷贝构造函数并为指针 ptr 分配内存" << endl;
      ptr = new int;
      *ptr = *obj.ptr; // 拷贝值
  }
  ```

##### 友元

**friend**关键字

这个可以是一个函数，也可以是一个类。

它是定义在类外的可以访问类的所有私有（private）成员和保护（protected）成员classBox

##### 内联函数

它是通常与类一起使用。在编译时，编译器会把该函数的代码副本放置在每个调用该函数的地方。

对内联函数进行任何修改，都需要重新编译函数的所有客户端，因为编译器需要更换一次代码。

定义内联函数，需将关键字  **inline** ，在调用函数之前需要对函数进行定义。

在类定义中的定义的函数都是内联函数，即使没有使用 **inline** 说明符。

##### this指针

使用的含义和其他语言的this相同

this -> fangfa()

每一个对象都能通过 **this** 指针来访问自己的地址。**this** 指针是所有成员函数的隐含参数。因此，在成员函数内部，它可以用来指向调用对象。

友元函数没有 **this** 指针，因为友元不是类的成员。只有成员函数才有 **this** 指针。

一个指向 C++ 类的指针与指向结构的指针类似，访问指向类的指针的成员，需要使用成员访问运算符  **->** ，就像访问指向结构的指针一样。与所有的指针一样，您必须在使用指针之前，对指针进行初始化。

##### 重载函数和运算符

这个机制是在同一个作用域下定义了同名的函数或是运用同样的运算符号，但是所跟的参数有区别时，C++会根据你调用时所跟的实参数匹配对应最合适的定义。这个选择的过程称为**重载决策**

```c++
class Text {
    public:
        void printNum(int num);
        void printNum(double num);

};
void Text::printNum(int num){
    cout << "ouput int is " << num << endl;
}
void Text::printNum(double num){
    cout << "output double is" << showpoint  << num << endl;
}

// 主函数
    Text t;
    t.printNum(1);  //  ouput int is 1
    t.printNum(2.0); // output double is2.00000
```

运算符号重载和理解的有所不同，看这个例子可以很好理解。不是所有的运算符都可以重载

```c++
class Box
{
   public:
 
      double getVolume(void)
      {
         return length * breadth * height;
      }
      void setLength( double len )
      {
          length = len;
      }
 
      void setBreadth( double bre )
      {
          breadth = bre;
      }
 
      void setHeight( double hei )
      {
          height = hei;
      }
      // 重载 + 运算符，用于把两个 Box 对象相加
      Box operator+(const Box& b)
      {
         Box box;
         box.length = this->length + b.length;
         box.breadth = this->breadth + b.breadth;
         box.height = this->height + b.height;
         return box;
      }
   private:
      double length;      // 长度
      double breadth;     // 宽度
      double height;      // 高度
};

// 主函数
   Box Box1;                // 声明 Box1，
   Box Box2;                // 声明 Box2，
   Box Box3;                // 声明 Box3，
   // 给1 2赋值
   // 可以通过运算符重载将+的功能变为两个对象相加1 2 赋给3可以得到新的实例
   Box3 = Box1 + Box2; // 此时的Box3的属性是前两个的和
```

##### 多态

在继承出现的情况下，存在多态。当多个或一个子类中重写了基类中的某个方法时，需要通过在父类被重写的方法前添加**virtual**关键字，才能在子类调用方法的时候通过指针的方式在父类中寻找到对应子类的对应重写的方法。

这是静态链接

就是根据继承的方式，关系是定

```c++
class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      virtual int area()
      {
         cout << "Parent class area :" <<endl;
         return 0;
      }
};
class A: public shape{
	public:
	  int area()
     	 {
         	子类a的方法
      	  }
}
class B: public shape{
	public:
	  int area()
     	 {
         	子类b的方法
      	  }
}
```

虚函数

**虚函数**是在基类中使用关键字 **virtual** 声明的函数。在派生类中重新定义基类中定义的虚函数时，会告诉编译器不要静态链接到该函数。

我们想要的是在程序中任意点可以根据所调用的对象类型来选择调用的函数，这种操作被称为 **动态链接** ，或 **后期绑定** 。

纯虚函数：= 0 告诉编译器，函数没有主体 `virtual int area() = 0;`

##### 接口（抽象类）

抽象类是至少有一个函数被声明为纯虚函数的类

它只能被其他类继承，不可实例化。可以理解为将一些比较通用的方法和属性归一，当子类继承时候必须重写方法才可以实例化

### 文件和流

输入和输出都是一个流

文件流

流（stream） 可以理解为一个专门存放东西的地方

### 异常处理

* **throw:** 当问题出现时，程序会抛出一个异常。这是通过使用 **throw** 关键字来完成的。
* **catch:** 在您想要处理问题的地方，通过异常处理程序捕获异常。**catch** 关键字用于捕获异常。
* **try:** **try** 块中的代码标识将被激活的特定异常。它后面通常跟着一个或多个 catch 块。

### 动态内存

c使用的是mallloc()函数和free函数 来申请空间

 c++可以使用new

```c++
double* pvalue  = NULL; // 初始化为 null 的指针
pvalue  = new double;   // 为变量请求内存
```

**注意** 使用new 关键字的时候需要注意如果可以申请的空间满了，需要对返回值进行判断

这个关键字还有一个作用就是创建对象

使用delet 关键代替free的功能释放内存空间

### 命名空间

就像python的包管理 和 js的闭包

### 模板

提供泛型能力

泛型--就是将原本只固定使用一种数据类型的方法和类拓展到多个-类型

#### 语法

函数模板： 就是可以将同样的函数体用于处理不同类型的数据

```c++
template <typename type> ret-type func-name(parameter list)
{
   // 函数的主体
}
// 实例
template <typename T>
inline T const& Max (T const& a, T const& b) 
{ 
    return a < b ? b:a; 
} 
```

类模板： 就是将类和方法中属性的数值类型可以变

```c++
template <class T>
class Stack { 
  private: 
    vector<T> elems;     // 元素 
 
  public: 
    void push(T const&);  // 入栈
    void pop();               // 出栈
    T top() const;            // 返回栈顶元素
    bool empty() const{       // 如果为空则返回真。
        return elems.empty(); 
    } 
}; 
```

### 多线程

### STL

#### 迭代器

迭代器就是一个类似于指针的对象

它会自动将数据中的东西逐个拿到想要的地方，可以顺逆

#### 容器

[ 博客](https://blog.csdn.net/qq_40156159/article/details/115464132?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166410707516782428630990%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall%255Fv2.%2522%257D&request_id=166410707516782428630990&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all_v2~first_rank_ecpm_v1~rank_v31_ecpm-2-115464132-null-null.142^v50^control_1,201^v3^control&utm_term=c%2B%2Bstl%E5%AE%B9%E5%99%A8&spm=1018.2226.3001.4187)资料

容器是用来管理某一类对象的集合

可以理解为是将一些常用给的数据结构和它们的符合形式抽象成类，内部使用迭代器将一些操作封装成为接口

##### 顺序容器

###### stack  -- 堆栈

###### deque -- 双端队列

* 就是队头队尾都可以进行进出队列的操作
* deque的迭代器并不是普通指针

###### queue -- 队列

###### priority_queue -- 优先队列（堆）

* 普通的队列是一种先进先出的数据结构，元素在队列尾追加，而从队列头删除。在优先队列中，元素被赋予优先级
* 当访问元素时，具有最高优先级的元素最先出队的行为特征。
* 优先队列实现了类似堆的功能（其实底层就是用堆实现的）。
* STL默认使用 <操作符来确定对象之间的优先级关系（也就是从大到小排序，默认大根堆）
* 优先队列的底层是用堆实现的。 在优先队列中默认存放数据的容器是vector，在声明时也可以用deque(双向队列)
* 没有迭代器，不提供遍历功能

###### list -- 循环双链表

* 有效利用空间
* 数据结构：环状双向链表
* 插入(insert)和接合(splice)操作都不会造成原来list的迭代器失效
* 删除（erase）操作仅仅使“指向被删除元素”的迭代器失效，其它迭代器不受影响
* 随机访问比较慢
* 任何位置元素的插入和删除，list是常数时间

###### vector  -- 向量

* 内存可2倍增长的动态数组
* 数据结构：线性连续空间
* 三个迭代器：start、finish、end_of_storage
* 在尾部插入和删除快，随即查找快。在前面或中间插入慢。
* capability：为降低空间配置时的速度成本，vector实际配置的大小可能比初始化所需要的大，以便将来的扩充。

###### 常见的操作（vector 其他的容器应该也有而且命名差不多）

* push_back( ) 成员函数在向量的末尾插入值，如果有必要会扩展向量的大小。
* size( ) 函数显示向量的大小。
* begin( ) 函数返回一个指向向量开头的迭代器。
* end( ) 函数返回一个指向向量末尾的迭代器。

##### 关联容器

set

map

hash map
