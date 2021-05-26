<template>
    <view class="home-wrap">
        <view class="search-box">
            <input type="text" class="search">
            <view class="inner">
                <icon type="search" size="14" color="rgba(51, 51, 51, .4)"></icon>
                <text>搜一搜</text>
            </view>
        </view>
        <swiper indicator-dots autoplay interval="3000" circular>
            <swiper-item v-for="(item,index) in swiperList" :key="index">
                <image :src="item.img" alt="">
            </swiper-item>
        </swiper>
        <Nav :navList="navList"></Nav>
        <Product-list :data="productData"></Product-list>
        <view class="bottom-text">更多商品，敬请期待！</view>
    </view>
</template>
<script>
import Hello from '../../components/Hello';
import Nav from '../../components/nav';
import ProductList from '../../components/productList';
export default {
    config: {
        // title: 'Home Page Title'
    },

    components: {
        Hello,
        Nav,
        ProductList
    },

    data: {
        swiperList: [],
        navList: [],
        productData: []
    },
    created() {
        this.host = getApp().globalData.host;
        this.$api.request({
            url: this.host + '/api/xiaomi/swiper'
        }).then(({data}) => {
            this.swiperList = data.data;
        })
        this.$api.request({
            url: this.host + '/api/xiaomi/nav'
        }).then(({data}) => {
            this.navList = data.data;
        })
        this.getProductData();
        this.isReachBottom = false;
    },
    onReachBottom() {
        if (this.isReachBottom === false) {
            this.isReachBottom = true;
            this.getProductData();
        }
        console.log('到底了')
    },
    methods: {
        getProductData() {
            this.$api.request({
                url: this.host + '/api/xiaomi/productList'
            }).then(({data}) => {
                this.productData = this.productData.concat(data.data);
                this.isReachBottom = false;
                // console.log(this.productData)
            })

        },
        handleHello(e) {
            this.clicked = true;
            this.btnText = 'You clicked';

            this.$api.showToast({
                title: 'Received Hello',
                duration: 3000
            });
        }
    }
};
</script>
<style lang="scss">
.home-wrap {
    box-sizing: border-box;
    height: 100vh;
    background: #f0f0f0;
    -quick-flex-direction: column;
    -quick-align-items: center;

    .search-box {
        background-color: #845d32;
        height: 56px;
        position: relative;
        .search {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 32px;
            width: 85%;
            // margin: auto;
            background: #f0f0f0;
            border-radius: 16px;
        }
        .inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            icon {
                margin-right: 5px;
                vertical-align: middle;
            }
            text {
                color: rgba(51, 51, 51, .4);
                font-size: 14px;
                vertical-align: middle;
            }
        }
    }
    swiper {
        height: 160px;
        image {
            width: 100%;
            height: 160px;
        }
    }
    .bottom-text {
        padding: 120px 0 80px;
        text-align: center;
        font-size: 20px;
    }
}

</style>
