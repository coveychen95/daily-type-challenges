type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never

// 1. 返回一个具体值
// - 三元运算
// 2. 提取数组第一项 infer
// - infer 推断
// 3. 提取失败处理 never
// - never