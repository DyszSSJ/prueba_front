import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { setLocal } from "../helpers/localStorage";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ButtonSignOut = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    setLocal("token", "");
    navigation.navigate("HomeScreen");
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeScreen" }],
    });
  };
  return (
    <View>
      <TouchableOpacity onPress={handleLogout} style={styles.container}>
        <MaterialCommunityIcons name="door-closed" size={25} color="#f2f2f2" />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSignOut;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bf0603",
    padding: 10,
    borderRadius: 50,
  },
});
