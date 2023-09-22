import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_EMPLOYEE } from "../gql/MutationsAndQuerys";
import { useToast } from "../hooks/useToast";
import FormAddEmployee from "./FormAddEmployee";
import useGetToken from "../hooks/useGetToken";

const ModalAddEmployes = ({ handleModal, refetch }) => {
  const { userData } = useGetToken();
  const [registerEmployee] = useMutation(REGISTER_EMPLOYEE, {
    onCompleted: () => {
      refetch();
    },
  });
  const { showToast } = useToast();
  const [formInfo, setFormInfo] = useState({
    name: "",
    userName: "",
    password: "",
  });

  const handleAddEmployee = async () => {
    try {
      await registerEmployee({
        variables: {
          input: {
            name: formInfo.name,
            userName: formInfo.userName,
            password: formInfo.password,
            idCompany: userData.type === "company" ? userData.id : null,
          },
        },
      });
      showToast("success", "Success", "Employee added successfully.");
      handleModal();
      refetch();
    } catch (error) {
      console.log(error);
    } finally {
      setFormInfo({
        name: "",
        userName: "",
        password: "",
      });
    }
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Add employee</Text>
        <FormAddEmployee formInfo={formInfo} setFormInfo={setFormInfo} />
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.button} onPress={handleAddEmployee}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
              Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCancel} onPress={handleModal}>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: "#0077b6" }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModalAddEmployes;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000aa",
  },

  modalView: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#0077b6",
    width: 100,
    height: 50,
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 20,
  },

  buttonCancel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    width: 100,
    height: 50,
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#0077b6",
    marginTop: 20,
  },

  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
