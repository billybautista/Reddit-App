import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./src/Screens/Home";

const statusBarStyle = "dark-content";
function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={statusBarStyle} backgroundColor="white" />
      <Home />
    </NavigationContainer>
  );
}

export default App;
