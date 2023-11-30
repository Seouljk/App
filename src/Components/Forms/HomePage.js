import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Use an appropriate icon library

export default function HomePage({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      "Logout Confirmation",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            // Add any logout logic here
            navigation.navigate("Login"); // Navigate back to the login page
          },
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text variant="displayLarge">This is the homepage</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "maroon",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={handleLogout}
      >
        <Icon name="sign-out" size={20} color="#fff" style={{ marginRight: 10 }} />
        <Text style={{ color: "#fff", fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
