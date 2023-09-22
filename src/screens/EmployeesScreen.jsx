import { StyleSheet, View, Text } from "react-native";
import ButtonAddEmployee from "../components/ButtonAddEmployee";
import { useQuery } from "@apollo/client";
import { GET_EMPLOYEE } from "../gql/MutationsAndQuerys";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CardEmployees from "../components/CardEmployees";
import useGetToken from "../hooks/useGetToken";
import ButtonSignOut from "../components/ButtonSignOut";
import Loading from "../components/Loading";

const EmployeesScreen = () => {
  const { userData } = useGetToken();
  const { data, loading, refetch } = useQuery(GET_EMPLOYEE, {
    variables: {
      idCompany: userData?.type === "company" && userData?.id,
    },
  });

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
      enableAutomaticScroll={true}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, padding: 20 }}
    >
      {loading ? (
        <Loading />
      ) : (
        <View
          style={{
            marginBottom: 25,
          }}
        >
          <View style={styles.container}>
            <View style={styles.containerButtons}>
              <ButtonSignOut />
              <ButtonAddEmployee refetch={refetch} />
            </View>
            {data?.getEmployees.length === 0 ? (
              <Text style={styles.empleados}>No hay empleados</Text>
            ) : (
              <>
                <CardEmployees data={data} />
              </>
            )}
          </View>
        </View>
      )}
    </KeyboardAwareScrollView>
  );
};

export default EmployeesScreen;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
  },

  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  empleados: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 23,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});
