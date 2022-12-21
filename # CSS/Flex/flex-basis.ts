module CSS {
  interface Syntax {
    "flex-basis": () =>
      | "auto"
      /* 固有的尺寸关键词 */
      | "fill"
      | "fit-content"
      | "max-content"
      | "min-content"
      /* 在 flex item 内容上的自动尺寸 */
      | "content"
      /* 全局数值 */
      | "inherit"
      | "initial"
      | "unset";
  }
}
