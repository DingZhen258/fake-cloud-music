<template>
    <div class="item_list">
        <!-- <div class="item_left"><slot name="leftIcon"></slot></div>
        <div class="content"><slot name="content"></slot></div>
        <div class="item_right"><slot name="rightIcon"></slot></div> -->
        <div class="item_left">
            <div class=""><slot name="index"></slot></div>
            <div class="content">
                <p><slot name="titleContent"></slot></p>
                <slot name="content"></slot>
            </div>
        </div>
        <div class="item_right"><slot name="rightIcon"></slot></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.item_list{
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #eee;
    padding: 0 .4rem;
    .item_left{
        display:flex;
        align-items: center;
        width: 70%;
        .content{
            flex:1;

        }
    }
}
</style>