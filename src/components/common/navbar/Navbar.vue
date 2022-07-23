<template>
    <div class="nav-bar">
        <div class="left"><slot name="leftIcon"></slot></div>
        <div class="center"><slot name="title"></slot></div>
        <div class="right"><slot name="rightIcon"></slot></div>
     </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .nav-bar {
    display: flex;
    height: .88rem;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 1.2rem;
    height: .88rem;
   
  }

  .center {
    display: flex;
    flex: 1;
    justify-content: space-around;
  }
</style>