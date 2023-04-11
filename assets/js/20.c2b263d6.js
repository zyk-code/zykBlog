(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{475:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"stm-32"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stm-32"}},[t._v("#")]),t._v(" STM 32")]),t._v(" "),s("p",[t._v("B站5个小时速成")]),t._v(" "),s("p",[t._v("通过HAL库和stm32cubex")]),t._v(" "),s("p",[t._v("__weak 在前面的意思就是虚函数需要自己写（定时器的回调）")]),t._v(" "),s("p",[t._v("通过 extern 可以将其他头文件中的const 引入，应该是一个作用域的东西")]),t._v(" "),s("h3",{attrs:{id:"小常识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小常识"}},[t._v("#")]),t._v(" 小常识")]),t._v(" "),s("p",[t._v("stm32是由内外部晶振的，它可以选择")]),t._v(" "),s("h2",{attrs:{id:"标准库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准库"}},[t._v("#")]),t._v(" 标准库")]),t._v(" "),s("p",[t._v("这是封装好的函数，跟之前51的那个")]),t._v(" "),s("h3",{attrs:{id:"如何构建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何构建项目"}},[t._v("#")]),t._v(" 如何构建项目")]),t._v(" "),s("h2",{attrs:{id:"hal库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hal库"}},[t._v("#")]),t._v(" HAL库")]),t._v(" "),s("h3",{attrs:{id:"gpio和按键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpio和按键"}},[t._v("#")]),t._v(" GPIO和按键")]),t._v(" "),s("p",[t._v("HAL库的函数：")]),t._v(" "),s("p",[t._v("电平输出")]),t._v(" "),s("p",[s("code",[t._v("void HAL_GPIO_WritePin(GPIO_TypeDef* GPIOx, uint16_t CPIO_Pin, GPIO_PinState PinState)")])]),t._v(" "),s("p",[t._v("电平反转")]),t._v(" "),s("p",[s("code",[t._v("void HAL_GPIO_TogglePin(GPIO_TypeDef* GPIOx, uint16_t CPIO_Pin)")])]),t._v(" "),s("p",[t._v("读电平")]),t._v(" "),s("p",[s("code",[t._v("void HAL_GPIO_WritePin(GPIO_TypeDef* GPIOx, uint16_t CPIO_Pin)")])]),t._v(" "),s("p",[t._v("参数 "),s("code",[t._v("GPIOx")]),t._v(" x 选 ABC  "),s("code",[t._v("CPIO_Pin")]),t._v(" pin 选123 "),s("code",[t._v("PinState")]),t._v(" 是输出电平 RESET SET")]),t._v(" "),s("p",[t._v("按键去抖")]),t._v(" "),s("p",[t._v("原理: 就是延时很短时间")]),t._v(" "),s("h3",{attrs:{id:"定时器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时器"}},[t._v("#")]),t._v(" 定时器")]),t._v(" "),s("p",[t._v("需要使用回调函数")]),t._v(" "),s("p",[t._v("HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDeft *htim){")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("// 用到了哪个定时器就指向哪个，可以同时启用多个定时器\n\nif(htim->Instance == TIM2)  // 指向实例\n\n{\n\n执行中断的回调\n")])])]),s("p",[t._v("}")]),t._v(" "),s("p",[t._v("}")]),t._v(" "),s("p",[t._v("启动定时器")]),t._v(" "),s("p",[t._v("HAL_TIM_Base_Statt_IT(&htim2) // 启动对应的定时器 传入的是地址")]),t._v(" "),s("h5",{attrs:{id:"输入pwm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入pwm"}},[t._v("#")]),t._v(" 输入PWM")]),t._v(" "),s("p",[t._v("配置好时钟，内部时钟")]),t._v(" "),s("p",[t._v("不需要写回调，启用就PWM通道和定时器就可以了")]),t._v(" "),s("p",[s("code",[t._v("HAL_TIM_PWM_Start(&htim2,TIM_CHANNEL_4);")])]),t._v(" "),s("p",[t._v("控制舵机，设置角度的值就好了")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__HAL_TIM_SET_COMPARE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("htim2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("TIM_CHANNEL_4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_Delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__HAL_TIM_SET_COMPARE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("htim2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("TIM_CHANNEL_4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_Delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__HAL_TIM_SET_COMPARE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("htim2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("TIM_CHANNEL_4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_Delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__HAL_TIM_SET_COMPARE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("htim2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("TIM_CHANNEL_4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_Delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__HAL_TIM_SET_COMPARE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("htim2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("TIM_CHANNEL_4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("想做精确控制需要搞懂原理和定时器的工作方式")]),t._v(" "),s("h3",{attrs:{id:"oled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oled"}},[t._v("#")]),t._v(" OLED")]),t._v(" "),s("h5",{attrs:{id:"移植"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移植"}},[t._v("#")]),t._v(" 移植")]),t._v(" "),s("p",[t._v("需要将.c文件配置到Src .h配置在 Inc")]),t._v(" "),s("p",[t._v("然后在keil中通过添加文件的形式，.c加载进去")]),t._v(" "),s("p",[t._v("可以进入头文件中修改一些配置")]),t._v(" "),s("h5",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("p",[t._v("可以去看他的库函数")]),t._v(" "),s("p",[t._v("引入头文件")]),t._v(" "),s("p",[t._v("初始化")]),t._v(" "),s("p",[t._v("void OLED_Init()")]),t._v(" "),s("p",[t._v("void OLED_Clear()")]),t._v(" "),s("p",[t._v("显示字符串")]),t._v(" "),s("p",[t._v("一般给如参数是坐标和字模")]),t._v(" "),s("h3",{attrs:{id:"串口和定时器串口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#串口和定时器串口"}},[t._v("#")]),t._v(" 串口和定时器串口")]),t._v(" "),s("p",[t._v("函数：")]),t._v(" "),s("p",[t._v("发送有两种意识阻塞方式和非阻塞方式")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻塞")]),t._v("\nHAL_StatusTypeDef  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_UART_Transmit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UART_HandleTypeDef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("huart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint16_t")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非阻塞 要有回调函数")]),t._v("\nHAL_StatusTypeDef  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_UART_Transmit_IT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UART_HandleTypeDef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("huart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint16_t")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_UART_TxCpltCallBack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UART_HandleTypeDef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("huart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("huart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("Instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" USART1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 和定时器类似")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("接收也同样有两种")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻塞")]),t._v("\nHAL_StatusTypeDef  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_UART_Receive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UART_HandleTypeDef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("huart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint16_t")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非阻塞 要有回调函数")]),t._v("\nHAL_StatusTypeDef  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_UART_Receive_IT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UART_HandleTypeDef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("huart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint16_t")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HAL_UART_RxCpltCallBack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UART_HandleTypeDef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("huart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("huart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("Instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" USART1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 和定时器类似")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("远程接收使用非阻塞方式")]),t._v(" "),s("p",[t._v("可以用sizeof (uint8_t *pData) 确定数据的大小")])])}),[],!1,null,null,null);s.default=e.exports}}]);