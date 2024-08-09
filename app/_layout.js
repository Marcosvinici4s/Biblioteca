import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010101",
          borderBottomWidth: 0, 
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", 
      }}
    >
      <Stack.Screen name="index" options={{ title: "Biblioteca M" }} />
      <Stack.Screen name="products" options={{ title: "Menu M" }} />
      <Stack.Screen name="booksingle/[id]" options={{ title: 'Biblioteca M' }} />
      <Stack.Screen name="about2"options={{title: "Sobre2 WP"}}/>
    </Stack>
  );
}
