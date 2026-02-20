import { Text, View, StyleSheet, Pressable, TouchableOpacity, StatusBar, ScrollView, Image, FlatList  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  // const handleHeroPress = (heroId: string) => {
  //   router.push(`/hero/${heroId}`);
  // };

  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#629786"/>
      <View style = {styles.header}>
        <Text style = {styles.title}>Heroes</Text>
      </View>


      <FlatList
        data={Heroes}
        keyExtractor={(item) => item.id}
        numColumns={6}
        contentContainerStyle={styles.scrollContent}
        columnWrapperStyle={styles.columnWrapper}
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
    { id: '1', name: 'Aaron', avatar: require('./Heroes/heroImg/Aaron.png') },
    { id: '2', name: 'Abishai', avatar: require('./Heroes/heroImg/Abishai.png') },
    { id: '3', name: 'Adankelmo', avatar: require('./Heroes/heroImg/Adankelmo.png') },
    { id: '4', name: 'Agito Makishima', avatar: require('./Heroes/heroImg/AgitoMakishima.png') },
    { id: '5', name: 'Agnes', avatar: require('./Heroes/heroImg/Agnes.png') },
    { id: '6', name: 'Ainz Ooal Gown', avatar: require('./Heroes/heroImg/AinzOoalGown.png') },
    { id: '7', name: 'Aka', avatar: require('./Heroes/heroImg/Aka.png') },
    { id: '8', name: 'Albedo', avatar: require('./Heroes/heroImg/Albedo.png') },
    { id: '9', name: 'Alfred', avatar: require('./Heroes/heroImg/Alfred.png') },
    { id: '10', name: 'Alia', avatar: require('./Heroes/heroImg/Alia.png') },
    { id: '11', name: 'Alicia', avatar: require('./Heroes/heroImg/Alicia.png') },
    { id: '12', name: 'Almeda', avatar: require('./Heroes/heroImg/Almeda.png') },
    { id: '13', name: 'Alpha', avatar: require('./Heroes/heroImg/Alpha.png') },
    { id: '14', name: 'Altemuller', avatar: require('./Heroes/heroImg/Altemuller.png') },
    { id: '15', name: 'ALtina', avatar: require('./Heroes/heroImg/Alfred.png') },
    { id: '16', name: 'Alustriel', avatar: require('./Heroes/heroImg/Alustriel.png') },
    { id: '17', name: 'Amadeus', avatar: require('./Heroes/heroImg/Amadeus.png') },
    { id: '18', name: 'Andriole', avatar: require('./Heroes/heroImg/Andriole.png') },
    { id: '19', name: 'Angelica', avatar: require('./Heroes/heroImg/Angelica.png') },
    { id: '20', name: 'Angelina', avatar: require('./Heroes/heroImg/Angelina.png') },
    { id: '21', name: 'Anna', avatar: require('./Heroes/heroImg/Anna.png') },
    { id: '22', name: 'Apotheosis', avatar: require('./Heroes/heroImg/Apotheosis.png') },
    { id: '23', name: 'Archanfel', avatar: require('./Heroes/heroImg/Archanfel.png') },
    { id: '24', name: 'Archon of the Moon', avatar: require('./Heroes/heroImg/ArchonoftheMoon.png') },
    { id: '25', name: 'Ares', avatar: require('./Heroes/heroImg/Ares.png') },
    { id: '26', name: 'Arianrhod', avatar: require('./Heroes/heroImg/Arianrhod.png') },
    { id: '27', name: 'Ashemar', avatar: require('./Heroes/heroImg/Ashemar.png') },
    { id: '28', name: 'Ashram', avatar: require('./Heroes/heroImg/Ashram.png') },
    { id: '29', name: 'Autokrato IV', avatar: require('./Heroes/heroImg/AutokratoIV.png') },
    { id: '30', name: 'Awakened One', avatar: require('./Heroes/heroImg/AwakenedOne.png') },
    { id: '31', name: 'Azusa', avatar: require("./Heroes/heroImg/Azusa.png")},
    { id: '32', name: 'Bernhardt', avatar: require("./Heroes/heroImg/Bernhardt.png")},
    { id: '33', name: 'Betty', avatar: require("./Heroes/heroImg/Betty.png")},
    { id: '34', name: 'Bianca', avatar: require("./Heroes/heroImg/Bianca.png")},
    { id: '35', name: 'Bozel', avatar: require("./Heroes/heroImg/Bozel.png")},
    { id: '36', name: 'Brenda', avatar: require("./Heroes/heroImg/Brenda.png")},
    { id: '37', name: 'Brightsummoner', avatar: require("./Heroes/heroImg/Brightsummoner.png")},
    { id: '38', name: 'Broken-winged Bird', avatar: require("./Heroes/heroImg/BrokenwingedBird.png")},
    { id: '39', name: 'Captain Commando', avatar: require("./Heroes/heroImg/CaptainCommando.png")},
    { id: '40', name: 'Captain Mack', avatar: require("./Heroes/heroImg/CaptainMack.png")},
    { id: '41', name: 'Caroline', avatar: require("./Heroes/heroImg/Caroline.png")},
    { id: '42', name: 'Celica', avatar: require("./Heroes/heroImg/Celica.png")},
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
    marginTop: -20,
    paddingBottom: 10,
  },
  title: {
    color: "#d8c2a9",
    fontSize: 24,
    // fontWeight: "bold",
    // textAlign: "center",
    lineHeight: 20,
    paddingTop: 30,
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
    marginTop: -5,
    marginBottom: 10,
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