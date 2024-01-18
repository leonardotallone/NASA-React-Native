import { View, StyleSheet, Text, ScrollView } from "react-native";
import PostImage from "../PostI/PostImage";
const LastFiveDaysImages = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Five Days</Text>
      <ScrollView style={styles.content}>
        <PostImage />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
    // backgroundColor: "#2c449d",
    marginVertical: 8,
    // borderRadius: 32,
    // padding: 16,
    // marginHorizontal: 24,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
    paddingLeft: 16,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    alignItems: "flex-end",
  },
});

export default LastFiveDaysImages;
