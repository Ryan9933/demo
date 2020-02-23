module.exports = {
    title: '心情贩卖机',
    description: 'vuepress,java,个人,博客,心情贩卖机',
    locales: {
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },
    plugins: require("../../config/pluginConfig"),
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { charset: "utf-8", src: "/js/click_heart.js" }],
        ["script", { charset: "utf-8", src: "https://cdn.jsdelivr.net/npm/typed.js@2.0.11" }],
    ],
    themeConfig: {
        lastUpdated: '上次更新',
        nav: require("./nav"),
        sidebar: require("./sidebar"),
        // sidebar: {
        //     '/guide/': getGuideSidebar('懵逼指南', '还没想好')
        // }


    },

}

function getGuideSidebar(groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'getting-started',
                'directory-structure',
                'basic-config',
                'assets',
                'markdown',
                'using-vue',
                'i18n',
                'deploy'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'frontmatter',
                'permalinks',
                'markdown-slot',
                'global-computed'
            ]
        }

    ]
}