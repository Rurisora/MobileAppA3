import { Text, View, StyleSheet, Pressable, TouchableOpacity, StatusBar, ScrollView, Image  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#629786"/>
      <View style = {styles.header}>
        <Text style = {styles.title}>Heroes</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style = {{width: '100%'}}
      >
        {Heroes.map((hero) => (
          <View key={hero.id} style={styles.heroCard}>
            <Image source={hero.avatar} style={styles.heroImage} />
            <Text style={styles.heroName}>{hero.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}


const Heroes = [
    { id: '1', name: 'Aaron', avatar: require('../assets/images/Aaron.png') },
    { id: '2', name: 'Abishai', avatar: require('../assets/images/Abishai.png') },
    { id: '3', name: 'Adankelmo', avatar: require('../assets/images/Adankelmo.png') },
    { id: '4', name: 'Agito Makishima', avatar: require('../assets/images/AgitoMakishima.png') },
    { id: '5', name: 'Agnes', avatar: require('../assets/images/Agnes.png') },
    { id: '6', name: 'Ainz Ooal Gown', avatar: require('../assets/images/AinzOoalGown.png') }
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: "#629786",
  },
  header: {
    alignItems: 'center',
    paddingTop: 0,
    // paddingBottom: 20,
  },
  title: {
    color: "#d8c2a9",
    fontSize: 24,
    // fontWeight: "bold",
    // textAlign: "center",
    lineHeight: 20,
    paddingTop: 10,
    marginBottom: 0,
  },
  content: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  scrollContent: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    gap: 4,
  },
  heroName: {
    fontSize: 10,
    textAlign: "center",
    width: 65,
    // marginTop: 0.5,
  },
  heroCard: {
    alignItems: 'center',
    gap: 1,
  },
  heroImage: {
    width: 60,
    height: 60,
    paddingTop: 10
  }
})