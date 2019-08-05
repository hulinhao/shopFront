// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // eslint 验证文件规则
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi":["error","always"],// 没有“;“ 就报错
    // 对键值对的“:” 不检测
    "key-spacing": 0,
    //对缩进不进行检测
    "indent":0,
    //函数括号前后是否有空格 - 不检测
    "space-before-function-paren":0,
    //函数左括号前的空格 -- 不检测
    "space-before-blocks":0,
    //标签的前后空格--不检测
    "eol-last":0,
    //注释检测--关闭
    "ignoreEOLComments":0,
    "omitLastInOneLineBlock":0,
    "beforeStatementContinuationChars":0
  }
}
