
/**
 * @react16
 * 双缓存技术
 * 在内存中构建并直接替换的技术
 *
 * 预设限制
 * 1. 只对同级元素进行diff，如果某元素在更新之后跨越了层级，那么React不会复用它
 * 2. 两个不同类型的元素会产生两颗不同的树，即如果元素由div变成p，那么React会删除div及其子孙节点，新建p及其子孙节点
 * 3. 开发者可以使用key参数表示哪些元素在不同的渲染下保持稳定
 */