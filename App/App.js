import React from "react";
import { StyleSheet, View } from "react-native";
import PostCard from "./src/Components/PostCard";

function App() {
  return (
    <View style={styles.container}>
      <PostCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
