type Equals<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;
type Includes<T extends readonly any[], U> = T extends [infer F ,...infer Rest]?Equals<F, U> extends true ? true : Includes<Rest,U> : false
// 1. 遍历数组
// 2. 数组每一项对比
// 3. 只要有一个符合 返回 true 否则 false