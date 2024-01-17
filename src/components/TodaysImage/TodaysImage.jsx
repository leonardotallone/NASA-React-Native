import React, { useContext } from "react";
import { View, Image, StyleSheet, Text, Button } from "react-native";
import { getNASAContext } from "../../../context/GetNASAContext";
import { getNASA5DaysContext } from "../../../context/GetNASA5DaysContext";

const TodaysImage = () => {
  const { nasaResponse } = useContext(getNASAContext);
  const { nasaResponse5Days } = useContext(getNASA5DaysContext)
  console.log("5 DIAS",nasaResponse5Days)
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: nasaResponse ? nasaResponse.url : null }}
      />
      <Text style={styles.title}>
        {nasaResponse ? nasaResponse.title : null}
      </Text>
      <Text style={styles.date}>{nasaResponse ? nasaResponse.date : null}</Text>
      <View style={styles.button}>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    alignItems: "flex-end",
  },
});

export default TodaysImage;
