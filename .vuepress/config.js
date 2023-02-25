module.exports = {
  base: '/zykBlog'
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
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github"
          }
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
    startYear: "2023"
  },
  "markdown": {
    "lineNumbers": true
  }
}