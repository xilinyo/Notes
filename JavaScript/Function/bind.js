/**
 * @创建一个新的函数并且指定this
 * function.bind(_this, arg1, arg2, ...)
 */

Function.prototype._bind = function (_this, ...args) {
  //新建一个变量赋值为this，表示当前函数
  const fn = this;
  // 参数兜底
  args = args || [];

  // 返回函数
  return function bind(...props) {
    if (this instanceof bind) {
      return new fn(...args, ...props);
    }
    return fn.apply(_this, [...args, ...props]);
  };
};
