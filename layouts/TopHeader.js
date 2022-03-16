import { Header as HeaderRNE, HeaderProps, Icon } from "react-native-elements";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopHeader = (props) => {
  // const props = route.params;
  return (
    /* 이게 있어야 헤더가 무식하게 커지지 않음*/
    <SafeAreaProvider>
      <HeaderRNE
        leftComponent={
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="menu" color={"#fff"} />
            </TouchableOpacity>
          </View>
        }
        rightComponent={{
          icon: "search",
          color: "#fff",
        }}
        centerComponent={{
          text: props.name,
          style: styles.heading,
        }}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default TopHeader;
