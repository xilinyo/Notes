/** @属性转换成可选 */
type _Partial<T> = {
  [P in keyof T]?: T[P] | undefined;
};

/** @属性转换成必填 */
type __Required<T> = {
  [P in keyof T]-?: T[P];
};

/** @属性转换成只读 */
type _Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/** @提取T独有的属性 @用于类型 */
type _Exclude<T, U> = T extends U ? never : T;

/** @排出指定属性 */
type _Omit<T, K extends string | number | symbol> = {
  [P in _Exclude<keyof T, K>]: T[P];
};

/** @提取指定属性 */
type _Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/** @创建新的属性并指定类型 */
type _Record<K extends string | number | symbol, T> = {
  [P in K]: T;
};

/** @提取共有的属性 */
type _Extract<T, U> = T extends U ? T : never;

/** @排除非空类型 */
type _NonNullable<T> = T & {};

/** @属性指定字符串类型 */
type StringMap<T> = {
  [P in keyof T]: string;
};

/** @全部转大写 */
type _Uppercase<S extends string> = "TO DO ...";

/** @全部转小写 */
type _Lowercase<S extends string> = "TO DO ...";

/** @首字母大写 */
type _Capitalize<S extends string> = "TO DO ...";

/** @首字母小写 */
type _Uncapitalize<S extends string> = "TO DO ...";
