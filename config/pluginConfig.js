module.exports = {
    '@vuepress/back-to-top' : true,
    '@vuepress/medium-zoom': true,
    '@vuepress/last-updated': {
        // lang 来自config中locales配置的中文，，默认英文
        transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale(lang)
            // http://momentjs.cn/  查看语法
            return moment(timestamp).fromNow()
          }
    }
}