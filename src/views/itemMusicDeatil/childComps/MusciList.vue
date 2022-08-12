<template>
    <div class="music-list" v-if="musiclist!=''">
        <van-sticky :offset-top="43">
            <div class="music-list-top">
                <div class="list-left" @click="starplay(0)">
                    <svg class="iconpark-icon"><use href="#play"></use></svg>
                    <div>播放全部<span>(共{{musiclist.length}}首)</span></div>
                </div>
                <div class="list-right">
                    <svg class="iconpark-icon"><use href="#plus"></use></svg>
                    <span>收藏({{$myFun.changeCount(subsCount)}})</span>
                 </div>
            </div>
        </van-sticky>
        <div class="music-list-item" >
            <div class="item" v-for="(item,index) in musiclist" :key="index">
                <div class="item-left"  @click="starplay(index)">
                    <span class="index">{{index+1}}</span>
                    <div class="song">
                        <h4 :class="{playing:$store.state.playingIndex==index}">{{item.name}}</h4>
                        <span v-for="(item1, index) in item.ar" :key="index">{{item1.name}}</span>
                    </div>
                </div>
                <div class="item-right">
                    <svg class="iconpark-icon" v-if='item.mv !=0'><use href="#play-two"></use></svg>
                    <svg class="iconpark-icon"><use href="#hamburger-button"></use></svg>
                </div>
            </div>
        </div>
    </div>
    <Loading v-else class="loading"/>
</template>

<script>
import { useRoute } from "vue-router"
import { useStore } from "vuex"

import Loading  from '@/components/common/loading/Loading.vue'
    export default {
        setup(props){
            const store = useStore()
            let currentId = useRoute().query.id
            let flag = true 
            function starplay(index){
                // 点击事件发生后用当前歌单列表替换vuex中的的列表
                if(flag){
                    flag = false
                    store.commit("updateMusicList", props.musiclist)
                }
                // 如果当前歌单id与所选state中保存的歌单id一致就不更新歌单
                currentId==store.state.musicSheetId? '' : flag=true
                // 点击事件获得当前歌曲索引 添加到vuex中
                store.commit("updateMusicListIndex", index)
                store.commit("updatePlayingIndex",index)
                
            }
            return {starplay,store}
        },
        props:['musiclist','subsCount'],
            // 接收歌单列表
        watch:{
            // 当歌单改变 将播放效果重置
            musiclist(){
                this.$store.commit('updatePlayingIndex',-1)
            }
        },
        components:{
            Loading,
        }
    }
</script>

<style lang="less" scoped>
.music-list{
    width: 100%;
    background: #fff;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    margin-bottom: 1.3rem;
}
.music-list-top{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
    width: 100%;
    height: 1rem;
    background: #fff;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-bottom: 1px solid #eee;
}
.list-left{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 2.8rem;
    height: 100%;
    font-weight: 700;
    span{
    font-weight: 400;
    font-size: 0.24rem;
    color: #999;
    }   
}
.list-right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .1rem;
    height: 100%;
    background-color: rgba(197, 46, 46);
    color: #fff;
    border-radius: .4rem;
}
.item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
    height: 1.2rem;
}
.item-left{
    display:flex;
    align-items: center;
    width: 80%;
    .index{
        width: 30px;
    }
}
.song{
    margin-left: .25rem;
    span{
    font-size: .2rem;
    margin-right: .1rem;
    }
    h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    }
}
.item-right{
    display: flex;
    :last-child{
        margin-left:.2rem;
    }
}
.playing{
    color: red;
}
.loading{
    margin-top: 2.5rem;
}
</style>