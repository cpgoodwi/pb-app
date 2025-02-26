import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const players = sqliteTable("players", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  profile: int(), // optional to match with other app user profile
});

export type Player = typeof players.$inferSelect;
