<template>
    <view class="navCom">
        <view v-for="(item, i) in navList" :key="i" class="nav">
            <image :src="item.img" alt="" mode="widthFix" />
            <text>{{ item.text }}</text>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        navList: {
            type: Array
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.navCom {
    padding: 10px;
    background: #fff;
    .nav {
        display: inline-block;
        width: 20%;
        text-align: center;
        image {
            width: 50px;
            margin: auto;
            display: block;
        }
        text {
            font-size: 12px;
            margin-top: 5px;
        }
    }
}
</style>
