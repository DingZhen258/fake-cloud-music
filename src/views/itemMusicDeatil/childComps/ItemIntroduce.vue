<template>
    <!-- 歌单封面图以及标题用户信息 -->
    <div class="introduce">
        <img :src="playlist.coverImgUrl" alt="">
        <div class="right-content">
            <p>{{playlist.name}}</p>
            <span class="creator">
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
</template>

<script>
    export default {
        setup(props){
            props.playlist.creator=""

            return
        },
        components:{
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
.item-music-top{
}


/* 中部 */
.introduce{
    display: flex;
    justify-content: space-between;
    margin: .2rem;
}
.introduce img{
    width: 36%;
    border-radius: 15px;
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

</style>