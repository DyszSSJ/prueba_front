import { StyleSheet, Text, View, Image } from "react-native";

const CardEmployees = ({ data }) => {
  return (
    <View>
      {data?.getEmployees?.map((employee) => (
        <View key={employee.id} style={styles.card}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={require("../assets/images/default-profile-picture1.jpg")}
          />
          <View>
            <Text style={styles.name}>{employee.name}</Text>
            <Text style={styles.userName}>{employee.userName}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CardEmployees;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },

  userName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#495057",
  },

  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    marginBottom: 10,
    gap: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
