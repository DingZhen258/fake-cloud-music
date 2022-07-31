<template>
    <div class="page-content" @click="isShow">
    <!-- 虚拟唱片机 -->
        <div class="picture" v-show="show">
            <img class="needle_img" :class="{needle_img_active:!isPlay}" src="@/assets/img/needle-ab.png" alt="">
            <img class="cd_img" src="@/assets/img/cd.png" alt="">
            <img class="ar_img" 
            :class="{ar_img_active:!isPlay,
            ar_img_unactive:isPlay}" 
            :src="songList.al.picUrl" alt="">
        </div>
        <!-- 歌词 -->
        <div class="lyric-list" v-show="!show"  ref="lyriclist">
            <p v-for="item in lyric"  :key="item" 
            :class="{lyric_avtive:currentTimeMs >= item.time && currentTimeMs<item.pre}">
                {{item.lrc}}
            </p>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations} from 'vuex'
export default {
    props:['songList'],
    data(){
        return{
            show:true,
        }
    },
    methods:{
        // 判断显示歌词还是唱片
        isShow(){
            this.show= !this.show
        },
        ...mapMutations(["updateCurrentLyricIndex"])
    },
    computed:{
        ...mapState(["lyricList","isPlay","currentTime","currentLyricIndex"]),
        lyric(){
            // 分解歌词 返回一个数组
            let arr = []
            let time =null
            // 如果歌词不为空则进行分解
            if(this.lyricList.lyric){
                arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item,index)=>{
                    let min = item.slice(1, 3);
                    let sec = item.slice(4, 6);
                    let mill = item.slice(7, 10);
                    let lrc = item.slice(11, item.length);  
                    time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
                    if (isNaN(Number(mill))) {
                        mill = item.slice(7, 9);
                        lrc = item.slice(10, item.length);
                        time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
                    }
                    return {min,sec,mill,lrc,time}
                    })
                arr.forEach((item,index)=>{
                // 如果此时是最后一个元素 当前时间pre清0
                    if(index==arr.length-1){
                        item.pre = 0
                    }
                    else{
                        // 获取当前时间节点
                        item.pre=arr[index+1].time
                        // 判断 如果audio的时间在此区间 就更新vuex中的歌词index
                        if(this.currentTimeMs>item.time && this.currentTimeMs<item.pre){ 
                            this.updateCurrentLyricIndex(index)
                        }   
                    }    
                })
            }
            return arr
        },
        // 将audio当前时间转化为毫秒单位
        currentTimeMs(){
            return this.currentTime*1000
        },
    },
    watch:{
        // 监听歌词下标
        currentLyricIndex(){
            // 如果下标大于6 就让父组件每次多滚动一行的距离
            if(this.currentLyricIndex>6){
                this.$refs.lyriclist.scrollTop += 27.6
            }
        }

    }
 }
   
</script>

<style lang="less" scoped>
.page-content{
    width: 100%;
    height: 8.3rem;
    text-align: center;
    .lyric-list{
        width: 100%;
        height: 100%;
        overflow: scroll;
        p{
            margin-bottom: .3rem;
            color: rgb(205, 197, 197);
        }
        .lyric_avtive{
            color: #fff;
            font-size: .48rem;
        }
    }
}
.picture{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    .needle_img {
        width: 2rem;
        height: 3rem;
        position: absolute;
        left: 46%;
        transform-origin: 0 0;
        transform: rotate(-18deg);
        transition: all 2s;
        z-index: 2;

    }
    .needle_img_active {
        width: 2rem;
        height: 3rem;
        position: absolute;
        left: 46%;
        transform-origin: 0 0;
        transform: rotate(-5deg);
        transition: all 2s;
    }
    .cd_img {
        width: 6rem;
        height: 6rem;
        position: absolute;
        bottom: 1.2rem;
        z-index: -1;
    }
    .ar_img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        position: absolute;
        bottom: 2.2rem;
        animation: ar_roll 15s linear infinite;
    }
    .ar_img_active{
        animation-play-state: running;
    }
    .ar_img_unactive{
        animation-play-state: paused;
    }
    @keyframes ar_roll {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
}
</style>