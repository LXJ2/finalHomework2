<template>
  <view class="user">
    <view class="userId">
      
      <image class="userI" src="https://files.xiami.com/musician-avatar/07d8ec1a38a5462c3afbfac41413b8af/7d7dfeddc1c375a88e4bb4ee06c99c9e-200x200.png"></image>
      <view class="login">请登录</view>
    </view>
    
    <view class="userInfo">
      <view class="info" v-for="(item,i) in infoList" :key="i">
        <image class="icon" src="https://files.xiami.com/musician-avatar/07d8ec1a38a5462c3afbfac41413b8af/e2950c4c188859a92f12c5f598ab748b-200x200.png"></image>
        <view>{{item.titil}}</view>
        <image class="arrow" src="https://files.xiami.com/musician-avatar/07d8ec1a38a5462c3afbfac41413b8af/3fba50d81d99e410aa53d34264128e53-200x200.png" ></image>
        
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      infoList: [
        {
          id: 1,
          icon: "https://files.xiami.com/musician-avatar/07d8ec1a38a5462c3afbfac41413b8af/e2950c4c188859a92f12c5f598ab748b-200x200.png",
          titil: "退款/售后",
        },
        {
          id: 1,
          icon: "https://files.xiami.com/musician-avatar/07d8ec1a38a5462c3afbfac41413b8af/e2950c4c188859a92f12c5f598ab748b-200x200.png",
          titil: "退款/售后",
        },
        {
          id: 1,
          icon: "https://files.xiami.com/musician-avatar/07d8ec1a38a5462c3afbfac41413b8af/e2950c4c188859a92f12c5f598ab748b-200x200.png",
          titil: "退款/售后",
        },
        {
          id: 1,
          icon: "https://files.xiami.com/musician-avatar/07d8ec1a38a5462c3afbfac41413b8af/e2950c4c188859a92f12c5f598ab748b-200x200.png",
          titil: "退款/售后",
        },
        {
          id: 1,
          icon: "https://files.xiami.com/musician-avatar/07d8ec1a38a5462c3afbfac41413b8af/e2950c4c188859a92f12c5f598ab748b-200x200.png",
          titil: "退款/售后",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.user {
  .userId {
      display: flex;
      align-items: center;
    background-color: #845d32;
    width: 100%;
    height: 80px;
    .userI{
        width: 40px;
        height: 40px;
    }
    .login {
      display: flex;
      background-color: #BDBDBD;
      border-radius: 5px;
      width: 50px;
      height: 20px;
    }
  }
  .userInfo{
      
      .info{
         display: flex;
         width: 100%;
         height:40px;
         align-items: center;
         padding: 10px;
         font-size: 15px;
         border-bottom: 1px solid grey;
         .icon{
             height: 30px;
             width: 25px;
             margin: 5px ;

         }
         .arrow{
             margin: 12px 5px 5px 180px;
             height: 20px;
             width: 20px;
             float: right;
         }
         
      }
  }
}
</style>