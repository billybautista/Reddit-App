import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import Icon from "react-native-vector-icons/EvilIcons";

function WebViewScreen({ route, navigation }) {
  const uri = `http://reddit.com${route.params}`;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="close" size={40} />
      </TouchableOpacity>
      <WebView
        style={{ flex: 1, marginTop: 10 }}
        source={{ uri }}
        javaScriptEnabled={true}
      />
    </View>
  );
}

export default WebViewScreen;
