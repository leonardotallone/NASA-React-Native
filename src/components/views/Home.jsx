// import { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import Header from "../Header";
import TodaysImage from "../TodaysImage/TodaysImage";
// import { getNASAContext } from "../../../context/GetNASAContext";

const Home = () => {
  // const { nasaResponse } = useContext(getNASAContext);

  return (
    <View>
      <Header />
      <TodaysImage />
    </View>
  );
};
export default Home;
