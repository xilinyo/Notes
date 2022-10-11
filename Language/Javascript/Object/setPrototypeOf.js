/**
 * @为对象定义原型链指向
 * Object.setPrototypeOf(obj, prototype)
 */

const animal = { type: "animal" };
let dog = { say: "汪汪汪" };

dog.__proto__ === Object.prototype; // true;

Object.setPrototypeOf(dog, animal);

dog.type; // "animal";
dog.__proto__ === animal; // true;
dog.__proto__ === Object.prototype; // false;

/**
 * @举例
 * 没有改变c.prototype
 */
function a() {}
a.prototype.type = "a";

function c() {}
c.prototype.type = "c";

Object.setPrototypeOf(c.prototype, a.prototype);
c.prototype; // a {type: 'c', constructor: ƒ}
b.prototype.__proto__ === a.prototype;
