import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { Home, Loading, Album, AD, Filmo, History, Board } from "./screens";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Album":
              iconName = "play-circle-outline";
              break;
            case "Filmo":
              iconName = "film-outline";
              break;
            case "AD":
              iconName = "tv-outline";
              break;
            case "History":
              iconName = "trophy-outline";
              break;
            case "Board":
              iconName = "pencil-outline";
              break;
          }
          // You can return any component that you like here!
          return (
            <Icon name={iconName} type="ionicon" size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Album" component={Album} />
      <Tab.Screen name="Filmo" component={Filmo} />
      <Tab.Screen name="AD" component={AD} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Board" component={Board} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoading, change] = React.useState(true);

  const changeState = async () => {
    try {
      setTimeout(() => {
        return change(false);
      }, 5000);
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
        <MyTabs></MyTabs>
        {/* <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TopHeader" component={TopHeader} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
  }
}
