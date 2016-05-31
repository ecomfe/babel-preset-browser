# babel-preset-browser
面向IE6+浏览器的使用`AMD`模块的Babel6预设。

## 安装

``` sh
$ npm install --save-dev babel-preset-browser
```

## 使用方式

通过`.babelrc`（推荐）

``` json 
{
  "presets": ["browser"]
}
```

通过命令行

``` sh
$ babel script.js --presets browser
```

## 插件选择和配置
这一部分主要介绍本预设使用的ES特性和相关插件配置。

### ES3

以下两个插件用于解决ES3浏览器不支持使用关键字（如：`default`）作为属性名的问题。

- transform-es3-member-expression-literals
- transform-es3-property-literals

翻译思路是将ES5代码翻译为ES3支持的代码。

### ES2015

本预设从ES2015预设中选择了以下几个插件：

- transform-es2015-template-literals: 用于处理字符串模板，在这个版本里面使用`loose`模式。
- transform-es2015-literals：用于处理二进制和八进制字面量，由于条件限制，不能处理字符串中和`eval`中的常量。
- transform-es2015-arrow-functions：将箭头函数转换成普通函数，不开启`spec`模式以简化转换后的代码，因此要避免对使用箭头函数使用`new/call/apply`，以免发生错误。
- transform-es2015-block-scoped-functions：这个用于解决旧浏览器不支持块级函数声明的问题，不过一般情况下建议使用`let/const`声明块级函数。
- transform-es2015-classes：用于处理类，与ES7的`transform-class-properties`一共使用，以实现完整的类定义模型。在旧浏览器中不支持`Getter/Setter`机制，因此使用`loose`模式。
- transform-es2015-shorthand-properties：用于将省略的属性名还原。
- transform-es2015-computed-properties：用于处理计算属性名。旧浏览器中不支持`Getter/Setter`机制，因此请不要使用`Getter/Setter`以免出现运行时错误。
- check-es2015-constants：校验`const`变量有没有被赋值。
- transform-es2015-spread：数组延展。
- transform-es2015-parameters：函数参数处理。
- transform-es2015-destructuring：解构。
- transform-es2015-block-scoping：块级作用域，不支持`tdz`属性，变量的作用域为当前块。

以下插件或者功能没有被选择：

- transform-es2015-function-name：这个插件会额外增加代码量，并且没有什么实际意义。
- transform-es2015-object-super：由于旧浏览器不支持`Object.getPrototypeOf`，所以不支持。
- transform-es2015-duplicate-keys：实际书写中出现重复键通常不合理，应当在书写时避免。
- transform-es2015-for-of：不使用此插件，使用第三方插件实现`for-of-array`功能。
- transform-es2015-sticky-regex：功能不常用，并且需要运行时支持。
- transform-es2015-unicode-regex：功能不常用，并且需要运行时支持。
- transform-es2015-typeof-symbol：默认不支持`Symbol`。
- transform-es2015-modules-commonjs：使用自定义的`AMD`模块。
- transform-regenerator：不支持`Generator`。

以下第三方插件用于补足功能：
- transform-modules-amd：自定义的`AMD`模型，与标准版的区别是通过缩减ES6代码的功能，以满足`AMD`规范。
- transform-for-of-array：补充`for-of`循环，不考虑任何迭代器，将所有对象当作数组或者类数据处理。

## ESNEXT

以下未定稿但比较稳定的插件并加入到预设中：

- transform-class-properties：补足类功能。
- transform-object-rest-spread：用于补足解构功能。
- babel-plugin-syntax-export-extensions：补足模块功能，已经在`transform-modules-amd`中引入，无需重复。

这三个插件主要是对ES2015缺失的功能进行一些补充，以保证特征的完整性。

以下插件没有补添加但是推荐单独引入：

- transform-exponentiation-operator：支持`**`符号。
- syntax-trailing-function-commas：允许函数参数末尾添加不必要的逗号，不符合使用规范没有被添加，如果你的使用规范推荐添加可使用。
- transform-function-bind：支持`::`运算符，需要可以加入。
- transform-do-expressions：`do`运算符号，可以在表达式中添加代码块，不是很符合JS的思路，没有直接加入。

这四个插件属于ES7提供的新语法糖

以下插件因浏览器原因不应当被引入：

- transform-async-to-generator：浏览器不支持`Generator`。

以下插件已经被babel废弃，或者有没完整的实现，尽量避免使用：

- transform-class-constructor-call：类构造函数非实例化，已经被废弃。
- transform-decorators：babel6至今没有给出完整的实现，也找不到比较不错的替代插件。
