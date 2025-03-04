import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const players = sqliteTable("players", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  profile: int(), // optional to match with other app user profile
});

export type Player = typeof players.$inferSelect;
export type NewPlayer = typeof players.$inferInsert;

export const singlesGames = sqliteTable("singles_games", {
  id: int().primaryKey({ autoIncrement: true }),
  opponent_id: int().notNull(),
  // start: int(),
  // end: int(),
  score_you: int().notNull(),
  score_opp: int().notNull(),
});

export type SinglesGame = typeof singlesGames.$inferSelect;
export type NewSinglesGame = typeof singlesGames.$inferInsert;
