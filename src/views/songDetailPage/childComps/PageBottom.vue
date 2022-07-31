<template>
    <div class="page-bottom">
        <div class="icon-list">
            <svg class="iconpark-icon"><use href="#like"></use></svg>
            <svg class="iconpark-icon"><use href="#download"></use></svg>
            <svg class="iconpark-icon"><use href="#message"></use></svg>
            <svg class="iconpark-icon"><use href="#more-one"></use></svg>
        </div>
        <div class="progress">
            <span>{{nowTime}}</span>
            <input type="range" min="0" :max="duration" step="0.02" v-model="currentTime">
            <span>{{allTime}}</span>
        </div>
        <div class="control-btn">
            <svg class="iconpark-icon"><use href="#loop-once"></use></svg>
            <svg class="iconpark-icon"><use href="#go-start" @click="backSong"></use></svg>
            <svg class="iconpark-icon playBtn" v-if="this.$store.state.isPlay" @click="play"><use href="#play"></use></svg>
            <svg class="iconpark-icon playBtn" v-else><use href="#pause-one" @click="play"></use></svg>
            <svg class="iconpark-icon" @click="nextSong"><use href="#go-end"></use></svg>
            <svg class="iconpark-icon"><use href="#music-list"></use></svg>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations} from 'vuex'
export default {
    props:["play"],
    methods:{
        ...mapMutations(["updateMusicListIndex"]),
        nextSong(){
            console.log(this.musicListIndex,this.musicList.length);
            if(this.musicListIndex==this.musicList.length-1){
                this.updateMusicListIndex(0)
            }else{
                    this.updateMusicListIndex(this.musicListIndex+1)
            }
        },
        backSong(){
            console.log(1);
            if(this.musicListIndex==0){
                this.updateMusicListIndex(this.musicList.length-1)
            }else{
                    this.updateMusicListIndex(this.musicListIndex-1)
            }
        }
    },
    computed:{
        ...mapState(["musicListIndex","musicList","duration","currentTime"]),
        nowTime(){
            let sec = this.currentTime.toFixed(0)
            let min = 0
            if(sec>59){
                sec = sec%60
                min +=1
                }
            sec<=9? sec='0'+sec : sec
            min<=9? min='0'+min : min
            let res = min + ':' + sec
            return res
        },
        allTime(){
            let sec = this.duration.toFixed(0)%60
            let min = (this.duration.toFixed(0)/60).toFixed(0)
            min<=9? min= '0' + min : min 
            sec<=9? sec= '0' + sec : sec
            let res = min + ':' + sec
            return res
        }
        
    }

}
</script>

<style lang="less" scoped>

.page-bottom{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    height: 3.3rem;
    .icon-list{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    .control-btn{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        .playBtn{
            width: 1rem;
            height: 1rem;
        }
    }

}
.progress{
    display: flex;
    align-items: center;
    justify-content: space-around;
    input {
        appearance: none;
        width: 63%;
        height: 0.06rem;
        -webkit-appearance: none;
       background-image: linear-gradient(to left bottom, #e4389a, #dd43aa,
        #d44eba, #c959c8, #bb63d5, #9e7beb, #7b8ef9,
         #559fff, #00baff, #00d3ff, #00e8ff, #5ffbf1);
    }
    input::-webkit-slider-thumb{
        appearance: none;
	    -webkit-appearance: none;
	    height: .35rem;
	    width: .35rem;
	    border-radius: 100%;
       border: .06rem solid whitesmoke;
       background: linear-gradient(to left bottom, #d16ba5, 
       #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
    }
    span {
        width: .8rem;
    }
}
.iconpark-icon{
    width: .6rem;
    height: .6rem;
}
</style>