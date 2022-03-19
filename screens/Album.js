import * as React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, Card, Icon, Image } from "react-native-elements";

const albumTypes = [
  { id: 1, title: "All" },
  { id: 2, title: "Studio" },
  { id: 3, title: "Mini" },
  { id: 4, title: "Remake" },
  { id: 5, title: "Single" },
  { id: 6, title: "Digital" },
  { id: 7, title: "OST" },
  { id: 8, title: "ETC" },
];

const Album = () => {
  const [selectedIndex, selectTab] = React.useState("All");

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Album TAB */}
      <ScrollView horizontal={true}>
        <View style={[styles.tabContainer]}>
          {albumTypes.map((item) => (
            <Button
              buttonStyle={[
                selectedIndex == item.id
                  ? styles.selectedButton
                  : styles.tabButton,
              ]}
              titleStyle={[
                selectedIndex == item.id
                  ? styles.selectedButtonTitle
                  : styles.tabButtonTitle,
              ]}
              type="outline"
              key={item.id}
              title={item.title}
              onPress={() => {
                selectTab(item.id);
              }}
            />
          ))}
        </View>
      </ScrollView>
      {/* Album Card */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 20,
          paddingTop: 20,
          justifyContent: "space-between",
          paddingBottom: 80,
        }}
      >
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              shadowOpacity: 0.5,
              shadowColor: "gray",
              shadowOffset: { width: 3, height: 3 },
            }}
          >
            <Image
              source={{
                uri: "https://cdnimg.melon.co.kr/cm2/album/images/107/43/453/10743453_20211018165252_500.jpg",
              }}
              style={{ width: 150, height: 150, borderRadius: 20 }}
            />
            <Text
              style={{
                bottom: 30,
                left: 40,
                color: "#fff",
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              스트로베리문
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 10,
    padding: 10,
  },
  selectedButton: {
    width: 65,
    height: 65,
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 20,
  },
  selectedButtonTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  tabButton: {
    width: 65,
    height: 65,
    backgroundColor: "white",
    marginRight: 10,
    borderColor: "lightgray",
    borderRadius: 20,
  },
  tabButtonTitle: {
    color: "gray",
    fontSize: 12,
  },
});

export default Album;
