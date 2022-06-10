type MyAwaited<T extends Promise<any>> =  T extends Promise<infer R> ? 
  R extends Promise<any> ?
    MyAwaited<R>
    : R
  : never
// 1. promise
// 2. 类型推断 infer
// 3. 判断 三元运算