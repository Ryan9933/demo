# 高级开发篇默认页面

```js
themeConfig: {
    nav: [
        { text: '主页', link: '/' },
        { 
            text: '技术',
            items: [
                { text: '车商通', link: '/cst/' },
                { text: '新框架', link: '/new/' }
            ]
        }
      ],
    sidebar: {
        '/cst/': [
            ['', '车商通'],
            ['draft', '草稿箱'],
            ['esc', '二手车']
        ],
        '/new/': [
            ['', '发布新框架'],
            ['local/entry.md', '本地开发'],
            ['feedback/feedback.md', '问题反馈']
        ]
    }
}
```