/**
 * @指定this执行函数
 * function.call(_this, arg1, arg2, ...)
 */

Function.prototype._call = function (context, ...args) {
  /**
   * @首先需要明确this这里指的是调用call时的函数
   * 例 [].push.call 这里 this 指向 push 方法
   * 但 push 方法执行时的 this 指向 []
   * 总结就是 谁调用 this 指向谁
   */

  // 重新定义this指向为函数的第一个参数
  let _this = context || window;
  // 创建一个不会重复的key
  const fn = Symbol();
  // 且将this代表的函数定义为_this的一个属性
  _this[fn] = this;
  // 这里执行函数并重新定义this指向
  const res = _this[fn](...args);
  //删除该方法，不然会对传入对象造成污染（添加该方法）
  delete _this[fn];
  // 返回结果
  return res;
};
