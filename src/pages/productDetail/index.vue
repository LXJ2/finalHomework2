<template>
      <view class="goods">
    <image src="{{image}}"></image>
    <view>{{des}}</view>
    <van-goods-action class="GoodsAction">
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
        bind:click="onClickIcon"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        bind:click="onClickIcon"
      />
      <van-goods-action-button
        text="加入购物车"
        type="warning"
        bind:click="onClickButton"
        class="addCart"
      />
      <van-goods-action-button text="立即购买" bind:click="onClickButton" class="payNow"/>
    </van-goods-action>
  </view>
</template>
<script>
// @ is an alias to /src
import vanGoodAction from "../../../node_modules/@vant/weapp/dist/goods-action/index";
import vanGoodsActionIcon from "../../../node_modules/@vant/weapp/dist/goods-action-icon/index";
import vanGoodsActionButton from "../../../node_modules/@vant/weapp/dist/goods-action-button/index";
export default {
  name: "XXX",
  data:{
       img:'',
       des:''
  },
  /* props: {
            data: {
                img: String,
                des: String
            }
        }, */
  components: {
    vanGoodAction,
    vanGoodsActionIcon,
    vanGoodsActionButton,
  },
  onLoad:function (options) {
      
      console.log('onLoad执行了');
    this.setData({
      img:options.img,
      des:options.des
    })
    console.log(options);
    
  }, 
//   created(options) {
//       console.log(options)
//         }
};
</script>
<style lang="less">
.goods {
  .GoodsAction {
    display: flex;
    position:fixed;
    bottom:0;
    right: 0;
    left: 0;
    margin-bottom: -10px;
    .addCart,.payNow{
       
        
    }
  }
}
</style>