<template>
    <div class="small_list" v-show="$store.state.isShowSmallSongList">
        <div class="top">
            <h3>正在播放</h3>
            <svg @click="isShow" class="iconpark-icon"><use href="#plus"></use></svg>
        </div>
        <div class="item" v-for="(item,index) in $store.state.musicList" :key="item" >
            <span>{{index+1}}</span>
            <p :class="{acitve:$store.state.playingIndex==index}">{{item.name}}</p>
        </div>
    </div>

</template>

<script>
    export default {
       methods:{
            isShow(){
                this.$store.commit('udateIsShowSmallSongList')
            }
       }
    }
</script>

<style lang="less" scoped>
.small_list{
    position: absolute;
    bottom: 1.2rem;
    right: 0;
    padding: .2rem;
    width: 200px;
    height: 300px;
    border-radius: .2rem;
    background-color: #eee;
    z-index: 80;
    overflow: scroll;
}
.top{
    display: flex;
    justify-content: space-between;
}
.item{  
    display: flex;
    height: .5rem;
    line-height: .5rem;
    border-bottom: 1px solid rgb(117, 114, 114);
    span{
        width: .3rem;
        text-align: center;
        margin-right: .2rem;
    }
    p{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
}
.acitve{
    color: rgb(225, 45, 45);

}
</style>