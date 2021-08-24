import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import PostCard from "../Components/PostCard";
import { getTopPost } from "../../api";

function TopScreen() {
  const [topPost, setTopPost] = useState([]);

  useEffect(() => {
    getTopPost().then((resp) => {
      setTopPost(resp.data.children);
    });
  }, []);
  if (!topPost.length) return null;

  return (
    <View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 10, backgroundColor: "white" }}>
          {topPost.map((item, index) => (
            <PostCard data={item.data} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default TopScreen;
