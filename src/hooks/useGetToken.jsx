import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useGetToken = () => {
  const [userData, setUserData] = useState({
    id: "",
    type: "",
    name: "",
    userName: "",
  });

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const decode = jwtDecode(token);
          setUserData({
            id: decode.id,
            type: decode.type,
            name: decode.name,
            userName: decode.userName,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);

  return {
    userData,
  };
};

export default useGetToken;
