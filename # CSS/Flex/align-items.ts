module CSS {
  interface Syntax {
    "align-items": () => /* Basic keywords */
    | "normal"
      | "stretch"

      /* Positional alignment */
      | "center" /* Pack items around the center */
      | "start" /* Pack items from the start */
      | "end" /* Pack items from the end */
      | "flex-start" /* Pack flex items from the start */
      | "flex-end" /* Pack flex items from the end */
      | "self-start"
      | "self-end"

      /* Baseline alignment */
      | "baseline"
      | "first baseline"
      | "last baseline" /* Overflow alignment (for positional alignment only) */
      | "safe center"
      | "unsafe center"
  }
}
