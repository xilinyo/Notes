
/**
 * @范型约束
 */

interface Lengthwise {
  length: number;
}


function getLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}