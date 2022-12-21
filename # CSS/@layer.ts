/**
 * @级联
 * 
 * @单声明 @layer utilities {  创建一个名为 utilities 的级联层  }
 * @引入样式 @import(utilities.css) layer(utilities);
 * @多声明 @layer theme, layout, utilities 优先级由低到高
 * 
 */
module layer {
  interface layer {

  }
}