<template>
  <div id="profile">
      <div class="id_card">
          <img src="@/assets/img/shushu.jpg" alt="">
          <h3>只因你太美</h3>
          <ul>
            <li>4关注</li>
            <li>3粉丝</li>
            <li>Lv.8</li>
          </ul>
      </div>
      <h1>欢迎你!</h1>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data(){
    return{
     
    }
  },
  components: {
  },
  methods:{
  
      }
      
}
</script>
<style lang="less" scoped>
#profile{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
.id_card{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 2.4rem;
  background-color: #eee;
  border-radius: .2rem;
  margin: .5rem 0;
  img{
    position: absolute;
    top: -0.3rem;
    left: 50%;
    margin-left: -.65rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 100%;
  }
  h3{
    margin: 1.1rem 0  .2rem 0;
    color: #000;
  }
  ul {
    display: flex;
    justify-content: space-around;
    width: 50%;
    color: rgb(115, 109, 109);
  }
  
}
</style>