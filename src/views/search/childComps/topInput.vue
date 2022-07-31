<template>
        <!-- <svg class="iconpark-icon"><use href="#arrow-left"></use></svg>
        <input type="text"> -->
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
                <span @click="enterKey">搜素</span>
            </template>
        </Navbar>
        <div class="searchHistory">
            <div class="title">
                <h3>历史</h3> 
                <svg class="iconpark-icon" @click="removeHistory"><use href="#delete"></use></svg>
            </div>
            <span v-for="item in keyWordList" :key="item">
                {{item}}
            </span>
        </div>
</template>

<script>
import {getSearchRes} from '@/network/search'

import Navbar from '@/components/common/navbar/Navbar.vue'
    export default {
        data(){
            return {
                keyWordList:[],
                searchKey:""
            }
        },
        components:{
            Navbar
        },
        methods:{
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
            requsetRes(){
                getSearchRes(this.searchKey).then(res=>{
                    console.log(res);
                })
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
</style>