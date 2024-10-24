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
      <Stack.Screen name="notification" options={{ title: 'Adicione' }} />
      <Stack.Screen name="index" options={{ title: "Biblioteca M" }} />
      <Stack.Screen name="products" options={{ title: "Menu M" }} />
      <Stack.Screen name="biblioteca" options={{ title: "Bibliotecas Famosas" }} />
      <Stack.Screen name="bibliotecasingle/[id]" options={{ title: "Bibliotecas" }} />
      <Stack.Screen name="flex" options={{ title: "Flex" }} />
    </Stack>
  );
}
