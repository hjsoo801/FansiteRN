import { Header as HeaderRNE, HeaderProps, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopHeader = ({ route }) => {
  const props = route.params;
  return (
    /* 이게 있어야 헤더가 무식하게 커지지 않음*/
    <SafeAreaProvider>
      <HeaderRNE
        leftComponent={{
          icon: "menu",
          color: "#fff",
        }}
        rightComponent={{
          icon: "search",
          color: "#fff",
        }}
        centerComponent={{
          text: props.title,
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
