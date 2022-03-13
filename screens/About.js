import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Text } from "react-native-elements";

const About = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text>About</Text>
        <Button title="Go to Home" onPress={() => navigation.push("Home")} />
      </View>
    </ScrollView>
  );
};

export default About;
