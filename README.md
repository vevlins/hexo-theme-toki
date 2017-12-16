# toki
hexo-theme-toki主题

##todo：
    满足自定义配置，如评论方案的选取；修改ie内核search和页脚显示的兼容问题
## 一款简单素雅的博客主题
[Demo页面](http://vevlins.github.io)
![](http://ozc9m7ly1.bkt.clouddn.com/2.png)

风格简约，功能不少！  
+ 归档
+ 标签、分类汇总
+ 站内搜索 (基于[hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content))
+ 评论(基于[gitment](https://github.com/imsun/gitment))
+ 关于页面
+ 版权声明

## 安装说明

+ 安装 hexo-theme-toki到themes文件夹
    ``` bash
        git clone git@github.com:Vevlins/hexo-theme-toki.git
    ```
+ 安装 [hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content)
    ``` bash
        npm i -S hexo-generator-json-content
    ```
    并且在站点config下添加配置
    ``` yml
    jsonContent:
        meta: false
        pages: false
        posts:
            title: true
            date: true
            path: true
            text: true
            raw: false
            content: false
            slug: false
            updated: false
            comments: false
            link: false
            permalink: false
            excerpt: false
            categories: false
            tags: false
    ```
+ 关闭hexo自带代码高亮
    ``` yml
    highlight:
        enable: false
    ```
+ 配置选项,具体见主题内config文件。包括gitment所需要的信息。
+ 如需要about页面，必须执行 `hexo new page` 并将layout指定为about。分类汇总`category_archive`和标签汇总`category_archive`也需要执行同样的操作。
+ 版权声明默认为原创声明，如需要转载声明，需要在文章md文件内添加Front-matter如下：
    ``` yml
    citation:
        author: dillinger
        link: https://dillinger.io
    ```