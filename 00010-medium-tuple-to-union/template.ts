type TupleToUnion<T extends any[]> = T[number]

// type arr = ['str', 123, false]
// type test = TupleToUnion<arr> // false | "str" | 123