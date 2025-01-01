import { db } from ".";
import { todosTable } from "./schema";

type TodoInput = typeof todosTable.$inferInsert;

const todos: TodoInput[] = [
  {
    description: "夕食の食材を確認してリストを作成する",
    createdAt: "2024-12-27T10:00:00Z",
    completedAt: null,
  },
  {
    description: "明日のミーティング用スライドを完成させる",
    createdAt: "2024-12-26T15:00:00Z",
    completedAt: "2024-12-28T20:00:00Z",
  },
  {
    description: "クローゼットの整理と床掃除をする",
    createdAt: "2024-12-25T08:30:00Z",
    completedAt: null,
  },
  {
    description: "未読のビジネス書を1章読む",
    createdAt: "2024-12-24T19:45:00Z",
    completedAt: null,
  },
  {
    description: "筋トレとランニングをする",
    createdAt: "2024-12-23T14:15:00Z",
    completedAt: "2024-12-23T16:00:00Z",
  },
];

await db.delete(todosTable);
await db.insert(todosTable).values(todos);
