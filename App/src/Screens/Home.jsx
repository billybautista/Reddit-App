import React from "react";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewScreen from "./NewScreen";
import TopScreen from "./TopScreen";
import HotScreen from "./HotScreen";
import ControversialScreen from "./ControversialScreen";
import WebViewScreen from "./WebViewScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialTopTabNavigator();
function TopTabNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Icon name="reddit" size={50} color="#FF5700" />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "black",
          indicatorStyle: {
            backgroundColor: "#FF5700",
          },
          style: {
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
      >
        <Tab.Screen name="New" component={NewScreen} />
        <Tab.Screen name="Top" component={TopScreen} />
        <Tab.Screen name="Hot" component={HotScreen} />
        <Tab.Screen name="Popular" component={ControversialScreen} />
      </Tab.Navigator>
    </View>
  );
}

const Stack = createStackNavigator();
function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: {
        //   backgroundColor: "#000",
        // },
        // headerStyle: {
        //   backgroundColor: "#000",
        // },
        // headerTintColor: "#FF4502",
      }}
    >
      <Stack.Screen name="Sreen" component={TopTabNavigator} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

export default Home;
