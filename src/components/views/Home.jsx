// import { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../Header";
import TodaysImage from "../TodaysImage/TodaysImage";
import LastFiveDaysImages from "../LastFiveDaysImages/LastFiveDaysImages";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage />
      <LastFiveDaysImages />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgba(7,26,93,255)",
  },
 
});

export default Home;
