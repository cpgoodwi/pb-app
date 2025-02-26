import { Text, View, StyleSheet } from "react-native";

export default function DrillScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text>Drill from Tabs</Text>
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