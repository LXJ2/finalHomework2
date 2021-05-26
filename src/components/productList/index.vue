<template>
    <view class="listBox">
        <navigator url="../../components/productDetail/index" v-for="(item,i) in data" :key="i">
        <view class="productListBox" v-for="(item,i) in data" :key="i">
            <view class="imgBox">
                <image :src="item.img" alt="" mode="widthFix">
                <text v-if="item.tag">{{item.tag}}</text>
            </view>
            <view class="name">{{item.name}}</view>
            <view class="des">{{item.des}}</view>
            <view>
                <text class="price">￥{{item.price}}</text>
                <text class="oldPrice" v-if="item.oldPrice">￥{{item.oldPrice}}</text>
            </view>
        </view>
        </navigator>
    </view>
</template>

<script>
    export default {
        props: {
            data: {
                type: Array
            }
        },
        created() {
        }
    }
</script>

<style lang="scss" scoped>
.listBox {
    background: #f4f4f4;
    padding-top: 20px;
}
.productListBox {
    margin-bottom: 9px;
    width: calc((100% - 33px) / 2);
    height: 258px;
    display: inline-block;
    background: #fff;
    vertical-align: top;
    border-radius: 6px;
    &:nth-child(2n+1) {
        margin-left: 12px;
        margin-right: 4.5px;
    }
    &:nth-child(2n) {
        margin-left: 4.5px;
        margin-right: 12px;
    }
    .imgBox {
        position: relative;
        image {
            width: 100%;
        }
        text {
            position: absolute;
            z-index: 1;
            left: 0;
            bottom: 0;
            height: 16px;
            text-align: center;
            line-height: 16px;
            background-color: rgb(217, 107, 108);
            padding-left: 4px;
            padding-right: 4px;
            margin-right: 5px;
            color: #fff;
            font-size: 11px;
            border-radius: 1.5px;
        }
    }
    .name {
        font-size: 15px;
        width: 171px;
        color: rgb(51, 51, 51);
        line-height: 21px;
        text-overflow: ellipsis;
        padding-left: 3px;
        padding-right: 3px;
        margin-top: 6px;
        overflow: hidden;
    }
    .des {
        font-size: 13px;
        width: 171px;
        color: rgb(153, 153, 153);
        padding-left: 3px;
        padding-right: 3px;
        margin-top: 2px;
        text-overflow: ellipsis;
        line-height: 18px;
        -webkit-box-pack: center;
        overflow: hidden;
    }
    .price {
        color: red;
    }
    .oldPrice {
        margin-left: 4px;
        font-size: 14px;
        color: rgb(153, 153, 153);
        text-decoration: line-through;
        margin-bottom: 0.5px;
        height: 20px;
    }
}
</style>