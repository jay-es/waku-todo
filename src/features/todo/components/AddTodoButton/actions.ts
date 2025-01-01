"use server";

import { db } from "../../../../db";
import { todosTable } from "../../../../db/schema";

export async function createTodo(description: string) {
  await db.insert(todosTable).values({ description });
}
