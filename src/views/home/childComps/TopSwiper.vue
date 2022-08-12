<template>
     <div id="top-swiper">
            <!-- 使用轮播组件 -->
            <van-swipe class="my-swipe" v-if="state.imgs!=''" :autoplay="3000" indicator-color="white" lazy-render>
                <van-swipe-item v-for="item in state.imgs" :key="item" >
                 <a :href="item.url">
                    <img :src="item.pic">
                 </a>
                </van-swipe-item>
            </van-swipe> 
            <Loading v-else/>
    </div>
</template>

<script>
import {getHomeData} from '@/network/home'
import Loading  from '@/components/common/loading/Loading.vue'
// Vue3的方法
import { reactive,onMounted } from 'vue'
    export default {
      setup(){
        const state = reactive({
            imgs:[],
        })
        // 渲染轮播图 请求数据
        onMounted(async ()=>{
            let res = await getHomeData()
            state.imgs=res.data.banners
        })
        return { state }
      },
      components:{
        Loading
      }
    }
</script>

<style scoped>
#top-swiper{
    padding:.2rem;
    width: 100%;
    height: 3.5rem;
}

#top-swiper img{
    width: 100%;
    height: 3rem;
    border-radius: .2rem;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
.van-swipe__indicator{
    background: black;
    color: black;
}
</style>