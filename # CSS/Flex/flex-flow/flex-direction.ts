module CSS {
  interface Syntax {
    "flex-direction": () =>
      | "row" /*             */ /** 主轴方向: 从左到右 */
      | "row-reverse" /*     */ /** 主轴方向: 从右到左 */
      | "column" /*          */ /** 主轴方向: 从上到下 */
      | "column-reverse" /*  */ /** 主轴方向: 从下到上 */;
  }
}
