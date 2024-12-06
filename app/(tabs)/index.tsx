import { Text, View, StyleSheet } from "react-native";

export default function HistoryScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text>Home/History from Tabs</Text>
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