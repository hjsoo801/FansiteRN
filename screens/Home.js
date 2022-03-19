import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Button,
  Text,
  Card,
  Icon,
  Image,
  SocialIcon,
} from "react-native-elements";

const Home = ({ navigation }) => {
  const menuList = [
    { id: 0, name: "Album" },
    { id: 1, name: "Fimlograpy" },
    { id: 2, name: "AD" },
    { id: 3, name: "History" },
    { id: 4, name: "Board" },
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Image
          style={[styles.bannerImg]}
          source={{
            uri: "http://piglet911.cafe24.com/iu/img/img_iu_1920.c0d72387.jpg",
          }}
        />
        <Text style={[styles.firstName]}>With U,</Text>
        <Text style={[styles.secondName]}>IU</Text>
        <Text style={[styles.info]}>
          {`B-day | 1993.05.16 
          Debut | 2008.09.23`}
        </Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 16, margin: 10 }}>SNS</Text>
      <View style={[styles.snsArea]}>
        <SocialIcon type="twitter" iconSize={18} style={[styles.snsIcon]} />
        <SocialIcon type="facebook" iconSize={18} style={[styles.snsIcon]} />
        <SocialIcon type="youtube" iconSize={18} style={[styles.snsIcon]} />
        <SocialIcon type="instagram" iconSize={18} style={[styles.snsIcon]} />
      </View>
      <View>
        <Button
          icon={
            <Icon
              name="heartbeat"
              type="font-awesome"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 10,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Go To About"
          onPress={() => navigation.push("About")}
        />
        <Button
          buttonStyle={{
            borderRadius: 10,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="DrawerMenu"
          onPress={() => navigation.push("DrawerMenu")}
        ></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerImg: {
    height: 200,
    flex: 1,
    width: null,
  },
  firstName: {
    position: "absolute",
    top: 50,
    right: 40,
    color: "#fff",
    fontStyle: "italic",
    fontSize: 14,
    fontWeight: "bold",
  },
  secondName: {
    position: "absolute",
    top: 65,
    right: 40,
    color: "#e4e724",
    fontStyle: "italic",
    fontSize: 14,
    fontWeight: "bold",
  },
  info: {
    position: "absolute",
    top: 100,
    right: 40,
    color: "#fff",
    fontStyle: "italic",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "right",
    lineHeight: 15,
  },
  snsArea: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  snsIcon: {
    height: 40,
    width: 40,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    // width: "50%",
  },
  tab: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "#b796c8",
    // marginTop: 10,
  },
  tabItem: {
    color: "white",
  },
});

export default Home;
