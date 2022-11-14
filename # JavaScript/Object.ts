interface descriptor /** 属性描述符 */ {
  configurable?: boolean /**      */ /** 描述符类型是否可以被改变，该属性是否可以被删除 */;
  enumerable?: boolean /**        */ /** 该属性是否可以被遍历 */;
  value?: any /**                 */ /** 属性的值 - 数据描述符 */;
  writable?: boolean /**          */ /** 属性的值是否可以被改变 - 数据描述符 */;
  get?(): any /**                 */ /** 读取值的函数 getter - 访问器描述符 */;
  set?(v: any): void /**          */ /** 设置值的函数 setter - 访问器描述符 */;
}

abstract class MyObject {
  /** */ /** @判断该属性是否可枚举 */
  /** */ /** @判断该属性是否可枚举 */
  /** */ /** @判断对象的原型链上是否存在我 obj's prototype has this */

  toLocaleString: () => string;
  toString: () => string;
  valueOf: () => object;

  /** 属性是否自身拥有 */
  hasOwnProperty: (key: string | number | symbol) => boolean;
  static hasOwn: (object, key: string | number | symbol) => boolean;
  /** 属性是否枚举 */
  propertyIsEnumerable: (key: string | number | symbol) => boolean;

  /** enumerable = true/false */
  static getOwnPropertyNames: (object) => string[];
  static getOwnPropertySymbols: (object) => symbol[];

  /** enumerable = true，key != symbol */
  static keys: (object) => [];
  static values: (object) => [];
  static entries: (object) => [[]];

  /** [][] => object */
  static fromEntries: (iterable: [][]) => object;

  /** 是否存在 object 的原型链上 */
  isPrototypeOf: (object) => boolean;
  static setPrototypeOf: (object, prototype) => object;
  static getPrototypeOf: (object) => `prototype`;

  /** @属性描述符 */
  static defineProperty: (object, key, descriptor) => object;
  static getOwnPropertyDescriptor: (object, key) => descriptor;
  static defineProperties: (object, descriptors) => object;
  static getOwnPropertyDescriptors: (object) => {
    [key: string | number | symbol]: descriptor;
  };

  static assign: (target, ...sources) => `target`;
  static create(prototype, descriptors = {}): object {
    const obj = Object.defineProperties({}, descriptors);
    Object.setPrototypeOf(obj, prototype);
    return obj;
  }

  /** @不可扩展 不能添加新的属性 */
  static preventExtensions: (object) => object;
  static isExtensible: (object) => boolean;

  /** @密封 不能添加新的属性，已有属性不可配置 */
  static seal: (object) => object;
  static isSealed: (object) => boolean;

  /** @冻结 不能添加新属性，不可以删除配置修改已有属性 */
  static freeze: (object) => object;
  static isFrozen: (object) => boolean;

  /** @判断 两个值是否为同一个值*/
  static is(x, y) {
    // if 引用相同，且不为数字 true  else 判断 +0 -0
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    }
    // if 引用不同，且不为数字 false else 判断 NaN Number.NaN 0/0 相等
    return x !== x && y !== y;
  }
}
