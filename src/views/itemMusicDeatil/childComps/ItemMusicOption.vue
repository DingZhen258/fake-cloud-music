<template>
    <!-- 功能选项模块 -->
    <div class="item-music-option">
        <OptionBlock>
            <OptionItem>
                <template v-slot:item-icon><svg class="iconpark-icon"><use href="#message"></use></svg></template>
                <!-- 评论条数 -->
                <template v-slot:item-text>{{$myFun.changeCount(playlist.commentCount)}}</template>
            </OptionItem>
            <OptionItem>
                <template v-slot:item-icon><svg class="iconpark-icon"><use href="#share-one"></use></svg></template>
                <!-- 分享次数 -->
                <template v-slot:item-text>{{$myFun.changeCount(playlist.shareCount)}}</template>
            </OptionItem>
            <OptionItem>
                <template v-slot:item-icon><svg class="iconpark-icon"><use href="#download"></use></svg></template>
                <template v-slot:item-text>下载</template>
            </OptionItem>
            <OptionItem>
                <template v-slot:item-icon><svg class="iconpark-icon"><use href="#check-one"></use></svg></template>
                <template v-slot:item-text>多选</template>
            </OptionItem>
        </OptionBlock>
    </div>
</template>

<script>
import OptionBlock from '@/components/common/optionItem/OptionBlock.vue'
import OptionItem from '@/components/common/optionItem/OptionItem.vue'
    export default {
        props:{
            playlist:{
                type:Object,
                default(){
                    return []
                }
            }
        },
        components:{
            OptionBlock,
            OptionItem
        }
    }
</script>

<style scoped>
.item-music-option{
    margin-top: .4rem;
    color: white;
    margin-bottom:.5rem ;
    height: 1.2rem;

}
.iconpark-icon{
    width: .6rem;
    height: .6rem;
    margin-bottom: .15rem;
}
</style>