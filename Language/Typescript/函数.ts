/**
 * @函数重载
 */

/**
 * @函数
 */
interface Func {
  (key: unknown, index: string | number): void;
}

const fn: Func = (key, index) => {
  // 类型断言
  // 类型断言 key as Type or <Type>key
  //   (key as Array<string>).join("");
  //   (<string>key).split("");

  // 处理联合类型
  if (typeof index === "string") {
    index.split("");
  } else {
    index.toFixed(2);
  }
};

