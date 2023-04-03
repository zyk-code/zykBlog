---
title: Stm32笔记
date: 2023/3/31
tags: 
  - Stm32
categories: Embedded Hardware
---

## STM 32

B站5个小时速成

通过HAL库和stm32cubex

__weak 在前面的意思就是虚函数需要自己写（定时器的回调）

通过 extern 可以将其他头文件中的const 引入，应该是一个作用域的东西

### 小常识

stm32是由内外部晶振的，它可以选择

## 标准库

这是封装好的函数，跟之前51的那个

### 如何构建项目

## HAL库

### GPIO和按键

HAL库的函数：

电平输出

 `void HAL_GPIO_WritePin(GPIO_TypeDef* GPIOx, uint16_t CPIO_Pin, GPIO_PinState PinState)`

电平反转

``void HAL_GPIO_TogglePin(GPIO_TypeDef* GPIOx, uint16_t CPIO_Pin)``

读电平

`void HAL_GPIO_WritePin(GPIO_TypeDef* GPIOx, uint16_t CPIO_Pin)`

参数 `GPIOx` x 选 ABC  `CPIO_Pin` pin 选123 ` PinState` 是输出电平 RESET SET

按键去抖

原理: 就是延时很短时间

### 定时器

需要使用回调函数

HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDeft *htim){

    // 用到了哪个定时器就指向哪个，可以同时启用多个定时器

    if(htim->Instance == TIM2)  // 指向实例

    {

    执行中断的回调

   }

}

启动定时器

HAL_TIM_Base_Statt_IT(&htim2) // 启动对应的定时器 传入的是地址

##### 输入PWM

配置好时钟，内部时钟

不需要写回调，启用就PWM通道和定时器就可以了

`HAL_TIM_PWM_Start(&htim2,TIM_CHANNEL_4);`

控制舵机，设置角度的值就好了

```c
__HAL_TIM_SET_COMPARE(&htim2,TIM_CHANNEL_4,50);
HAL_Delay(1000);
__HAL_TIM_SET_COMPARE(&htim2,TIM_CHANNEL_4,100);
HAL_Delay(1000);
__HAL_TIM_SET_COMPARE(&htim2,TIM_CHANNEL_4,150);
HAL_Delay(1000);
__HAL_TIM_SET_COMPARE(&htim2,TIM_CHANNEL_4,200);
HAL_Delay(1000);
__HAL_TIM_SET_COMPARE(&htim2,TIM_CHANNEL_4,250);
```

想做精确控制需要搞懂原理和定时器的工作方式

### OLED

##### 移植

需要将.c文件配置到Src .h配置在 Inc

然后在keil中通过添加文件的形式，.c加载进去

可以进入头文件中修改一些配置

##### 代码

可以去看他的库函数

引入头文件

初始化

void OLED_Init()

void OLED_Clear()

显示字符串

一般给如参数是坐标和字模

### 串口和定时器串口

函数：

发送有两种意识阻塞方式和非阻塞方式

```c

// 阻塞
HAL_StatusTypeDef  HAL_UART_Transmit(UART_HandleTypeDef *huart, uint8_t *pData, uint16_t size, uint32_t time)
// 非阻塞 要有回调函数
HAL_StatusTypeDef  HAL_UART_Transmit_IT(UART_HandleTypeDef *huart, uint8_t *pData, uint16_t size)

void HAL_UART_TxCpltCallBack(UART_HandleTypeDef *huart){
	if(huart->Instance == USART1){
	// 和定时器类似
		......
	}
}
```

接收也同样有两种

```c
// 阻塞
HAL_StatusTypeDef  HAL_UART_Receive(UART_HandleTypeDef *huart, uint8_t *pData, uint16_t size, uint32_t time)
// 非阻塞 要有回调函数
HAL_StatusTypeDef  HAL_UART_Receive_IT(UART_HandleTypeDef *huart, uint8_t *pData, uint16_t size)

void HAL_UART_RxCpltCallBack(UART_HandleTypeDef *huart){
	if(huart->Instance == USART1){
	// 和定时器类似
		......
	}
}
```

远程接收使用非阻塞方式

可以用sizeof (uint8_t *pData) 确定数据的大小
