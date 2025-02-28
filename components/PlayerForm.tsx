import { usePlayerData } from "@/hooks/useLocalDb";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

export default function PlayerForm() {
  const expoDb = useSQLiteContext();
  const db = drizzle(expoDb);
  const { createPlayer } = usePlayerData(db);

  const [name, setName] = useState("");

  const handlePress = () => {
    createPlayer.mutate({ name });
    setName("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(newText) => setName(newText)}
        placeholder="Name"
        defaultValue={name}
      />
      <Button title="New Player" onPress={handlePress} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
