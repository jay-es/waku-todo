"use server";

import { eq } from "drizzle-orm";
import { db } from "../../../../db";
import { currentTimestampSql, todosTable } from "../../../../db/schema";

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
    .set({ completedAt: todo.completedAt ? null : currentTimestampSql })
    .where(eq(todosTable.id, id));
}

export async function deleteTodo(id: number) {
  await db.delete(todosTable).where(eq(todosTable.id, id));
}
