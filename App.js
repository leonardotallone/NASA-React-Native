import { SafeAreaView, StyleSheet } from "react-native";
import Home from './src/components/views/Home'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(7,26,93,255)'
  },

});
