import { SafeAreaView, StyleSheet } from "react-native";
import GetNASAProvider from './context/GetNASAContext'
import Home from './src/components/views/Home'

const App = () => {
  return (
    <GetNASAProvider>

    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>

    </GetNASAProvider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(7,26,93,255)'
  },

});
