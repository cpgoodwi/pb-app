import { drizzle } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";
import { Text, View, StyleSheet } from "react-native";
import { usePlayerData } from "@/hooks/useLocalDb";

// type PlayerListProps = {
//   players: Player[] | null;
// };

export default function PlayerList() {
  const expoDb = useSQLiteContext();
  const db = drizzle(expoDb);
  const { allPlayers, error, isLoading } = usePlayerData(db);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (!allPlayers) {
    return <></>;
  }

  return (
    <View>
      {allPlayers.map((player) => (
        <View key={player.id}>
          <Text>{player.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "column",
  },
});
