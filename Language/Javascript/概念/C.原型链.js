/**
 * @什么是原型链
 * 无论是函数还是其他任意对象都有原型链
 * 指向上层的原型
 * 别忘了原型也是对象
 * __proto__: {
 *      __proto__
 *      constructor
 * }
 *
 * 函数的原型链总是指向 Function 的原型
 * 对象的原型链总是指向 Object 的原型
 */

/**
 * @原型链的尽头
 */
Object.prototype.__proto__ === null;

/**
 * @Function
 * 3 null
 */
Function.__proto__ === Function.prototype;
Function.prototype.__proto__ === Object.prototype;
Function.prototype.constructor === Function;

/**
 * @Object
 * 1/3 null
 */
Object.__proto__ === Function.prototype;
Object.prototype.__proto__ === null;
Object.prototype.constructor === Object;

/**
 * @函数
 * 3 null
 */

function Cat() {}
Cat.__proto__ === Function.prototype;
Cat.prototype.__proto__ === Object.prototype;
Cat.prototype.constructor === Cat;

/**
 * @object
 * 2 null
 */
const object = {};
object.__proto__ === Object.prototype;

/**
 * @实例对象
 * 3 null
 */
const cat1 = new Cat();
cat1.__proto__ === Cat.prototype;
cat1.__proto__.__proto__ === Object.prototype;
