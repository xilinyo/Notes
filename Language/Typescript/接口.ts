/**
 * @不常用
 */
interface Rarely {
  // 联合类型
  index: number | number[];
  // 元组
  tuple: [string, Array<number>];
}

/**
 * @数组
 */
interface Ay {
  // 索引签名 number 代表数组
  [index: number]: Rarely;
  // 索引签名 string 、symbol 代表对象
  // [index: string]: Rarely;
}

const users: Ay = [
  {
    tuple: ["ids", [1, 2, 3]],
    index: [0],
  },
];

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

/**
 * @不存在的值
 */
interface Never {
  (): never;
}

// const nev: Never = () => {
//   //   while (true) {}
//   throw new Error("Something failed");
// };
