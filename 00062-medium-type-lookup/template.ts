// 1. 遍历联合类型 union
//    extends
// 2. 提取其中 union 一个
//    extends ? U : never

type LookUp<U, T> = U extends { type: T } ? U : never