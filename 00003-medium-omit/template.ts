// 1. 返回一个对象
// 2. 遍历对象
// 3. 提取对象 属性 值
// 4. 过滤 属性

// 方法一：
type MyOmit<T, K extends keyof T> = Pick<
  T,
  {
    [P in keyof T]: P extends K ? never : P;
  }[keyof T]
>;

// 方法二：
type MyOmit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 方法三：
type MyOmit3<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// 方法四：
type MyOmit4<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};