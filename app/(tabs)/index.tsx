import PlayerForm from "@/components/PlayerForm";
import PlayerList from "@/components/PlayerList";
import { useSQLiteContext } from "expo-sqlite";
import { Text, View, StyleSheet } from "react-native";

export default function HistoryScreen() {
  const db = useSQLiteContext();

  return (
    <View style={styles.container}>
      <Text>Home/History from Tabs</Text>
      <PlayerForm />
      <PlayerList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
});
