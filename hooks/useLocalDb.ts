import {
  players as playersTable,
  Player,
  NewPlayer,
  singlesGames as singlesGamesTable,
  SinglesGame,
  NewSinglesGame,
} from "@/db/schema";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";

const QUERY_KEYS = {
  ALL_PLAYERS: ["players"],
  PLAYER: (id: string) => ["players", id],

  ALL_SINGLES_GAMES: ["singles_games"],
  SINGLES_GAME: (id: string) => ["singlesgames", id],
};

export function usePlayerData(db: ExpoSQLiteDatabase) {
  const queryClient = useQueryClient();

  const {
    data: allPlayers,
    isLoading,
    error,
  } = useQuery({
    queryKey: QUERY_KEYS.ALL_PLAYERS,
    queryFn: async (): Promise<Player[]> => {
      return db.select().from(playersTable).all();
    },
  });

  const createPlayer = useMutation({
    mutationFn: async (newPlayer: NewPlayer) => {
      const result = await db
        .insert(playersTable)
        .values(newPlayer)
        .returning();
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.ALL_PLAYERS });
    },
  });

  return { allPlayers, isLoading, error, createPlayer };
}

export function useSinglesGameData(db: ExpoSQLiteDatabase) {
  const queryClient = useQueryClient();

  const {
    data: allSinglesGames,
    isLoading,
    error,
  } = useQuery({
    queryKey: QUERY_KEYS.ALL_SINGLES_GAMES,
    queryFn: async (): Promise<SinglesGame[]> => {
      return db.select().from(singlesGamesTable).all();
    },
  });

  const createSinglesGame = useMutation({
    mutationFn: async (newSinglesGame: NewSinglesGame) => {
      const result = await db
        .insert(singlesGamesTable)
        .values(newSinglesGame)
        .returning();
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.ALL_SINGLES_GAMES });
    },
  });

  return { allSinglesGames, isLoading, error, createSinglesGame };
}
