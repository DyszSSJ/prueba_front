import { View, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import FormCompany from "../components/FormCompany";

export default function LoginEmpresaScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <Image
        style={{ position: "absolute", height: "100%", width: "100%" }}
        source={require("../assets/images/background.png")}
      />
      <View style={styles.container}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("../assets/images/light.png")}
          style={{ height: 225, width: 90 }}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={require("../assets/images/light.png")}
          style={{ height: 160, width: 65, opacity: 0.75 }}
        />
      </View>
      <View style={styles.containerForm}>
        <View style={{ alignItems: "center" }}>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={styles.titulo}
          >
            Company
          </Animated.Text>
        </View>
        {/* Formulario */}
        <FormCompany />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 36,
    letterSpacing: 1,
    marginBottom: 5,
    marginTop: 8,
  },

  containerForm: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 10,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    width: "100%",
  },
});
