import { Stack } from "expo-router";
// import Index from './indexndex';  // Tela principal do app
// import LoginScreen from './tela'; // Tela de login

// const Stack = createStackNavigator();

// export default function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
//       setUser(loggedUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {user ? (
//           <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
//         ) : (
//           <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

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
      <Stack.Screen name="biblioteca" options={{title: "Bibliotecas Famosas"}}/>
      <Stack.Screen name="bibliotecasingle/[id]" options={{title: "bibliotecas"}}/>
      <Stack.Screen name="flex"options={{title: "Flex"}}/>
    </Stack>
  );
}
