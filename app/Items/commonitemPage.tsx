import { Text, View, Image,StyleSheet } from "react-native";
import NavBar from "../component/nav";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonItemsList from "./commonitemslist";


export default function CommonItemsPage() {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <NavBar></NavBar>
      </View>
      
      <View style={styles.titlesContainer}>
      <Text style={styles.titles}>Common Items</Text>
      <Image source={require("../component/symbolimg/search.png")}></Image>
      </View>
      <CommonItemsList></CommonItemsList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: "#629786",
    flex: 1,
  },

  titlesContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  titles: {
    textAlign: "center",
    fontSize: 30,
    color: "#cdce8e",
    paddingVertical: 8,
    marginHorizontal: 100,
  }
})