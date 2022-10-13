/**
 * @指定this执行函数
 * function.apply(_this, args)
 */

Function.prototype._apply = function (context, args = []) {
  // 重新定义this指向为函数的第一个参数
  let _this = context || window;
  // 创建一个不会重复的key
  const fn = Symbol();
  // 且将this代表的函数定义为_this的一个属性
  _this[fn] = this;
  // 这里执行函数并重新定义this指向
  const res = args.length > 0 ? _this[fn](...args) : _this[fn]();
  //删除该方法，不然会对传入对象造成污染（添加该方法）
  delete _this[fn];
  // 返回结果
  return res;
};
