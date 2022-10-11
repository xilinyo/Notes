/**
 * @返回指定对象的原型
 * Object.getPrototypeOf(object)
 */

let prototype = {};
let object = Object.create(prototype);

Object.getPrototypeOf(object) === prototype;
