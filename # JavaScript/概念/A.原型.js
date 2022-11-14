/**
 * @what
 * 什么是原型
 * @只有函数有原型
 * Object Function 都是内置的函数
 * 每个原型都有构造函数属性'constructor', 也就是它自己
 * prototype:{
 *      ...
 *      constructor
 * }
 */
function Cat() {}

Cat.prototype.constructor === Cat;

/**
 * @why
 * 为什么要有原型
 * 为了让每个实例都有可追溯的源头
 * 也为了让每个实例都可以有共享的方法
 */
