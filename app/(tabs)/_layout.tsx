import { Tabs } from "expo-router";

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{
          title: "Drill",
          // TODO: make icon for drilling
        }}
      />
      <Tabs.Screen 
        name="history" 
        options={{
          title: "History",
          // TODO: make icon for history
        }}
      />
      <Tabs.Screen 
        name="play" 
        options={{
          title: "Play",
          // TODO: make icon for drilling
        }}
      />
    </Tabs>
  );
}