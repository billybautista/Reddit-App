import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import PostCard from "../Components/PostCard";
import { getControversialPost } from "../../api";

function TopScreen() {
  const [controversialPost, setControversialPost] = useState([]);

  useEffect(() => {
    getControversialPost().then((resp) => {
      setControversialPost(resp.data.children);
    });
  }, []);
  if (!controversialPost.length) return null;

  return (
    <View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 10, backgroundColor: "white" }}>
          {controversialPost.map((item, index) => (
            <PostCard data={item.data} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default TopScreen;
