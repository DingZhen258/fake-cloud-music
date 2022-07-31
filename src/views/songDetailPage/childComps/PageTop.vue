<template>
        <div class="detailTop"> 
            <!-- 点击触发vuex中的mutation -->
            <div class="top-left" @click="updateIsShowDetailPage">
                <svg class="iconpark-icon"><use href="#arrow-left"></use></svg>
            </div>
             <div class="left-marquee">
                    <Vue3Marquee>
                    <p>{{songList.name}}</p>
                    </Vue3Marquee>
                    <p>{{songList.ar[0].name}}</p>
                </div>
            <div class="top-right">
                <svg class="iconpark-icon"><use href="#share-one"></use></svg>
            </div>
        </div>
</template>

<script>
import { mapMutations} from 'vuex'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
    export default {
        props:['songList'],
        components:{
            Vue3Marquee
        },
        methods:{
            ...mapMutations(["updateIsShowDetailPage","updateIsPlay"])
        }
    }
</script>

<style lang="less" scoped>
.detailTop{
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: .2rem;
   width: 100%;
   height: 1.3rem;
    color: #fff;
   .left-marquee{
    width: 40%;
    text-align: center;
        p {
            margin-top: .12rem;
        }
   }
   .iconpark-icon{
    width: .5rem;
    height: .5rem;
   }
  

}
</style>