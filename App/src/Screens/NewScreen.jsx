import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import PostCard from "../Components/PostCard";
import { getNewPost } from "../../api";

function NewScreen() {
  const [newPost, setNewPost] = useState([]);

  useEffect(() => {
    getNewPost().then((resp) => {
      setNewPost(resp.data.children);
    });
  }, []);
  if (!newPost.length) return null;

  return (
    <View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 10, backgroundColor: "white" }}>
          {newPost.map((item, index) => (
            <PostCard data={item.data} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default NewScreen;
