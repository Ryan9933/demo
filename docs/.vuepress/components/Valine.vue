<template>
<!-- <div> -->
    <div id="vcomments"></div>
    <!-- id 将作为查询条件 -->
    <!-- <span :id="page.path" class="leancloud_visitors" :data-flag-title="page.title">
        <em class="post-meta-item-text">👀：</em>
        <i class="leancloud-visitors-count"></i>
    </span> -->
    <!-- </div> -->
</template>

<script>
const secretKey = require("../../../config/secretKeyConfig")
export default {
    name: 'Valine',
    // 访问量
    // computed : {
    //   page: function(){
    //     let { path, title} = this.$page
    //     console.log(path + "--" + title);
    //     console.log(this);
    //     return {path, title}
    //   }
    // },
     mounted: function(){
        // require window 
        const Valine = require('valine');
        if (typeof window !== 'undefined') {
          this.window = window
          window.AV = require('leancloud-storage')
        }
        new Valine({
          el: '#vcomments' ,
          appId: secretKey.appId,// your appId
          appKey: secretKey.appKey, // your appKey
          avatar:'retro', //头像
          // visitor: true,//访问计数
          placeholder: '记得留下你的邮箱哦！' ,
        })
        
      }
}
</script>
