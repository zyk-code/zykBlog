module.exports = {
  // base: '/zykBlog/',  // 打包部署需要选定仓库名
  title: "zyk space",
  description: "",
  dest: "public",
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false, // 显示模式调节按钮，

    // header设置
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date"
      },
      {
        text: "app",
        link: "/app/"
      },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github"
          },
        ]
      }
    ],
    // 侧边栏
    sidebar: 'auto',
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类"
      },
      tag: {
        location: 3,
        text: "标签"
      }
    },
    
    logo: "/logo.png",
    search: false,    // 不开启搜索
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "zyk",
    authorAvatar: "/user.png",
    // "record": "zyk",
    startYear: "2023",

    // 加密登录页面
    // keyPage: {
    //   keys: ['E39DA5D05566A954B91FF2CB17CB1BB7'], // 设置密文 zyk1999
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983' // 登录页动画线的颜色
    // },

  },
  "markdown": {
    "lineNumbers": true
  }
}