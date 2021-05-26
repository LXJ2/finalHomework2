/**
 * @file Build swan smart program build config
 * @author liuxja<liuxj@geovis.com.cn>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    localPolyfill: ['async'],
    // wx2swan: true,
    rules: []
});
