<template>
        <Navbar class="search_bar">
            <template v-slot:leftIcon>
                <svg class="iconpark-icon" @click="$router.go(-1)"><use href="#arrow-left"></use></svg>
            </template>
            <template v-slot:title>
                <div class="input_frame">
                    <svg class="iconpark-icon"><use href="#search"></use></svg>
                    <input type="text" placeholder="陈奕迅~" v-model="searchKey">
                </div>
            </template>
            <template v-slot:rightIcon >
                <p @click="enterKey">搜索</p>
            </template>
        </Navbar>
        <div class="searchHistory">
            <div class="title">
                <h3>历史</h3> 
                <svg class="iconpark-icon" @click="removeHistory"><use href="#delete"></use></svg>
            </div>
            <span v-for="item in keyWordList" :key="item" @click="clickHistory(item)">
                {{item}}
            </span>
        </div>
        <div class="searchList">
            <div class="item" v-for="(item) in searchList" :key="item" @click="playcurrent(item)">
                <div class="item-left">
                    <h3>{{item.name}}</h3>
                    <span>{{item.ar[0].name}}-{{item.al.name}}</span>
                </div>
                <div class="item-right">
                    <svg class="iconpark-icon" v-if='item.mv !=0'><use href="#play-two"></use></svg>
                    <svg class="iconpark-icon"><use href="#more-one"></use></svg>
                </div>
            </div>    
        </div>
</template>

<script>
import {getSearchRes} from '@/network/search'

import Navbar from '@/components/common/navbar/Navbar.vue'

import {mapMutations} from 'vuex'
    export default {
        data(){
            return {
                keyWordList:[],
                searchKey:"",
                searchList:[]
            }
        },
        components:{
            Navbar,
        },
        methods:{
            ...mapMutations(["pushMusicList","updateMusicListIndex"]),
            enterKey(){
                if(this.searchKey != ""){
                    this.keyWordList.unshift(this.searchKey)
                    // 去重
                    this.keyWordList = [...new Set(this.keyWordList)]
                    // 限制长度
                    if(this.keyWordList.length>7){
                        // this.keyWordList.splice(this.keyWordList.length-1)
                         this.keyWordList.pop()
                    }
                     // 将记录存储到local
                    localStorage.setItem("keyWordList",JSON.stringify(this.keyWordList))
                    // 拿到搜索结果
                    this.requsetRes()
                }
            },
            removeHistory(){
                localStorage.removeItem("keyWordList")
                this.keyWordList=[]
            },
            // 请求搜索结果
            requsetRes(){
                 getSearchRes(this.searchKey).then(res=>{
                    this.searchList = res.data.result.songs;
                    console.log(this.searchList);
                })
            },
            // 点击历史请求搜索结果
            clickHistory(item){
                getSearchRes(item).then(res=>{
                    this.searchList = res.data.result.songs;
                })
            },
            playcurrent(item){
                this.pushMusicList(item)
                console.log(item);
                this.updateMusicListIndex(this.$store.state.musicList.length-1)
            }
        },
        mounted(){
            // 渲染就加载本地的数据赋值
            this.keyWordList=JSON.parse(localStorage.getItem('keyWordList')) || []
        }
    }
</script>

<style lang="less" scoped>
.search_bar{
    align-items: center;
    width: 100%;
    height: 1rem;
    background: #fff;
    .input_frame {
        position: relative;
        flex: 1;
        display:flex;
        align-items: center;
        height:.65rem;
        border-radius: .4rem;
        background-color: #eee;
        input{
            height: 100%;
            background-color: #eee;
            border: none;
        }
        .iconpark-icon{
            width: .4rem;
            height: .4rem;
            margin: .2rem;
        }
    }
}
.searchHistory{
    margin: .35rem;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span {
        display: inline-block;
        height: .5rem;
        padding: 0 .3rem;
        margin: .2rem .1rem .1rem 0;
        line-height: .5rem;
        background-color: #eee;
        border-radius: .6rem;
    }
}
.searchList{

    border-radius: .2rem;
}
.item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .3rem;
    height: 1.2rem;
    border-bottom: 1px solid #eee;
    .item-left{
        flex: 1;        
    }
    span{
        font-size: .2rem;
        margin-right: .1rem;
        overflow: hidden;
         text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    h3 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        margin-bottom: .1rem;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .iconpark-icon{
        width: .6rem;
        height: .6rem;    
    }
    
}
</style>