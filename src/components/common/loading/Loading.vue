<template>
      <van-loading class="loading"
        type="spinner"
        :color="color"
        text-size="22"
        >
         loading...
        </van-loading>
</template>

<script>
    export default {
        name:"loading",
        props:{
            color:{
                type:String,
                default:'#ccc'
            }
        }
    }
</script>
<style  scoped>
.loading{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>