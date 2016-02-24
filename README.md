# babel-preset-browser
babel preset for modern browser and old IEs. this preset use `AMD` modules.
you can use the `.babelrc` file or use this preset directly

## ES3

- transform-es3-member-expression-literals
- transform-es3-property-literals

## ES2015

- check-es2015-constants
- transform-es2015-arrow-functions
- transform-es2015-block-scoped-functions
- transform-es2015-block-scoping
- transform-es2015-classes：loose only，deny use `getter/setter`
- transform-es2015-computed-properties：need new helper in [babel-runtime](http://gitlab.baidu.com/babel/babel-runtime)
- transform-es2015-destructuring：need new helper in [babel-runtime](http://gitlab.baidu.com/babel/babel-runtime)
- transform-es2015-literals
- transform-es2015-parameters
- transform-es2015-shorthand-properties
- transform-es2015-spread
- transform-es2015-template-literals

**don't support plugin below：**

- transform-es2015-function-name
- transform-es2015-for-of：need shim even in loose mode
- transform-es2015-object-super：IE don't has `__proto__` property
- transform-es2015-sticky-regex
- transform-es2015-unicode-regex
- transform-es2015-typeof-symbol
- transform-regenerator：regenerator is too large
- transform-es2015-modules-amd：use other amd transformer

## ES7
- transform-class-properties
- transform-object-rest-spread

## 其它
- transform-runtime
- transform-modules-amd