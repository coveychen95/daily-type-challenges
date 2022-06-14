// ts Parameters
// - 该类型可以获得函数的参数类型组成的元组类型。
// 1. 返回一个函数参数的元组  T extends (...args: any[]) => any ? [] : never
// 2. 获取函数参数 ...args
// 3. 推断参数数组 infer

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never