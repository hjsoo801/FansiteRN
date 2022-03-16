import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Button,
  Text,
  Card,
  Icon,
  Image,
  Tab,
  SocialIcon,
} from "react-native-elements";
import { TopHeader, DrawerMenu } from "../layouts";

const Home = ({ navigation }) => {
  const menuList = [
    { id: 0, name: "Album" },
    { id: 1, name: "Fimlograpy" },
    { id: 2, name: "AD" },
    { id: 3, name: "History" },
    { id: 4, name: "Board" },
  ];
  return (
    <ScrollView>
      <TopHeader name="HOME" />
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
      <View style={[styles.snsArea]}>
        <SocialIcon type="twitter" iconSize={18} style={[styles.snsIcon]} />
        <SocialIcon type="facebook" iconSize={18} style={[styles.snsIcon]} />
        <SocialIcon type="youtube" iconSize={18} style={[styles.snsIcon]} />
        <SocialIcon type="instagram" iconSize={18} style={[styles.snsIcon]} />
      </View>
      <View style={[styles.cardContainer]}>
        <Image
          style={{ width: 100, height: 200, marginRight: 20 }}
          source={{
            uri: "http://piglet911.cafe24.com/iu/img/history.464a4b86.jpg",
          }}
        />
        <Image
          style={{ width: 220 }}
          source={{
            uri: "http://piglet911.cafe24.com/iu/img/album.d75fbda8.png",
          }}
        />
        <Image
          style={{ width: 220, height: 200, margin: 5 }}
          source={{
            uri: "http://1.bp.blogspot.com/-GGv4y5Cyw80/Ur6psSKg8KI/AAAAAAAAFS4/mMd1aMWA_NM/s1600/OUdogbaby2.gif",
          }}
        />
        <Image
          style={{ width: 100, margin: 10 }}
          source={{
            uri: "http://piglet911.cafe24.com/iu/img/advertising.13403a98.jpg",
          }}
        />
        <Image
          style={{ width: 340, height: 200, margin: 10 }}
          source={{
            uri: "http://piglet911.cafe24.com/iu/img/filmography.b6c8d911.png",
          }}
        />
      </View>
      {/* <View style={[styles.tab]}>
        {menuList.map((item, index) => (
          <Text style={[styles.tabItem]} key={index}>
            {item.name}
          </Text>
        ))}
      </View> */}
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
