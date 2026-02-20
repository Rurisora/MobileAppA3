import { Text, View, StyleSheet, Pressable, TouchableOpacity, StatusBar, ScrollView, Image, FlatList  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import NavBar from "../component/nav";


export default function Index() {
  const router = useRouter();

  // const handleHeroPress = (heroId: string) => {
  //   router.push(`/hero/${heroId}`);
  // };

  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#629786"/>
      <NavBar />
      <View style = {styles.header}>
        <Text style = {styles.title}>Heroes</Text>
      </View>


      <FlatList
        data={Heroes}
        keyExtractor={(item) => item.id}
        numColumns={6}
        contentContainerStyle={styles.scrollContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View 
            style={styles.heroCard}
          >
            <Image source={item.avatar} style={styles.heroImage} />
            <Text style={styles.heroName}>{item.name}</Text>
          </View>
        )}
      />
      
      {/* <View style = {styles.scrollContent}>
        {Heroes.map((hero) => (
          <View key={hero.id} style={styles.heroCard}>
            <Image source={hero.avatar} style={styles.heroImage} />
            <Text style={styles.heroName}>{hero.name}</Text>
          </View>
        ))}
      </View> */}
    </SafeAreaView>
  );
}


const Heroes = [
    { id: '1', name: 'Aaron', avatar: require('./heroImg/Aaron.png') },
    { id: '2', name: 'Abishai', avatar: require('./heroImg/Abishai.png') },
    { id: '3', name: 'Adankelmo', avatar: require('./heroImg/Adankelmo.png') },
    { id: '4', name: 'Agito Makishima', avatar: require('./heroImg/AgitoMakishima.png') },
    { id: '5', name: 'Agnes', avatar: require('./heroImg/Agnes.png') },
    { id: '6', name: 'Ainz Ooal Gown', avatar: require('./heroImg/AinzOoalGown.png') },
    { id: '7', name: 'Aka', avatar: require('./heroImg/Aka.png') },
    { id: '8', name: 'Albedo', avatar: require('./heroImg/Albedo.png') },
    { id: '9', name: 'Alfred', avatar: require('./heroImg/Alfred.png') },
    { id: '10', name: 'Alia', avatar: require('./heroImg/Alia.png') },
    { id: '11', name: 'Alicia', avatar: require('./heroImg/Alicia.png') },
    { id: '12', name: 'Almeda', avatar: require('./heroImg/Almeda.png') },
    { id: '13', name: 'Alpha', avatar: require('./heroImg/Alpha.png') },
    { id: '14', name: 'Altemuller', avatar: require('./heroImg/Altemuller.png') },
    { id: '15', name: 'Altina', avatar: require('./heroImg/Altina.png') },
    { id: '16', name: 'Alustriel', avatar: require('./heroImg/Alustriel.png') },
    { id: '17', name: 'Amadeus', avatar: require('./heroImg/Amadeus.png') },
    { id: '18', name: 'Andriole', avatar: require('./heroImg/Andriole.png') },
    { id: '19', name: 'Angelica', avatar: require('./heroImg/Angelica.png') },
    { id: '20', name: 'Angelina', avatar: require('./heroImg/Angelina.png') },
    { id: '21', name: 'Anna', avatar: require('./heroImg/Anna.png') },
    { id: '22', name: 'Apotheosis', avatar: require('./heroImg/Apotheosis.png') },
    { id: '23', name: 'Archanfel', avatar: require('./heroImg/Archanfel.png') },
    { id: '24', name: 'Archon of the Moon', avatar: require('./heroImg/ArchonoftheMoon.png') },
    { id: '25', name: 'Ares', avatar: require('./heroImg/Ares.png') },
    { id: '26', name: 'Arianrhod', avatar: require('./heroImg/Arianrhod.png') },
    { id: '27', name: 'Ashemar', avatar: require('./heroImg/Ashemar.png') },
    { id: '28', name: 'Ashram', avatar: require('./heroImg/Ashram.png') },
    { id: '29', name: 'Autokrato IV', avatar: require('./heroImg/AutokratoIV.png') },
    { id: '30', name: 'Awakened One', avatar: require('./heroImg/AwakenedOne.png') },
    { id: '31', name: 'Azusa', avatar: require("./heroImg/Azusa.png")},
    { id: '32', name: 'Bernhardt', avatar: require("./heroImg/Bernhardt.png")},
    { id: '33', name: 'Betty', avatar: require("./heroImg/Betty.png")},
    { id: '34', name: 'Bianca', avatar: require("./heroImg/Bianca.png")},
    { id: '35', name: 'Bozel', avatar: require("./heroImg/Bozel.png")},
    { id: '36', name: 'Brenda', avatar: require("./heroImg/Brenda.png")},
    { id: '37', name: 'Brightsummoner', avatar: require("./heroImg/Brightsummoner.png")},
    { id: '38', name: 'Broken-winged Bird', avatar: require("./heroImg/BrokenwingedBird.png")},
    { id: '39', name: 'Captain Commando', avatar: require("./heroImg/CaptainCommando.png")},
    { id: '40', name: 'Captain Mack', avatar: require("./heroImg/CaptainMack.png")},
    { id: '41', name: 'Caroline', avatar: require("./heroImg/Caroline.png")},
    { id: '42', name: 'Celica', avatar: require("./heroImg/Celica.png")},
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
    // paddingTop: 10,
    // marginTop: 10,
    paddingBottom: 10,
  },
  title: {
    color: "#d8c2a9",
    fontSize: 24,
    // fontWeight: "bold",
    // textAlign: "center",
    lineHeight: 20,
    paddingTop: 15,
    marginBottom: 0,
  },
  content: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  scrollContent: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  columnWrapper: {
    justifyContent: 'center',
    gap: 5,
  },
  heroName: {
    fontSize: 9,
    textAlign: "center",
    width: 60,
    marginTop: 2,
    marginBottom: 8,
  },
  heroCard: {
    alignItems: 'center',
    gap: 5,
  },
  heroImage: {
    width: 55,
    height: 55,
    paddingTop: 10
  }
})
