/**
 * @接口
 * 是对象的状态(属性)和行为(方法)的抽象(描述)
 * 可扩展范型
 */
interface Rarely<T> {
  // 可选 联合类型
  index?: T | number[];
  // 只读 元组
  readonly tuple: [string, Array<number>];
}

/**
 * @索引签名
 * [index: number]: Array;
 * [index: string | symbol]: Object;
 */
interface Ary {
  [index: number]: number;
}

const _ary: Ary = [0];

interface Jct {
  [key: string]: any;
}

const _jct: Jct = {
  _rly: [0],
};

/**
 * @扩展
 * 使用 extends 扩展
 */

interface Ner extends Jct {
  _number: number;
}

/**
 * @合并
 * 可以重复声明一个接口
 * 接口会进行合并
 */
interface Ner {
  _boolean: boolean;
}
const _ner: Ner = {
  _number: 23,
  _boolean: false,
};


/**
 * @keyof
 */
 interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

type PersonKey = keyof Person; //type PersonKey = 'name'|'age'|'gender';

type Keys = "a" | "b" | "c"

type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any, c: any }