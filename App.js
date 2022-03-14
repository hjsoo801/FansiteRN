import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TopHeader } from "./layouts";
import { Home, About, Loading } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, change] = React.useState(true);

  const changeState = async () => {
    try {
      setTimeout(() => {
        return change(false);
      }, 7000);
    } catch (err) {
      alert(err);
    }
  };

  React.useEffect(() => {
    changeState();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TopHeader" component={TopHeader} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
