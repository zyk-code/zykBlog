---
title: vuepress搭建blog记录
date: 2023/3/22
tags:
  - vuepress
  - vue
categories: web
---

### 学习记录

   config.js            # 整个项目的配置文件
   根目录下的README.md   # 页面主入口,可以写vue js

   1、md文件模板
   ---
   title: vuepress搭建blog记录
   tags:
   - vuepress
   - vue
      categories:
   -  web
---

### 部署记录

 1、在.vuepress文件中配置config.js
    base = '/仓库名/'   # 注意前后要跟/,不跟后面/ 打包后的文件引用资源路径会出错导致无法渲染

 2、打包
    npm run build
    完成后会生成public文件夹

 3、添加 deploy.sh在项目的根目录下(部署文件)
    然后在cmd 运行 set -e  # 抛出异常即是完成

 4、推送到自定义分支上
    # 进入public文件夹
    cd ./public
    
```powershell
# git 操作
git init
git add -A
git commit -m '--first commit'
git push -f git@github.com:用户名/仓库地址.git master:
自定义分支名字
```
主分支： git push -f git@github.com:zyk-code/zykBlog.git 
gh-pages

 5、部署
    进入仓库的setting，选择pages选项
    可以看到Source和Branch
    在Branch中选中自定义的分支
    最后save

```powershell
若部署成功可在该页面有visit site选项在右上角
或访问 https://用户名.github.io/仓库 成功
```
###  模板

```vue
title: 
date:
tags:
categorie：
```

### 公式插件

1、安装插件markdown-it markdown-it-mathjax3

```shell
npm install markdown-it markdown-it-mathjax3
```

2、配置插件（在.vuepress/config.js下）

```javascript
extendMarkdown(md) {
    md.use(require('markdown-it-mathjax3'))
    md.linkify.set({ fuzzyEmail: false })
  },
```

### vscode配置代码段自动生成bloghead
1、在设置中打开代码段，创建新的代码段如下
```json
	"Print blog meta": {
		"prefix": "blogMeta",
		"body": [
			"---",
			"title: ${1:$TM_FILENAME_BASE}",
			"date: $CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
			"author: ${2:admin}",
			"tags:",
			"  - $3",
			"---",
			"\r"
		],
		"description": "生成博客元信息"
	}
```

2、配置markdown的代码段（因默认是不开启的）
ctl+shift+p 打开搜索setting.json文件添加以下配置项
```json
 "[markdown]":{
        "editor.quickSuggestions": true
    },

```

3、创建md文件后可以使用blogMate即可生成文件头部

### 目录分级管理
