module CSS {
  interface Syntax {
    "align-content": () => /* 基本位置对齐 */
    /*align-content 不采用左右值 */
    | "center" /* 将项目放置在中点 */
      | "start" /* 最先放置项目 */
      | "end" /* 最后放置项目 */
      | "flex-start" /* 从起始点开始放置 flex 元素 */
      | "flex-end" /* 从终止点开始放置 flex 元素 */

      /* 默认对齐 */
      | "normal"

      /*基线对齐*/
      | "baseline"
      | "first baseline"
      | "last baseline"

      /* 分布式对齐 */
      | "space-between" /* 均匀分布项目 第一项与起始点齐平，最后一项与终止点齐平 */
      | "space-around" /* 均匀分布项目 项目在两端有一半大小的空间*/
      | "space-evenly" /* 均匀分布项目 项目周围有相等的空间 */
      | "stretch" /* 均匀分布项目 拉伸‘自动’ - 大小的项目以充满容器 */

      /* 溢出对齐 */
      | "safe center"
      | "unsafe center";
  }
}
