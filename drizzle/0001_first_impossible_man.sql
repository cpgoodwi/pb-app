CREATE TABLE `singles_games` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`opponent_id` integer NOT NULL,
	`score_you` integer NOT NULL,
	`score_opp` integer NOT NULL
);
