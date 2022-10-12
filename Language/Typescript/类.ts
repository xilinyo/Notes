/**
 * @抽象类
 * @abstract
 * 抽象类不能实例化
 * @范型T
 * @范型的默认类型
 */

abstract class Car<T = string> {
  /**
   * @private
   * 私有的, 只能在类的内部使用, 不能被继承, 不能被子类覆盖
   */
  constructor(private _origin: string = "中国") {}
  /**
   * @protected
   * 受保护的, 类的内部使用, 不能被实例化, 可以被继承, 可以被子类覆盖
   */
  protected fuel = "电动";

  /**
   * @static
   * 静态属性, 类的属性
   */
  static id = "0";

  /**
   * @public
   * 公有的, 原型, 可被覆盖
   */
  public get origin() {
    return this._origin;
  }

  /**
   * @readonly
   * 只读
   * @public
   * 默认声明
   */
  readonly serial = "Car";

  /**
   * @abstract
   * 抽象方法,抽象属性
   * 必须在派生类中实现
   */
  abstract id: T;
  abstract getId(): void;
}

/**
 * @派生类
 * 必须实现抽象类中的抽象方法和属性
 * @extends
 * 继承
 */

class Wuling extends Car {
  constructor(origin?: string) {
    super(origin);
  }
  id = "1";
  getId = (): void => {};
}
