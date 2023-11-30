import { View } from "react-native";
import React from "react";
import HomePage from "../Forms/HomePage";

export default function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <HomePage {...props} />
    </View>
  );
}
