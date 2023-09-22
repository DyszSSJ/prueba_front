import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

// Función para obtener un valor del almacenamiento local
export const getLocal = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error("Error al obtener valor del almacenamiento local:", error);
    return null;
  }
};

// Función para almacenar un valor en el almacenamiento local
export const setLocal = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(
      "Error al almacenar valor en el almacenamiento local:",
      error
    );
  }
};

// Función para decodificar un token JWT
export const decode = (token) => {
  return jwtDecode(token);
};
