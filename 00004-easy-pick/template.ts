type MyPick<T, K extends keyof T> = { [P in K]: T[P]; }


// For example

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}


// Record
// 以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。
// type Coord = Record<'x' | 'y', number>;

// // 等同于
// type Coord = {
// 	x: number;
// 	y: number;
// }

// Partial
// 将类型定义的所有属性都修改为可选。

// type Coord = Partial<Record<'x' | 'y', number>>;

// // 等同于
// type Coord = {
// 	x?: number;
// 	y?: number;
// }

// Readonly
// 不管是从字面意思，还是定义上都很好理解：将所有属性定义为自读。
// type Coord = Readonly<Record<'x' | 'y', number>>;

// // 等同于
// type Coord = {
//     readonly x: number;
//     readonly y: number;
// }

// // 如果进行了修改，则会报错：
// const c: Coord = { x: 1, y: 1 };
// c.x = 2; // Error: Cannot assign to 'x' because it is a read-only property.