module CSS {
  interface Syntax {
    "flex-wrap": () =>
      | "nowrap" /*          */ /* 不换行 */
      | "wrap" /*            */ /* 按主轴方向排序换行 */
      | "wrap-reverse" /*    */ /* 按主轴反方向排序换行 */;
  }
}
