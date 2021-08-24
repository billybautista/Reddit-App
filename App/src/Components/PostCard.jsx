import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

function PostCard({ data }) {
  const navigation = useNavigation();

  const { creationDate } = DateUTC(data.created_utc);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("WebViewScreen", data.permalink)}
    >
      <View style={styles.container}>
        <View style={{ justifyContent: "center" }}>
          <Image source={{ uri: data.thumbnail }} style={styles.Image} />
        </View>
        <View style={{ width: 10, backgroundColor: "white" }} />
        <View style={styles.content}>
          <View style={styles.row}>
            <Text>{data.author}</Text>
            <Text>{creationDate}</Text>
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.row}>
            <View style={styles.row}>
              <Icon name="star" size={15} style={{ marginRight: 5 }} />
              <Text>{data.score}</Text>
            </View>
            <View style={styles.row}>
              <Icon name="comment" size={15} style={{ marginRight: 5 }} />
              <Text>{data.num_comments}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function DateUTC(date) {
  let date1 = new Date(Date.now()).getTime();
  let date2 = date * 1000;
  let less = date1 - date2;

  let diff = less / 31536000;
  if (diff > 1) {
    return { creationDate: Math.floor(diff) + " years ago" };
  }
  diff = less / 2592000;
  if (diff > 1) {
    return { creationDate: Math.floor(diff) + " months ago" };
  }
  diff = less / 86400;
  if (diff > 1) {
    return { creationDate: Math.floor(diff) + " days ago" };
  }
  diff = less / 3600;
  if (diff > 1) {
    return { creationDate: Math.floor(diff) + " hours ago" };
  }
  diff = less / 60;
  if (diff > 1) {
    return { creationDate: Math.floor(diff) + " minutes ago" };
  }
  return { creationDate: Math.floor(less) + " seconds ago" };
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  Image: {
    width: 100,
    height: 100,
  },
  content: {
    width: width - 130,
    // marginVertical: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default PostCard;
