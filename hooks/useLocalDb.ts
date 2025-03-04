import { players as playersTable, Player, NewPlayer } from "@/db/schema";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";

const QUERY_KEYS = {
  ALL_PLAYERS: ["players"],
  PLAYER: (id: string) => ["players", id],
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
      const result = await db.select().from(playersTable).all();
      return result;
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

export function useGameData(db: ExpoSQLiteDatabase) {}
