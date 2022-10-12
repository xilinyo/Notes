/**
 * @类型别名
 * @泛型类型别名
 * 注意Object与object区别
 * Object 表示 对象包括 String, Number 等
 * object 表示 {}
 */
type isObject<T> = Object | T;

/**
 * @基础类型
 */
type isBasis = string | number | bigint | boolean | symbol | object;

/**
 * @元组类型
 * [type, type]
 */
type isTuple = [null, undefined, void, unknown, never];

/**
 * @范型
 */
type T = "Generic - 泛型";

/**
 * @联合类型
 * 这个类型或这个类型
 * type | type
 * 交叉类型中如果遇到key的名称相同, 但是key的类型不同, 则key的类型为never
 *
 * @数组类型
 * 方式一: T[]
 * 方式二: Array<T>
 */
type isUnion = Array<T> | isObject<isBasis>[];

/**
 * @交叉类型
 * type & type
 * 取并集
 */
type isCross = isUnion & T;

/**
 * @枚举类型
 * 注意纯数字枚举与非纯数组区别
 * 纯数字 - 赋值从0或指定的初始值开始递增
 * 非纯数字 - 从被赋值为字符串的位置开始, 需依次赋值, 否则会报, 因为字符串无法递增
 */
enum Color {
  RED /*             */ /* 0 */,
  PINK /*            */ /* 1 */,
  BLUE = 8 /*        */ /* 8 */,
  BLACK /*           */ /* 9 */,
  WHITE = "白色" /*  */ /* 白色 */,
  YELLOW = "黄色" /* */ /* 黄色 */,
}

/**
 * @混合类型
 */

/**
 * @typeof
 */

const _Color = {
  RED: 0,
  PINK: 1,
  BLUE: 2,
  BLACK: 3,
  WHITE: 4,
  YELLOW: 5,
};

type ItemColor = typeof _Color;
