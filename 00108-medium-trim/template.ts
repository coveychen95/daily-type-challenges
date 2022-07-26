type Space = ' ' | '\t' | '\n'

type TrimRight<S extends string> = S extends `${infer Rest}${Space}`
  ? TrimRight<Rest>
  : S

type Trim<S extends string> = TrimLeft<TrimRight<S>>