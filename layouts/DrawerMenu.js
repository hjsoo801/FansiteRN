import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Icon, Image } from "react-native-elements";

const DrawerMenu = () => {
  const menu = [
    { id: 1, name: "Home", icon: "home" },
    { id: 2, name: "About", icon: "cog" },
  ];

  return (
    <View style={[styles.container]}>
      <View style={[styles.userArea]}>
        <Image
          style={{ height: 72, width: 72, borderRadius: 37 }}
          source={require("../assets/splash_iu.gif")}
        />
        <Text style={[styles.userName]}>IU, With U</Text>
      </View>
      <View>
        {menu.map((item, index) => (
          <View key={index}>
            <TouchableOpacity style={[styles.touch]} onPress={() => {}}>
              <View style={[styles.menu]}>
                <Icon
                  name={item.icon}
                  type="font-awesome"
                  iconStyle={{ marginRight: 10 }}
                />
                <Text>{item.name}</Text>
                {/* <Text style={[styles.menu]}></Text> */}
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "white",
    flex: 1,
  },
  userArea: {
    height: 200,
    backgroundColor: "rgba(213,213,213,0.27)",
    borderTopRightRadius: 50,
    paddingTop: 50,
    paddingLeft: 30,
  },
  userName: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 31,
    letterSpacing: 0,
    textAlign: "left",
    color: "#272727",
  },
  touch: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingTop: 27,
    paddingLeft: 30,
  },
  menu: {
    marginLeft: 12,
    color: "#272727",
    fontSize: 16,
    lineHeight: 19,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
});

export default DrawerMenu;
