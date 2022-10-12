/**
 * @类型断言
 */
const _isAny: unknown = "类型断言";
const NAL: number = (<string>_isAny).length; /**   */ /* 方式一 */
const IAL: number = (_isAny as string).length; /** */ /* 方式二 */

/**
 * @非空断言
 */
let _isEmpty: string | null | undefined;
const IEL = _isEmpty!.length; /**   */ /* !表示该对象不是空 */

/**
 * @确定赋值断言
 */
let _isNumber!: number;
console.log(_isNumber); /**   */ /* 没有断言会报错 */
