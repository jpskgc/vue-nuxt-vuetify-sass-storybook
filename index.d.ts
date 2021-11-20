// typescriptからvueファイルをimportできるようにするために必要な記述
declare module '*.vue' {
  import Vue from 'vue'
  const _default: Vue
  export default _default
}
