import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/components/views/Home";
import Details from "./src/components/views/Details";

const Stack = createStackNavigator();

const routeOptions = {
    headerStyle:{
        backgroundColor: "rgba(7,26,93,255)",
    },
    headerTitleStyle:{
        color:"white",
    },
};

const Routes = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home} options={routeOptions} />
        <Stack.Screen name="Details" component={Details} options={routeOptions} />

      </Stack.Navigator>
    </NavigationContainer>
    );
};
export default Routes;
