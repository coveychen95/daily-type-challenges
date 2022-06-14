// 1. 提取函数返回值
// 2. 推断函数返回值类型
type MyReturnType<T extends (...args: any[]) => any> =
  T extends (...args: any[]) => infer R ? R : never