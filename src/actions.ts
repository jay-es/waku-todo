"use server";

import { eq, sql } from "drizzle-orm";
import { db } from "./db";
import { todosTable } from "./db/schema";

export async function createTodo(description: string) {
  await db.insert(todosTable).values({ description });
}

export async function toggleTodo(id: number) {
  const [todo] = await db
    .select()
    .from(todosTable)
    .where(eq(todosTable.id, id));

  if (!todo) {
    throw new Error("not found");
  }

  await db
    .update(todosTable)
    .set({ completedAt: todo.completedAt ? null : sql`(CURRENT_TIMESTAMP)` })
    .where(eq(todosTable.id, id));
}

export async function deleteTodo(id: number) {
  await db.delete(todosTable).where(eq(todosTable.id, id));
}
