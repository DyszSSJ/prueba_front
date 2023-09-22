import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ModalAddEmployes from "./ModalAddEmployes";

const ButtonAddEmployee = ({ refetch }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <View>
      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.button} onPress={handleModal}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
            Add
          </Text>
          <Icon name="account" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      {openModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModal}
          onRequestClose={handleModal}
          style={{ flex: 1, backgroundColor: "#000000aa" }}
        >
          <ModalAddEmployes handleModal={handleModal} refetch={refetch} />
        </Modal>
      )}
    </View>
  );
};

export default ButtonAddEmployee;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#0077b6",
    width: 100,
    height: 50,
    justifyContent: "center",
    borderRadius: 15,
  },

  boxButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "end",
  },
});
