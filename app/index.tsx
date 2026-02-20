import { Text, View, Image, StyleSheet } from "react-native";
import NavBar from "./component/nav";
import { SafeAreaView } from "react-native-safe-area-context";
import SoldierList from "./component/soldierlist";


export default function BannerNews() {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <NavBar></NavBar>
      </View>
      <Text style={styles.titles}>CN update CN 01.01.2026 global 14.05.2026</Text>
      <View style={styles.articles}>
        <Text style={styles.infor}>✧New heroes: Taj, Lynn</Text>
        <Text style={styles.infor}>✧New skills Path of the Law (forge): Goury, Precia</Text>
        <Text style={styles.infor}>✧Exclusive equipment: Broken-winged bird</Text>
        <Text style={styles.infor}>✧Confession: Heaven Defier (LLR Sonya)</Text>
        <Text style={styles.infor}>✧Donate skin: Sovereign of the Ice Abyss</Text>
        <Text style={styles.infor}>✧SP soldiers: Highland Warrior, Elven Cavarly Archer</Text>
        <Text style={styles.infor}>✧Updated confession pictures (by Paimiko) for the following heroes: Virelia, Celice, Seraphine, Tabre</Text>
        <Text style={styles.infor}>Link</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={require("./component/symbolimg/banner.jpg")} style={styles.bannerimage}></Image>
      </View>
      

      <View style={styles.contributorContainer}>
          <View style={styles.containerInfor}>
            <Image source={require("./component/symbolimg/PaiMiko.png")} style={styles.contributorimg}></Image>
            <Text style={styles.contributorName}>PaiMiko</Text>
          </View>
          <View style={styles.containerInfor}>
            <Image source={require("./component/symbolimg/Rhapsodos.png")} style={styles.contributorimg}></Image>
            <Text style={styles.contributorName}>Rhapsodos</Text>
          </View>


      </View>
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
    // color: "#cdce8e",
    color: "black",
    fontWeight: "400",
    paddingVertical: 8,
  },

  articles: {
    marginHorizontal: 3,
  },

  infor: {
    fontSize: 12,
    paddingVertical: 1,
  },

  bannerContainer: {
    marginHorizontal: 5,
  },

  bannerimage: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
  },

  contributorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  containerInfor: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },

  contributorimg: {
      height: 100,
      width: 100,
      resizeMode: "contain",
  },
  
  contributorName: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
    color: "#fdfdfd",
    textShadowColor: "#292cd1",
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 6,
  }
})