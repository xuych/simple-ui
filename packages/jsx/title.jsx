// // import Vue from 'vue'
// let constructor = {
//   name: 'anchored-heading',
//   render: function(createElement) {
//     return createElement(
//       'h' + this.level, // 标签名称
//       this.$slots.default, // 子节点数组
//     )
//   },
//   props: {
//     level: {
//       type: Number,
//       required: true,
//     },
//   },
// }
// export default constructor
export default {
  name: 'anchoredHeading',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render() {
    let tagName = 'h' + this.level
    return <tagName>{this.$slots.default}</tagName>
  },
}
