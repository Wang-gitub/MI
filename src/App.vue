<template>
  <div id="app">
    <van-tabbar v-model="active">
        <van-tabbar-item icon="van-icon van-icon-wap-home-o" :to="{ name: 'home' }">首页</van-tabbar-item>
        <van-tabbar-item icon="van-icon van-icon-qr" :to="{ name: 'hot' }">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" :to="{ name: 'fav' }">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" :to="{ name: 'user' }">我的</van-tabbar-item>

    </van-tabbar>
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0
    }
  },
  mounted:function(){
    this.rems.text();
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #285683;
}

</style>
