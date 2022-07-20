type Chainable<T = {}> = {
  option(key: string, value: any): any
  get(): T
}