<template>
    <div id="music-player" v-show="isShowPlayer">
        <div class="player-left" @click="updateIsShowDetailPage">
            <img :src="musicList[musicListIndex].al.picUrl" alt="">
            <div class="song-name">
                {{musicList[musicListIndex].name}}
                <span v-for="item in musicList[musicListIndex].ar" :key="item">
                -{{item.name}}
                </span>
            </div>
        </div>
        <div class="player-right">
            <svg v-if="isPlay" class="iconpark-icon"><use href="#play" @click="play"></use></svg>
            <svg v-else class="iconpark-icon"><use href="#pause-one" @click="play"></use></svg>
            <svg class="iconpark-icon" @click="udateIsShowSmallSongList"><use href="#music-list"></use></svg>
        </div>
        <audio @ended="playNext" @timeupdate="commitCurrentTime" @durationchange="addDuration"
        ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${musicList[musicListIndex].id}.mp3`"></audio>
        <SmallSongList/>
    </div>
    <van-popup v-model:show="isShowDetailPage"
    :close-on-click-overlay="false" 
    position="bottom" :style="{ height: '100%' }">
        <SongDetailPage :songList='musicList[musicListIndex]' :play="play"  />
    </van-popup>
    
</template>
<script>
import SongDetailPage from '@/views/songDetailPage/SongDetailPage'
import SmallSongList from './SmallSongList'
import { mapState,mapMutations} from 'vuex'
    export default {
        components:{
            SongDetailPage,
            SmallSongList
        },
        computed:{
            ...mapState(["musicList", "musicListIndex","isShowDetailPage","isPlay","currentTime","isShowPlayer"]),
        },
        methods:{
            play(){
                if (this.$refs.audio.paused) {
                        this.$refs.audio.play();
                        this.updateIsPlay(false);
                }else if (this.musicListIndex==0 &&this.$refs.audio.paused){
                        this.$refs.audio.play();
                        this.updateIsPlay(false);
                }else {
                        this.$refs.audio.pause();
                        this.updateIsPlay(true);
                }
            },
            // 自动播放下一首
            playNext(){
                if(this.musicListIndex==this.musicList.length-1){
                    this.updateMusicListIndex(0)
                }else{
                     this.updateMusicListIndex(this.musicListIndex+1)
                }
            },
            addDuration(){
                this.updateduration(this.$refs.audio.duration)
            },
            // audio自带的事件 将当前时间提交
            commitCurrentTime(){
                    this.updateCurrentTime(this.$refs.audio.currentTime)
                console.log(this.$store.state.currentTime);

            },
            ...mapMutations([
                "updateIsShowDetailPage",
                "updateIsPlay",
                "updateCurrentTime",
                "updateMusicListIndex",
                "updateduration",
                "udateIsShowSmallSongList"])
        },
        watch:{
            // 监听歌曲下标当下标发生变化时自动播放
            musicListIndex(){
               this.$refs.audio.autoplay = true;
                if (this.$refs.audio.paused) {
                this.updateIsPlay(false)
                }
            },
            // 首次点击会触发
            musicList(){
                this.$refs.audio.autoplay = true;
                this.updateIsPlay(false)
            },
        },
        updated(){
            // 当数据更新会将新歌曲的id提交至vuex
            this.$store.dispatch('getCurrentLyric',this.musicList[this.musicListIndex].id)
        },

    }
</script>

<style lang="less" scoped>
#music-player{
    position: fixed;
    bottom: 0;
    display: flex;
    height: 1.3rem;
    width: 100%;
    background: white;
    box-shadow: 0 -1px 1px rgba(100,100,100,.4);
    justify-content: space-between;
    z-index: 10;
}
.player-left{
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    img{
        margin: 0 .3rem 0 .2rem ;
        width: .9rem;
        height: .9rem;
        border-radius: 100%;
    }
    .song-name{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: .36rem;
        span{
            font-size: .26rem;
        }
    }
}
.player-right{
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-around;
    .iconpark-icon{
        width: .7rem;
        height: .7rem;
    }
}

</style>