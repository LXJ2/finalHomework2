/**
 * @file 小程序入口
 * @author liuxiaojiea
 */

'use strict';


export default {
    config: {
        pages: [
            'components/productDetail/index',
            'pages/home/index',
            'pages/menu/index',
            'pages/car/index',
            'pages/user/index'
        ],

        window: {
            navigationBarBackgroundColor: '#845d32',
            navigationBarTextStyle: 'white',
            backgroundTextStyle: 'light',
            enablePullDownRefresh: false,
            backgroundColor: '#ccc',
            navigationBarTitleText: '小米有品'
        },
        tabBar: {
            color: '#666666',
            selectedColor: '#845f3f',
            list: [{
                "pagePath": "pages/home/index",
                "iconPath":"common/img/theOrder.png",
                "selectedIconPath":"",
                "text": "首页"
            }, {
                "pagePath": "pages/menu/index",
                "iconPath":"common/img/theOrder.png",
                "text": "分类"
            }, {
                "pagePath": "pages/car/index",
                "iconPath":"common/img/theOrder.png",
                "text": "购物车"
            }, {
                "pagePath": "pages/user/index",
                "iconPath":"common/img/theOrder.png",
                "text": "我的"
            }]
        },

        networkTimeout: {
            request: 30000
        },

        /* eslint-disable fecs-camelcase */
        _quickEnv: {
            networkTimeout: null,
            package: 'com.okam.demo',
            name: 'okam-quick',
            versionCode: '2',
            icon: '/common/img/okm.png'
        }
        /* eslint-enable fecs-camelcase */
    },
    $promisifyApis: [
        'getSystemInfo', 'request'
    ],
    globalData: {
        host: 'http://localhost:8088'
    },
    async onLaunch() {
        let result = await this.$api.getSystemInfo();
        console.log('launch system info', result);
        console.log('show onLaunch...');
    },

    onShow() {
        this.$api.getSystemInfo().then(function (res) {
            console.log('systemInfo', res);
        });
        console.log('show app...');
    },


    onHide() {
        console.log('hide app...');
    }
};


