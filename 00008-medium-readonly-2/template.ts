// 1. 处理两个对象
// T 中 匹配 K ，匹配到设置为 readonly
// ??? K extends keyof T = keyof T
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>