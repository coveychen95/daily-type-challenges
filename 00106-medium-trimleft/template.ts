type TrimLeft<S> = S extends `${infer Left}${infer Rest}`
  ? Left extends ' ' | '\n' | '\t' ? TrimLeft<Rest> : S
  : S
