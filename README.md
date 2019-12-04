注：**已经配好首页路由，Home->首页、Hot->分类、Fav->购物车、User->我的**

1. 用rem单位，已在全局引用js(px转换rem, common下的rem.js 文件)。用时需在script的export default加入以下代码：
 ```js
    mounted:function(){
        this.rems.text();
    }
 ```

 2. 已全局引入css重置样式(public下的reset.css文件)。
 
 3. Vant插件的样式修改需在全局修改，已引入全局样式assets下的resetVui.css文件，在此文件中用vant组件原类名可修改vant样式。(修改时注释上修改的是哪个文件)。