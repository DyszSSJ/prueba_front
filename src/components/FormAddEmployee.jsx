import { StyleSheet, Text, View, TextInput } from "react-native";

const FormAddEmployee = ({ formInfo, setFormInfo }) => {
  return (
    <View>
      <View>
        <Text style={styles.label}>Name</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setFormInfo({ ...formInfo, name: text })}
              value={formInfo.name}
              placeholder="janesmith"
              autoCapitalize="none"
              placeholderTextColor={"#7f7f7f"}
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.label}>Username</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(text) =>
                setFormInfo({ ...formInfo, userName: text })
              }
              value={formInfo.userName}
              placeholder="jane_123"
              autoCapitalize="none"
              placeholderTextColor={"#7f7f7f"}
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(text) =>
                setFormInfo({ ...formInfo, password: text })
              }
              value={formInfo.password}
              placeholder="********"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor={"#7f7f7f"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FormAddEmployee;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#16425b",
    marginTop: 15,
  },

  inputContainer: {
    marginTop: 8,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },

  input: {
    flex: 1,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "#cccccc",
    fontSize: 16,
  },
});
