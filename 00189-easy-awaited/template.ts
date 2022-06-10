type MyAwaited<T extends Promise<any>> =  T extends Promise<infer R> ? 
  R extends Promise<any> ?
    MyAwaited<R>
    : R
  : never
// 1. promise