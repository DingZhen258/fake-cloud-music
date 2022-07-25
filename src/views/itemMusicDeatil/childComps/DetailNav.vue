<template>
    <!--歌单顶部导航栏  -->
    <div class="detail-nav">
        <Navbar class="topNav">
            <template v-slot:leftIcon>
                <svg class="iconpark-icon" @click="$router.go(-1)"><use href="#arrow-left"></use></svg>
            </template>
            <template v-slot:title>
                <div class="navCenter"> 
                    <span class="topTitle">歌单</span>
                    <svg class="iconpark-icon"><use href="#search"></use></svg>
                </div>
            </template>
            <template v-slot:rightIcon>
                <svg class="iconpark-icon"><use href="#hamburger-button"></use></svg>
            </template>
        </Navbar>
    </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue'
    export default {
        components:{
            Navbar
        }
    }
</script>

<style scoped>
/* 顶部栏 */
.topNav{
    background-color: rgb(0, 0, 0,0);
    box-shadow: none;
    color: #fff;
}
.navCenter{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .34rem;
    padding: 0 .2rem;
}
.iconpark-icon{
    width: .5rem;
    height: .5rem;
}
</style>