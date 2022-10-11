/**
 * @生成一个实例对象
 * new F
 */

function _new(fn, ...args) {
  /**
   * @创建一个空的简单JavaScript对象
   */
  let obj = {};

  /**
   * @为该对象定义原型链指向为构造函数的原型对象
   * __proto__ = fn.prototype
   */
  Object.setPrototypeOf(obj, fn.prototype);

  /**
   * @简写
   * const obj = Object.create(fn.prototype)
   */

  /**
   * @将空对象作为this上下文
   */

  const res = fn.apply(obj, args);

  /**
   * @如果函数执行后没有返回对象则弹出空对象
   */
  return res instanceof Object ? res : obj;
}
