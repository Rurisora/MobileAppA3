import { Text, View, StyleSheet } from "react-native";
import NavBar from "./component/nav";
import { SafeAreaView } from "react-native-safe-area-context";
import SoldierList from "./component/soldierlist";


export default function SoliderPage() {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <NavBar></NavBar>
      </View>
      <Text style={styles.titles}>Soldiers</Text>
      <SoldierList></SoldierList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: "#629786",
    flex: 1,
  },

  titles: {
    textAlign: "center",
    fontSize: 30,
    color: "#cdce8e",
    paddingVertical: 8,
  }
})