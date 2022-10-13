/**
 * @创建一个对象并为其定义原型链指向
 * 第二个可选参数为创建对象的可枚举属性
 * Object.create(proto, propertiesObject)
 */

function _create(proto, props = {}) {
  let obj = {};
  Object.setPrototypeOf(obj, proto);

  if (Object.keys(props).length) {
    Object.defineProperties(obj, props);
  }
  return obj;
}

/**
 * @举例
 */

const animal = { type: "animal" };
const dog = Object.create(animal, { say: { value: "汪汪汪" } });

dog; // {say: '汪汪汪'}
dog.type; // 'animal'
dog.__proto__ === animal; // true

/**
 * @举例
 * b.prototype 终究是被改变的
 */

function a() {}
a.prototype.type = "a";

function b() {}
b.prototype.type = "b";

b.prototype = Object.create(a.prototype, { type: { value: "b" } });
b.prototype; // a {type: 'b'}
b.prototype.__proto__ === a.prototype;
