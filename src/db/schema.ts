import { sql } from "drizzle-orm";
import {
  customType,
  integer,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

// TypeScriptではDate、DB上ではISOのtextとして扱うCustom Types
const isoDateTime = customType<{
  data: Date; // TypeScript上の型
  driverData: string; // DB上の型
}>({
  // DB上の型
  dataType: (): string => "text",

  // TypeScript -> DBの変換
  toDriver: (value: Date): string => value.toISOString(),

  // DB -> TypeScriptの変換
  fromDriver: (value: string): Date => new Date(value),
});

export const currentTimestampSql = sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`;

export const todosTable = sqliteTable("todos_table", {
  id: integer().primaryKey({ autoIncrement: true }),
  description: text().notNull(),
  createdAt: isoDateTime().default(currentTimestampSql).notNull(),
  completedAt: isoDateTime(),
});

export type Todo = typeof todosTable.$inferSelect;
