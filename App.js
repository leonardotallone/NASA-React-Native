import { SafeAreaView, StyleSheet } from "react-native";
import GetNASAProvider from "./context/GetNASAContext";
import GetNASA5DaysProvider from "./context/GetNASA5DaysContext";
import Routes from "./Routes";

const App = () => {
  return (
    <GetNASA5DaysProvider>
      <GetNASAProvider>
        
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>

      </GetNASAProvider>
    </GetNASA5DaysProvider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
  },
});
