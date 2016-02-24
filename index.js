/**
 * @file index preset for modern browser and old IEs
 * @author zongyu(liuxuanzy@qq.com)
 */

module.exports = {
    plugins: [
        require('babel-plugin-transform-class-properties'),
        require('babel-plugin-check-es2015-constants'),
        [
            require('babel-plugin-transform-es2015-arrow-functions'),
            {
                "spec": false
            }
        ],
        require('babel-plugin-transform-es2015-computed-properties'),
        require('babel-plugin-transform-es2015-destructuring'),
        require('babel-plugin-transform-es2015-literals'),
        require('babel-plugin-transform-es2015-parameters'),
        require('babel-plugin-transform-object-rest-spread'),
        require('babel-plugin-transform-es3-member-expression-literals'),
        require('babel-plugin-transform-es3-property-literals'),
        require('babel-plugin-transform-es2015-block-scoped-functions'),
        require('babel-plugin-transform-es2015-block-scoping'),
        [
            require('babel-plugin-transform-es2015-classes'),
            {
                loose: true
            }
        ],
        require('babel-plugin-transform-es2015-shorthand-properties'),
        require('babel-plugin-transform-es2015-spread'),
        require('babel-plugin-transform-es2015-template-literals'),
        [
            require('babel-plugin-transform-modules-esl'),
            {
                polyfill: false,
                regenerator: false
            }
        ],
        require('babel-plugin-transform-modules-amd'),
        require('babel-plugin-transform-remove-comments')
    ]
};