import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_COMPANY } from "../gql/MutationsAndQuerys";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { setLocal } from "../helpers/localStorage";
import { useToast } from "../hooks/useToast";

const FormCompany = () => {
  const navigation = useNavigation();
  const { showToast } = useToast();
  const [loginCompany] = useMutation(LOGIN_COMPANY);
  const [formInfo, setFormInfo] = useState({
    userName: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const { data } = await loginCompany({
        variables: {
          input: {
            userName: formInfo.userName,
            password: formInfo.password,
          },
        },
      });
      setLocal("token", data?.companyLogin?.token);
      showToast("success", "Success", "Company logged in successfully");
      navigation.navigate("EmployeesScreen");
      navigation.reset({
        index: 0,
        routes: [{ name: "EmployeesScreen" }],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setFormInfo({
        userName: "",
        password: "",
      });
    }
  };

  return (
    <View style={{ alignItems: "center", marginHorizontal: 17, marginTop: 10 }}>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        style={styles.container}
      >
        <TextInput
          placeholder="Username"
          placeholderTextColor={"#7f7f7f"}
          style={{ color: "black", fontSize: 16 }}
          onChangeText={(text) => setFormInfo({ ...formInfo, userName: text })}
          value={formInfo.userName}
          autoCapitalize="none"
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        style={styles.container}
      >
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#7f7f7f"}
          secureTextEntry
          style={{ color: "black", fontSize: 16 }}
          onChangeText={(text) => setFormInfo({ ...formInfo, password: text })}
          value={formInfo.password}
          autoCapitalize="none"
        />
      </Animated.View>

      <Animated.View
        style={{ width: "100%" }}
        entering={FadeInDown.delay(400).duration(1000).springify()}
      >
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default FormCompany;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fa",
    borderWidth: 2,
    borderColor: "#ced4da",
    padding: 15,
    borderRadius: 50,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 20,
  },

  buttontext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
