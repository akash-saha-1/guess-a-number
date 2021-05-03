import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Colors from "./../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    paddingTop: 25,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
});
export default Header;
