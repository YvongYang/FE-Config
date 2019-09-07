module.exports = {
  /* 扩展继承 */
  "extends": [],
  /* 规则 */
  "rules": {
    /**
     * Color
     */
    "color-hex-case": "lower", // 十六进制颜色大写
    "color-hex-length": "short", // 十六进制颜色须缩写
    "color-no-invalid-hex": true, // 禁止无效的十六进制颜色
    /* Font Family */
    "font-family-no-duplicate-names": true, // 禁止重复的字体名称
    /* Font weight */
    /* Function */
    "function-calc-no-unspaced-operator": true, // 禁止在 calc 函数内使用不加空格的操作符
    "function-comma-newline-after": "always-multi-line", // 多行函数逗号后必须有换行符
    "function-comma-newline-before": "never-multi-line", // 多行函数逗号前禁止有空白
    "function-comma-space-after": "always-single-line", // 单行函数的逗号后必须有空格
    "function-comma-space-before": "never-single-line", // 单行函数的逗号前禁止有空格
    "function-name-case": "lower", // 函数名小写
    /* Number */
    "number-leading-zero": "never", // 禁止有前导 0
    "number-no-trailing-zeros": true, // 禁止数字拖尾 0
    /* String */
    // "string-quotes": "double", // 字符串必须使用双引号
    /* Length */
    "length-zero-no-unit": true, // 长度为0时，禁止使用单
    /* Time */
    // "time-no-imperceptible": true, // 禁止 animation 和 transition 小于或等于 100ms
    /* Unit */
    "unit-case": "lower", // 单位小写
    /* Value */
    "value-keyword-case": "lower", // 关键字的值小写
    "value-no-vendor-prefix": true, // 禁止给值添加浏览器引擎前缀
    /* Value list */
    "value-list-comma-newline-after": "always-multi-line", // 在多行值列表的在逗号后必须有一个换行符
    "value-list-comma-newline-before": "never-multi-line", // 在多行值列表的在逗号前禁止有空白
    "value-list-comma-space-after": "always-single-line", // 在单行值列表的逗号后必须有一个空格
    "value-list-comma-space-before": "never-single-line", // 在单行值列表的逗号前禁止有空白
    /* Custom property */
    /* Shorthand property */
    "shorthand-property-no-redundant-values": true, // 禁止在简写属性中使用冗余值
    /* Property */
    "property-case": "lower", // 属性小写
    "property-no-vendor-prefix": true, // 禁止属性使用不必要的浏览器引擎前缀
    /* Keyframe declaration */
    "keyframe-declaration-no-important": true, // 禁止在 keyframe 声明中使用 !important
    /* Declaration */
    "declaration-bang-space-after": "never", // 在感叹号后禁止有空白
    "declaration-bang-space-before": "always", // 在感叹号前必须有一个空格
    "declaration-colon-newline-after": "always-multi-line", // 在多行值列表的冒号后必须有一个换行符
    "declaration-colon-space-after": "always-single-line", // 在单行值列表的冒号后必须有一个空格
    "declaration-colon-space-before": "never", // 在冒号之前禁止有空白
    "declaration-no-important": true, // 禁止 !important
    /* Declaration block */
    "declaration-block-no-duplicate-properties": true, // 禁止重复
    // "declaration-block-trailing-semicolon": true, // 必须有拖尾分号
    /* Block */
    /* Selector */
    "selector-attribute-brackets-space-inside": "never", // 特性选择器的方括号内禁止有空白
    "selector-attribute-operator-space-after": "never", // 特性选择器的操作符后禁止有空白
    "selector-attribute-operator-space-before": "never",
    "selector-combinator-space-after": "always", // 关系选择符后必须有空白
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true, // 禁止包含选择符出现非空格字符
    // "selector-no-empty": true, // 禁止出现空选择器
    // "selector-no-universal": true, // 禁用通配符选择器
    "selector-pseudo-class-case": "lower", // 伪类选择器小写
    "selector-pseudo-element-case": "lower", // 伪元素大小写
    "selector-pseudo-element-colon-notation": "double", //伪元素使用双冒号
    "selector-type-case": "lower", // 类型选择器小写
    /* Selector list*/
    "selector-list-comma-newline-after": "always-multi-line", // 多行选择器列表中，逗号后必须有换行符
    // "selector-list-comma-newline-before": "never-multi-line", // 多行选择器列表中，逗号前禁止有空白
    "selector-list-comma-space-after": "always-single-line", // 单行选择器列表，逗号后必须有空格
    "selector-list-comma-space-before": "never", // 逗号前禁止有空白
    /* Root rule */
    /* Rule*/
    /* Media feature */
    /* Custom media */
    /* Media query list */
    /* At-rule */
    /* stylelint-disable comment */
    /* Comment */
    "comment-no-empty": true,
    "comment-whitespace-inside": "always", // 要求注释标签内有空白
    /* General / Sheet */
    // "indentation": "tab", // 缩进
    "no-duplicate-selectors": true, // 同一样式表禁止出现重复选择器
    "no-extra-semicolons": true, // 禁止多余分号
    "no-missing-end-of-source-newline": true, // 禁止缺少文件末尾换行符
  },
  /* 插件 */
  "plugins": [],
  "processors": [],
  "ignoreFiles": [],
  /* 默认严重级别 */
  "defaultSeverity": [],
};
