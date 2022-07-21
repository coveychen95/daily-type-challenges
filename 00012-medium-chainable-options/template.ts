type Merge<T, U> = {
  [P in Exclude<keyof T, keyof U>]: T[P]
} & {
  [N in keyof U]: U[N]
}

type Chainable<T = {}> = {
  // option<K extends string, V extends any>(key: K extends keyof T ? never : K, value: V): Chainable<T & Record<K, V>>
  option<K extends string, V>(key: K, value: V): Chainable<Merge<T, {[P in K]: V}>>
  // option<K extends string, V>(key: K, value: V): Chainable<T & { [key in K]: V }>,
  get(): T 
}