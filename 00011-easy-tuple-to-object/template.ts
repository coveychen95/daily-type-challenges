type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}
// 1. 遍历数组
//  - T[number]