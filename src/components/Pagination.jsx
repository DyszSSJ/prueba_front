import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <View style={styles.pagination}>
      <TouchableOpacity
        onPress={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        style={
          currentPage === 1 ? [styles.button, styles.disabled] : styles.button
        }
      >
        <Text style={styles.text}>Previous</Text>
      </TouchableOpacity>
      <Text>Page {currentPage}</Text>
      <TouchableOpacity
        onPress={() => setCurrentPage(currentPage + 1)}
        style={styles.button}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },

  button: {
    backgroundColor: "#184e77",
    padding: 10,
    borderRadius: 10,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },

  disabled: {
    backgroundColor: "#adb5bd",
  },
});
