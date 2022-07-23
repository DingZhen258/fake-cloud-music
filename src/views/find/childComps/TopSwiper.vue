<template>
     <div class="top-swiper">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="item in items" :key="item" >
                 {{item}}
                </van-swipe-item>
            </van-swipe> 
    </div>
</template>

<script>
    export default {
        props:{
            items:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.top-swiper{
    width: 100%;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>