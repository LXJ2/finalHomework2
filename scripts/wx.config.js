/**
 * @file Build weixin mini program build config
 * @author liuxja<liuxj@geovis.com.cn>
 */

'use strict';
const path = require('path');
const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'wx_dist',
        depDir: 'src/common'
    },

    localPolyfill: [
        'async'
    ],
    pluginOptions: {
        'style-resources-loader': {
           preProcessor: 'scss',
           patterns: [
              // 全局变量路径，不能使用路径别名
              path.resolve(__dirname, 'src/common/css/common.scss')
           ]
        }
     },
    processors: {
        postcss: {
            options: {
                plugins: [
                    ['postcss-url', {
                        url: 'inline'
                    }]
                ]
            }
        },
        filter: {
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
});
