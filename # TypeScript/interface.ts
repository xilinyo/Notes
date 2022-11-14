/**
 * 枚举类型, 默认是从0开始自增
 * 如果设置了数值, 则从该值开始自增
 * 如果设置了字符串, 后面的必须依次手动设置
 */
enum Syntax_enum {
  KEY0 /**        */ /** 0 */,
  KEY1 /**        */ /** 1 */,
  KEY2 = "2" /** */ /** ‘2’ */,
  KEY3 = "3" /** */ /** ‘3’ */,
  KEY6 = 6 /**    */ /** 6 */,
  KEY7 /**        */ /** 7 */,
}

/***
 * 常用的基本类型 boolean, string, number, bigint, symbol, void, undefined
 * 不常用的 null, any, never, unknown
 * 常用的对象类型  Date, Error, Array, Map, Set, RegExp, Promise
 *
 * 重复声明的接口内容会合并
 * Syntax 定义了构造函数以及静态属性
 * 定义的有只读类型, 可选类型, 重载函数, 联合类型, 元组类型, 条件类型, 索引类型, 交叉类型, 映射类型, 泛型约束
 * 通过 0: type 定义了非空数组
 */

interface Syntax_interface<T extends { length: number }, K extends keyof T> {}
interface Syntax_interface<T, K extends keyof T> {
  new (): {
    basic: [boolean, string, number, bigint, symbol, void, undefined];
    readonly special: `${null | any}-${never}` | unknown;
    object: Date | Error | Array<T> | Map<K, T> | Set<K> | RegExp | Promise<T>;
    overload(x: boolean): string;
    overload(x: string): boolean;
    func1: () => K[];
    func2: {
      (): T;
    };
  };
  static: {
    [key: number]:
      | {
          [key in keyof { label: "" }]: {
            [key: string | symbol]: {
              x: null;
            } & {
              y: string extends { length: number } ? undefined : never;
            };
          };
        }
      | Array<string>;
    0: string[];
  };
}
