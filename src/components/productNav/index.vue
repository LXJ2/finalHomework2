<template>
    <view class="productNav">
        <image :src="data.banner" alt="" mode="widthFix" />
        <view v-for="(item, i) in data.children" :key="i">
            <view>{{ item.name }}</view>
            <van-grid column-num="3">
                <!-- <navigator 
                url="../../components/productDetail/index?des={{child.smallImgCard.name}}&img={{child.smallImgCard.img}}" 
                v-for="(child, index) in item.children" :key="index"
                > -->
                <van-grid-item
                    use-slot
                    v-for="(child, index) in item.children" :key="index"
                    
                >
                    
                    <image
                        style="width: 100%"
                        :src="child.smallImgCard.img"
                        alt=""
                        mode="widthFix"
                        @click="goGoodsDetail"
                        data-child="{{child.smallImgCard}}"
                    />
                    
                    <match-media max-width="330">
                        <text class="des" style="font-size: 10px">{{ child.smallImgCard.name }}</text>
                    </match-media>
                    <match-media min-width="330">
                        <text class="des">{{ child.smallImgCard.name }}</text>
                    </match-media>
                </van-grid-item>
               <!-- </navigator>  -->
            </van-grid>
        </view>
    </view>
</template>

<script>
import vanGrid from "../../../node_modules/@vant/weapp/dist/grid/index";
import vanGridItem from "../../../node_modules/@vant/weapp/dist/grid-item/index";
export default {
    props: ["data"],
    components: {
        vanGrid,
        vanGridItem,
    },
    methods:{
        
        goGoodsDetail(e){
            let GoodsDetail = e.target.dataset.child;
             wx.navigateTo({
                 url:"/components/productDetail/index?des="+GoodsDetail.name+'&img='+GoodsDetail.img
             })
             //console.log(GoodsDetail);
        }

    }
};
</script>

<style lang="scss" scoped>
.productNav {
    width: calc(100% - 85px);
    margin-left: 85px;
    padding: 10px;
    box-sizing: border-box;
    image {
        width: 100%;
        border-radius: 8px;
    }
    .des {
        font-size: 12px;
        color: #777;
    }
}
//如果页面宽度小于 300 像素则
// @media screen and (max-width: 320px) {
//     .productNav {
//         .des {
//             font-size: 10px;
//         }
//     }
// }
</style>
