import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import PostCard from "../Components/PostCard";
import { getHotPost } from "../../api";

function HotScreen() {
  const [hotPost, setHotPost] = useState([]);

  useEffect(() => {
    getHotPost().then((resp) => {
      setHotPost(resp.data.children);
    });
  }, []);
  if (!hotPost.length) return null;

  return (
    <View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 10, backgroundColor: "white" }}>
          {hotPost.map((item, index) => (
            <PostCard data={item.data} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default HotScreen;
