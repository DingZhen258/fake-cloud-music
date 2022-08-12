<template>
    <!-- 歌单封面图以及标题用户信息 -->
    <div class="introduce"> 
        <div class="content" v-if="playlist!=''">
            <div class="item-img">
                <img :src="playlist.coverImgUrl"/>
                <span class="playCount">
                    <svg class="iconpark-icon"><use href="#play-one"></use></svg>
                    {{$myFun.changeCount(playlist.playCount)}}
                </span>
            </div>
            <div class="right-content">
                <p>{{playlist.name}}</p>
                <span class="creator"  v-if="playlist!=''">
                    <img :src="playlist.creator.avatarUrl" alt=""/>
                    <p>{{playlist.creator.nickname}}</p>
                    <svg class="iconpark-icon"><use href="#right"></use></svg>  
                </span>
                <p class="about">
                    <span>{{playlist.description}}</span>
                    <svg class="iconpark-icon"><use href="#right"></use></svg>
                </p>
            </div>
        </div>
        <Loading v-else/>
    </div>
</template>

<script>
import Loading from '@/components/common/loading/Loading.vue';

    export default {
        components:{
            Loading,
        },
        props:{
            playlist:{
                type:Object,
                default(){
                    return []
                }
            }
        }

    }
</script>

<style  scoped>
.introduce{
    height: 2.7rem;
    width: 100%;
}
/* 中部 */
.content{
    display: flex;
    justify-content: space-between;
    margin: .3rem .2rem;
}
.item-img{
    position: relative;
    width: 36%;
}
.item-img img{
    width:100%;
    border-radius: 15px;
}
.playCount {
    position: absolute;
    display: flex;
    align-items: center;
    top: .1rem;
    right:.1rem;
    height: .5rem;
    padding: 0.06rem;
    text-align: center;
    border: 1px solid #ccc;
    background-color:rgb(0, 0, 0,.4);
    border-radius: .2rem;
    font-size: .2rem;
    color: white;
    z-index: 33;
}
.right-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 4rem;
    color: #fff;
    font-weight: 700;
}
.creator{
    display: flex;
    align-items: center;
    color: #ccc;
}
.creator img {
    width: .5rem;
    border-radius: 50%;
    margin-right: .15rem;
}
.about{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.about span{
    display: inline-block;
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 0.24rem;
    color: #ccc;
}
.iconpark-icon{
    width: .3rem;
}

</style>