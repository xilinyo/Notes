interface ArrayHOFunc<T, U> {
  (callback: (element, index, array) => T, thisArg?): U;
}

class MYClass<T> {
  length: number;

  static from: (arrayLike, mapFn: () => unknown, thisArg) => `new Array`;
  static isArray: (value) => boolean;

  toLocaleString: () => `string`;
  toString: () => `string`;

  join: (separator: `string = ','`) => string | "";
  fill: (
    item,
    start: `number = 0`,
    end: `number = this.length`
  ) => `updated Array`;
  includes: (searchElement, fromIndex: `number = 0`) => boolean;
  at: (index: number) => `item`;
  of: (...items) => `new Array`;

  /** @添加删除 */
  pop: () => `deleted last item`;
  shift: () => `deleted first item`;
  unshift: () => `to first, return update length`;
  push: (item) => `to last , return updated length`;
  reverse: () => `reversed Array includes likedArray`;
  concat: (...array) => `new Array(...this,...array)`;

  reduce: (
    callback: (
      returnValue: `unknown = initialValue | array[0]`,
      item: `unknown = initialValue ? array[0] : array[1]`,
      index: `number = initialValue ? 0 : 1`,
      array
    ) => unknown,
    initialValue
  ) => `return Value`;
  reduceRight: (
    callback: (
      returnValue: `unknown = initialValue | array[this.length - 1]`,
      item: `unknown = initialValue ? array[this.length - 1] : array[this.length - 2]`,
      index: `number = initialValue ? this.length - 1 : this.length - 2`,
      array
    ) => unknown,
    initialValue
  ) => `return Value`;
  find: (cb: (item, index, array) => boolean, _this?) => `item` | undefined;
  findLast: (cb: (item, index, array) => boolean, _this?) => `item` | undefined;
  findIndex: (cb: (item, index, array) => boolean, _this?) => `index` | -1;
  findLastIndex: (cb: (item, index, array) => boolean, _this?) => `index` | -1;
  lastIndexOf: (item, fromIndex: `number = this.length - 1`) => `index` | -1;
  indexOf: (searchElement, fromindex: `number = 0`) => `index` | -1;

  /** @高阶函数 合成，过滤，判断 */
  flat(depth: number = 1) {
    let arr: any[] = [];
    let idx = 0;
    if (depth > 0) {
      while (idx < this.length) {
        let item = this[idx];
        if (Array.isArray(item)) {
          [].push.apply(arr, ...item);
        } else {
          arr.push(item);
        }
        idx++;
      }
      return this.flat.call(arr, depth - 1);
    }
    return this;
  }
  // some: ArrayHOFunc<boolean, boolean>;
  some: (cb: (item, index, array) => boolean, _this?) => boolean;
  every: (cb: (item, index, array) => boolean, _this?) => boolean;
  forEach: (cb: (item, index, array) => undefined, _this?) => undefined;
  filter: (cb: (item, index, array) => boolean, _this?) => Array<T>;
  flatMap: (cb: (item, index, array) => T, _this?) => Array<T>;
  map(callback: (item, index, array) => unknown, thisArg?) {
    let array: any[] = [];
    let idx = 0;
    while (idx < this.length) {
      const item = callback.call(thisArg, this[idx], idx, this);
      array.push(item);
      idx++;
    }
    return array;
  }

  splice: (start, deleteCount, ...items) => `Delete Array`;
  slice: (
    start: `number = 0`,
    end: `number = this.length exclude end`
  ) => `Copyed Array`;

  copyWithin: (
    target: number,
    start: `number = 0`,
    end: ` number = this.length exclude end`
  ) => `Updated Array`;

  sort: (compareFn: (a, b) => unknown) => `sorted socure Array`;

  /** @数组提取 */
  keys: () => `Array Iterator`;
  values: () => `Array Iterator`;
  entries() {
    return function* () {
      let index = 0;
      while (index < this.length) {
        yield [index, this[index]];
        index++;
      }
    };
  }
}
