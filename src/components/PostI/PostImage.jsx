import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { getNASA5DaysContext } from "../../../context/GetNASA5DaysContext";
import { useNavigation } from "@react-navigation/native";

const PostImage = () => {
  const { nasaResponse5Days } = useContext(getNASA5DaysContext);
  const { navigate } = useNavigation();

  const handleViewPress = (post) => {
    console.log(post)
    navigate("Details", { post });
  };

  return nasaResponse5Days?.map((post) => (
    <View style={styles.container} key={post.title}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.date}>{post.date}</Text>
      <View style={styles.button}>
        <Button title="View" onPress={() => handleViewPress(post)} />
      </View>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 8,
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 12,
  },
  button: {
    alignItems: "flex-end",
  },
});

export default PostImage;
