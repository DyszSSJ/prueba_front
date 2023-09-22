import { Stack, Button } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack fill center spacing={10}>
      <Button
        title="Login empresa"
        color="#184e77"
        tintColor="white"
        onPress={() => navigation.navigate("LoginEmpresaScreen")}
      />
      <Button
        title="Login empleado"
        color="#184e77"
        tintColor="white"
        onPress={() => navigation.navigate("LoginEmpleado")}
      />
      <Button
        title="Ver posts"
        color="#184e77"
        tintColor="white"
        onPress={() => navigation.navigate("PostsScreen")}
      />
    </Stack>
  );
};

export default HomeScreen;
