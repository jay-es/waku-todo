import { sql } from "drizzle-orm";
import * as t from "drizzle-orm/sqlite-core";

export const todosTable = t.sqliteTable("todos_table", {
  id: t.int().primaryKey({ autoIncrement: true }),
  description: t.text().notNull(),
  createdAt: t
    .text()
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  completedAt: t.text(),
});

export type Todo = typeof todosTable.$inferSelect;
