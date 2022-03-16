import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { TopHeader } from "../layouts";

const About = ({ navigation }) => {
  const arr = [0, 1, 2, 3, 4];
  return (
    <ScrollView>
      <TopHeader name="About" />
      <View>
        <View style={[styles.container]}>
          {arr.map((item, index) => (
            <Text
              style={[styles.box, { backgroundColor: "powderblue" }]}
              key={index}
            >
              {index}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default About;
