import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useGetToken from "../hooks/useGetToken";
import { useLazyQuery } from "@apollo/client";
import { GET_INFO_EMPLOYE } from "../gql/MutationsAndQuerys";
import ButtonSignOut from "../components/ButtonSignOut";
import Loading from "../components/Loading";

const ViewEmployeeScreen = () => {
  const { userData } = useGetToken();
  const [getInfoEmployee, { loading }] = useLazyQuery(GET_INFO_EMPLOYE);

  useEffect(() => {
    if (userData?.type === "employee") {
      getInfoEmployee({
        variables: {
          id: userData?.id,
        },
      });
    }
  }, [userData]);

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.container}>
            <ButtonSignOut />
          </View>
          <View style={styles.bienvenida}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.userName}>{userData?.name}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ViewEmployeeScreen;

const styles = StyleSheet.create({
  bienvenida: {
    alignItems: "center",
    marginHorizontal: 17,
    marginTop: 10,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },

  userName: {
    fontSize: 20,
    fontWeight: "normal",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
