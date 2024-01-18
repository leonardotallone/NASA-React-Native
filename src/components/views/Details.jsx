import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Header from "../Header";
import { useRoute } from "@react-navigation/native";

const Details = () => {
  const route = useRoute();
  const { post, nasaResponse } = route.params;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: post?post.url:nasaResponse.url }} />
        <Text style={styles.title}>
          {post ? post.title : nasaResponse.title}
        </Text>
        <Text style={styles.date}>{post?post.date:nasaResponse.date}</Text>
        <ScrollView>
          <Text style={styles.explanation}>{post?post.explanation:nasaResponse.explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(7,26,93,255)",
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    backgroundColor: "#2c449d",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
  },
  image: {
    width: "100%",
    height: "50%",
    borderColor: "#FFF",
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  date: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 16,
  },
  explanation: {
    color: "#FFF",
  },
});
export default Details;
