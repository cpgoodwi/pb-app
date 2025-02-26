import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // TODO: make icon for home/history
        }}
      />
      <Tabs.Screen
        name="drill"
        options={{
          title: "Drill",
          // TODO: make icon for drilling
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          title: "Play",
          // TODO: make icon for playing
        }}
      />
    </Tabs>
  );
}
