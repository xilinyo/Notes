/**
 * @in
 */
function _in(props: { x: string } | { y: number }) {
  if ("x" in props) {
    console.log(props.x);
  }
  if ("y" in props) {
    console.log(props.y);
  }
}

/**
 * @typeof
 */
function _typeof(val) {
  if (typeof val === "string")
    if (typeof val === "number")
      if (typeof val === "bigint")
        if (typeof val === "boolean")
          if (typeof val === "symbol")
            if (typeof val === "undefined")
              if (typeof val === "object")
                if (typeof val === "function") {
                }
}

/**
 * @instanceof
 */
function _instanceof(date: Date | string) {
  if (date instanceof Date) {
    return date.getDate();
  } else {
    return new Date(date);
  }
}

/**
 * @自定义守卫
 */
function isNumber(x: any): x is number {
  return typeof x === "number";
}
function isString(x: any): x is string {
  return typeof x === "string";
}
