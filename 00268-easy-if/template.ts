type If<C extends boolean, T, F> = C extends true
  ? T
  : F

// 1. 如何约束为 Boolean 类型  C extends boolean