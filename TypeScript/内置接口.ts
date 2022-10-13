/**
 * @ReadonlyArray
 */

/**
 * @Required
 * 将属性全部变成必选
 */
type Person1 = {
  name?: string;
  age?: number;
  hobby?: string[];
};

const user: Required<Person1> = {
  name: "树哥",
  age: 18,
  hobby: ["code"],
};

/**
 * @Partial
 * 将属性全部变成可选
 */

interface Person2 {
  name: string;
  age: number;
}

const shuge: Partial<Person2> = {
  name: "树哥",
};

/**
 * @Exclude
 * 将类型中的某个或某些属性排除掉
 * Exclude<T, U>
 */
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

/**
 * @Exclude
 * 将类型中的共同拥有的属性提取出来
 * 取并集
 */
type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () =>void

/**
 * @Readonly
 * 将属性全部转换成只读
 * Readonly<T>
 */

/**
 * @Record
 * 将属性类型转化成指定类型
 * Record<K extends keyof any, T>
 */
type Property = "key1" | "key2";
type Person56 = Record<Property, string>;

/**
 * @Pick
 * 从某类型中取出指定的属性
 */

type Person455 = {
  name: string;
  age: number;
  gender: string;
};

type P1 = Pick<Person455, "name" | "age">; // { name: string; age: number; }

/**
 * @Omit
 * 从类型中排出指定的属性
 */
interface Person6666 {
  name: string;
  age: number;
  gender: string;
}
type P1344 = Omit<Person6666, "age" | "gender">;

/**
 * @ReturnType
 * 用来得到一个函数的返回值类型
 */

type Funcsss = (value: string) => string;
const test: ReturnType<Funcsss> = "1";

/**
 * @Parameters
 * 用于获得函数的参数类型所组成的元组类型。
 */
type P1222 = Parameters<(a: number, b: string) => void>; // [number, string]

/**
 * @InstanceType
 * 返回构造函数类型T的实例类型
 */
class C {
  x = 0;
  y = 0;
}

type D = InstanceType<typeof C>; // C
