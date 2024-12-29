export type Todo = {
  id: number;
  description: string;
  createdAt: Date;
  dueAt: Date;
  completed: boolean;
};

const todos: Todo[] = [
  {
    id: 1,
    description: "夕食の食材を確認してリストを作成する",
    createdAt: new Date("2024-12-27T10:00:00Z"),
    dueAt: new Date("2024-12-30T18:00:00Z"),
    completed: false,
  },
  {
    id: 2,
    description: "明日のミーティング用スライドを完成させる",
    createdAt: new Date("2024-12-26T15:00:00Z"),
    dueAt: new Date("2024-12-29T09:00:00Z"),
    completed: true,
  },
  {
    id: 3,
    description: "クローゼットの整理と床掃除をする",
    createdAt: new Date("2024-12-25T08:30:00Z"),
    dueAt: new Date("2024-12-31T12:00:00Z"),
    completed: false,
  },
  {
    id: 4,
    description: "未読のビジネス書を1章読む",
    createdAt: new Date("2024-12-24T19:45:00Z"),
    dueAt: new Date("2024-12-28T22:00:00Z"),
    completed: false,
  },
  {
    id: 5,
    description: "筋トレとランニングをする",
    createdAt: new Date("2024-12-23T14:15:00Z"),
    dueAt: new Date("2024-12-27T20:00:00Z"),
    completed: true,
  },
];

export async function getTodos(): Promise<Todo[]> {
  await new Promise((res) => setTimeout(res, 400));
  return todos;
}
