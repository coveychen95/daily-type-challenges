
type MyAwaited2<T extends any> = T extends Promise<infer P> ? P : T

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: MyAwaited2<T[P]>
}>