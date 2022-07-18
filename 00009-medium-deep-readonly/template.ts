// 1. 递归
//    对象 or 数组 的深层次递归
type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never 
    ? T[K] 
    : DeepReadonly<T[K]>
}


// type A = keyof 'a' extends never ? true : false // false
// type B = keyof {} extends never ? true : false // true
// type C = keyof {} // never
