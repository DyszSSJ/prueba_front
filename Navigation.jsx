import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// screens
import HomeScreen from "./src/screens/HomeScreen";
import PostsScreen from "./src/screens/PostsScreen";
import LoginEmpresaScreen from "./src/screens/LoginEmpresaScreen";
import LoginEmpleado from "./src/screens/LoginEmpleado";
import EmployeesScreen from "./src/screens/EmployeesScreen";
import ViewEmployeeScreen from "./src/screens/ViewEmployeeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Posts",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "#6c757d",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="LoginEmpresaScreen"
        component={LoginEmpresaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginEmpleado"
        component={LoginEmpleado}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployeesScreen"
        component={EmployeesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewEmployeeScreen"
        component={ViewEmployeeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
