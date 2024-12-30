export type Todo = {
  id: number;
  description: string;
  createdAt: Date;
  completedAt: Date | null;
};

const todos: Todo[] = [
  {
    id: 1,
    description: "夕食の食材を確認してリストを作成する",
    createdAt: new Date("2024-12-27T10:00:00Z"),
    completedAt: null,
  },
  {
    id: 2,
    description: "明日のミーティング用スライドを完成させる",
    createdAt: new Date("2024-12-26T15:00:00Z"),
    completedAt: new Date("2024-12-28T20:00:00Z"),
  },
  {
    id: 3,
    description: "クローゼットの整理と床掃除をする",
    createdAt: new Date("2024-12-25T08:30:00Z"),
    completedAt: null,
  },
  {
    id: 4,
    description: "未読のビジネス書を1章読む",
    createdAt: new Date("2024-12-24T19:45:00Z"),
    completedAt: null,
  },
  {
    id: 5,
    description: "筋トレとランニングをする",
    createdAt: new Date("2024-12-23T14:15:00Z"),
    completedAt: new Date("2024-12-23T16:00:00Z"),
  },
];

export async function getTodos(): Promise<Todo[]> {
  await new Promise((res) => setTimeout(res, 400));
  return todos;
}

export async function createTodo(description: string) {
  await new Promise((res) => setTimeout(res, 200));

  const newTodo: Todo = {
    id: (todos.at(-1)?.id ?? 0) + 1,
    description,
    createdAt: new Date(),
    completedAt: null,
  };

  todos.push(newTodo);
}

export async function toggleTodo(id: number) {
  await new Promise((res) => setTimeout(res, 200));
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    throw new Error("not found");
  }

  todo.completedAt = todo.completedAt ? null : new Date();
}

export async function deleteTodo(id: number) {
  await new Promise((res) => setTimeout(res, 200));
  const index = todos.findIndex((todo) => todo.id === id);

  if (index < 0) {
    throw new Error("not found");
  }

  todos.splice(index, 1);
}
