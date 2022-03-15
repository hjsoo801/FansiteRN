import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Text, Card, Icon } from "react-native-elements";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title>About</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
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
        </Card>
      </View>
    </ScrollView>
  );
};

export default Home;
