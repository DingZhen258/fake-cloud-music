<template>
    <div class="option-item">
        <div><slot name="item-icon"></slot></div>
        <div><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name:'optionItem'
    }
</script>

<style scoped>
.option-item{
    flex:1;
    height:49px;
    text-align: center;
    font-size:14px;
}
</style>