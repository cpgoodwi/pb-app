import { Stack } from "expo-router";
import { Suspense } from "react";
import { ActivityIndicator } from "react-native";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "@/drizzle/migrations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const DB_NAME = "local_data.db";

const queryClient = new QueryClient();

export default function RootLayout() {
  // TODO: implement web database options OR fallback for database error
  const expoDb = openDatabaseSync(DB_NAME);
  expoDb.execSync("PRAGMA journal_mode = WAL");
  expoDb.execSync("PRAGMA foreign_keys = ON");
  const db = drizzle(expoDb);
  // TODO: add display for migration status
  const { success, error } = useMigrations(db, migrations);

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <QueryClientProvider client={queryClient}>
        <SQLiteProvider
          databaseName={DB_NAME}
          options={{ enableChangeListener: true }}
          useSuspense
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SQLiteProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
