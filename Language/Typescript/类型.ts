/**
 * @基础类型
 */
type isBase = string | number | bigint | boolean | symbol | object;

/**
 * @范型
 */
type T = "Generic - 泛型";

/**
 * @联合类型
 * type | type
 */
type isUnion = Array<T> | Array<isBase>;

/**
 * @元组类型
 * [type, type]
 */
type isTuple = [null, undefined, void, unknown, never];
