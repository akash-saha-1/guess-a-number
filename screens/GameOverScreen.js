import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import defaultStyle from "./../constants/defaultStyle";
import Colors from "./../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  ScreenOrientation.unlockAsync();
  const [imageWidth, setImageWidth] = useState(
    Dimensions.get("window").width * 0.7
  );

  useEffect(() => {
    const updateLayout = () => {
      setImageWidth(Dimensions.get("window").width * 0.7);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={defaultStyle.title}>The Game is Over!</Text>
        <View
          style={{
            ...styles.imageContainer,
            width: imageWidth,
            height: imageWidth,
            borderRadius: imageWidth / 2,
          }}
        >
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    // width: 280,
    // height: 280,
    // borderRadius: 200,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
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
    marginHorizontal: Dimensions.get("window").height / 40,
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 18,
  },
});

export default GameOverScreen;
