/**
 * @该对象的原型链上是否存在此构造函数的原型
 * 换句话说该对象是否和此构造函数有血缘关系
 * object instanceof constructor
 */

function _instanceof(left, right) {
  if (typeof left !== "object" || left === null) return false;
  let _proto = Object.getPrototypeOf(left);
  //沿着原型链寻找是否满足条件
  while (true) {
    if (_proto === null) return false;
    if (_proto === right.prototype) return true;
    _proto = Object.getPrototypeOf(_proto);
  }
}
