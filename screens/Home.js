import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Text } from "react-native-elements";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text>Home Page Test</Text>
        <Button
          title="basic Button"
          buttonStyle={{
            backgroundColor: "rgba(78, 116, 289, 1)",
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => navigation.push("About")}
        />
        <Button
          title="Top HEader"
          onPress={() =>
            navigation.push("TopHeader", { title: "Home To Header" })
          }
        />
      </View>
    </ScrollView>
  );
};

export default Home;
