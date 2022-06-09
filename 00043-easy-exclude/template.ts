
type MyExclude<T, U> = T extends U ? never : T

// 1. 两个元组是否包含关系 extends