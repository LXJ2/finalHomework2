/**
 * @file Build ant mini program build config
 * @author liuxja<liuxj@geovis.com.cn>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'ant_dist',
        depDir: 'src/common'
    },
    localPolyfill: ['async']
});
