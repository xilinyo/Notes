module CSS {
  interface Syntax {
    "align-self": () => /* Keyword values */
    | "auto"
      | "normal"

      /* Positional alignment */
      /* align-self does not take left and right values */
      | "center" /* Put the item around the center */
      | "start" /* Put the item at the start */
      | "end" /* Put the item at the end */
      | "self-start" /* Align the item flush at the start */
      | "self-end" /* Align the item flush at the end */
      | "flex-start" /* Put the flex item at the start */
      | "flex-end" /* Put the flex item at the end */

      /* Baseline alignment */
      | "baseline"
      | "first baseline"
      | "last baseline"
      | "stretch" /* Stretch 'auto'-sized items to fit the container */

      /* Overflow alignment */
      | "safe center"
      | "unsafe center"
  }
}
