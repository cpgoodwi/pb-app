import { Text, View, StyleSheet } from "react-native";

export default function HistoryScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text>History from Tabs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {

  }
});