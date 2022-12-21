module CSS {
  interface Syntax {
    display: () =>
      | "center"
      | "start"
      | "end"
      | "flex-start"
      | "flex-end"
      | "left"
      | "right"
      | "space-between" /* 均匀排列每个元素 首个元素放置于起点，末尾元素放置于终点 */
      | "space-around" /* 均匀排列每个元素 每个元素周围分配相同的空间 */
      | "space-evenly" /* 均匀排列每个元素 每个元素之间的间隔相等 */
      | "stretch" /* 均匀排列每个元素 'auto'-sized 的元素会被拉伸以适应容器的大小 */
      | "safe center;"
      | "unsafe center"
  }
}
