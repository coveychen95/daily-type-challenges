// 需求：获取参数列表，返回参数类型
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

// 1. 获取函数参数列表 arguments (...args) => 
// 2. 判断参数类型 （简单类型 复杂类型）