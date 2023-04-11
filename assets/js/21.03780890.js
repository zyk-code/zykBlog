(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{477:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("1、yolov5 的依赖安装时有opencv的不需要重复安装\n2、cis摄像头和usb摄像头时有不同的调用视频流方式")]),s._v(" "),t("h3",{attrs:{id:"摄像头驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#摄像头驱动"}},[s._v("#")]),s._v(" 摄像头驱动")]),s._v(" "),t("p",[s._v("测试摄像头功能使用应用程序茄子（cheese）-- 可以拍照和拍视频")]),s._v(" "),t("p",[s._v("输入命令安装：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cheese\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("装好后，用命令：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("cheese\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("即可打开。")]),s._v(" "),t("h4",{attrs:{id:"cis摄像头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cis摄像头"}},[s._v("#")]),s._v(" cis摄像头")]),s._v(" "),t("p",[s._v("这是使用管道")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cv2\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置gstreamer管道参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("gstreamer_pipeline")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    capture_width"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1280")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#摄像头预捕获的图像宽度")]),s._v("\n    capture_height"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("720")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#摄像头预捕获的图像高度")]),s._v("\n    display_width"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1280")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#窗口显示的图像宽度")]),s._v("\n    display_height"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("720")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#窗口显示的图像高度")]),s._v("\n    framerate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#捕获帧率")]),s._v("\n    flip_method"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否旋转图像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nvarguscamerasrc ! "')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"video/x-raw(memory:NVMM), "')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width=(int)%d, height=(int)%d, "')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"format=(string)NV12, framerate=(fraction)%d/1 ! "')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nvvidconv flip-method=%d ! "')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"video/x-raw, width=(int)%d, height=(int)%d, format=(string)BGRx ! "')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"videoconvert ! "')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"video/x-raw, format=(string)BGR ! appsink"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            capture_width"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            capture_height"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            framerate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            flip_method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            display_width"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            display_height"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    capture_width "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1280")]),s._v("\n    capture_height "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("720")]),s._v("\n    display_width "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1280")]),s._v("\n    display_height "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("720")]),s._v("\n    framerate "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n    flip_method "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建管道")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gstreamer_pipeline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("capture_width"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("capture_height"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("display_width"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("display_height"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("framerate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("flip_method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#管道与视频流绑定")]),s._v("\n    cap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("VideoCapture"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gstreamer_pipeline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("flip_method"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CAP_GSTREAMER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isOpened"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        window_handle "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("namedWindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CSI Camera"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WINDOW_AUTOSIZE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 逐帧显示")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getWindowProperty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CSI Camera"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            ret_val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" img "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imshow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CSI Camera"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" img"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n            keyCode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("waitKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xFF")]),s._v("         \n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" keyCode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ESC键退出")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n \n        cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("release"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("destroyAllWindows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"打开摄像头失败"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br")])]),t("h4",{attrs:{id:"usb摄像头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usb摄像头"}},[s._v("#")]),s._v(" usb摄像头")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cv2\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n \n    cap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("VideoCapture"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要通过命令查看当前接入的摄像头列表，填入video—对应的号码 ")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isOpened"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        window_handle "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("namedWindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D435"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WINDOW_AUTOSIZE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 逐帧显示")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getWindowProperty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D435"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            ret_val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" img "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imshow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D435"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" img"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n            keyCode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("waitKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xFF")]),s._v("         \n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" keyCode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ESC键退出")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n \n        cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("release"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("destroyAllWindows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"打开摄像头失败"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);