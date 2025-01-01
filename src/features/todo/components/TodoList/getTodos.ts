"use server";

import { db } from "../../../../db";
import { todosTable } from "../../../../db/schema";

export async function getTodos() {
  return db.select().from(todosTable);
}
