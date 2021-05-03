import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import defaultStyle from "./../constants/defaultStyle";
import Colors from "./../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyle.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={100}
          source={require("./../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.resultText}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.totalRounds}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </Text>
      <MainButton onPress={props.restartGame}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 280,
    height: 280,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultText: {
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: "center",
    fontSize: 18,
  },
});

export default GameOverScreen;
