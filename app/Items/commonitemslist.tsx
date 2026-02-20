import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ItemCard from "../component/itemCard";

const commonItems = [
  {
    id: 1,
    name: "Allegiance Blade",
    stats: "HP: 437 ATK: 107",
    description:
      "ATK and DEF +5%. If you have a Fusion Power effect, ATK and DEF +5%.",
    image: require("./images/allegianceblade.png"),
  },
  {
    id: 2,
    name: "Astaroth",
    stats: "HP: 437 INT: 107",
    description:
      "When battling enemies afflicted by debuff, INT increases by 15%.",
    image: require("./images/astaroth.png"),
  },
  {
    id: 3, name: "Balanced Blade", 
    stats: "ATK: 107 SKILL: 43", 
    description:
        "DEF and MDEF +5%. AoE - skill effective range +1. (Cannot be used on AoE-skills with a range of 1. Does not increase width of linear AoE-skills).", 
    image: require("./images/balancedbalde.png"),
  },
  {
    id: 4, 
    name: "Bathory, the Seductress", 
    stats: "ATK: 96 SKILL: 54", 
    description:
        "Crit increases by 10%. After landing a critical hit in battle, deals fixed damage once to the enemy (damage = 1x own ATK).", 
    image: require("./images/bathory.png"),
  },
{
    id: 5, 
    name: "Blood Sword Hrunting", 
    stats: "ATK: 107 SKILL: 43", 
    description:"ATK +5%. Has 50% chance to deal extra fixed damage after actively dealing damage (Damage = 1x Hero's ATK).", 
    image: require("./images/bloodsword.png"),
},
        
{
    id: 6, 
    name: "Bloody Melody", 
    stats: "ATK: 107 SKILL: 43", 
    description:"ATK +10%, DEF + 5%.", 
    image: require("./images/bloodymelody.png"),
},
];

export default function CommonItemsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={commonItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemCard item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

/*import React from "react";
import {View, Text, Image, ScrollView, StyleSheet} from "react-native";

export default function CommonItemsList() {
    const commonItems = [
        {id: 1, name: "Allegiance Blade", stats: "HP: 437 ATK: 107", description: "ATK and DEF +5%. If you have a Fusion Power effect, ATK and DEF +5%.", image: require("./images/allegiance.png")},
        {id: 2, name: "Astaroth", stats: "HP: 437 INT: 107", description:"When battling enemies afflicted by debuff, INT increases by 15%. When attacking, 30% chance to stun the enemy after battle. Lasts 1 turn", image: require("./images/astaroth.png")},
        {id: 3, name: "Balanced Blade", stats: "ATK: 107 SKILL: 43", description:"DEF and MDEF +5%. AoE - skill effective range +1. (Cannot be used on AoE-skills with a range of 1. Does not increase width of linear AoE-skills).", image: require("./images/balancedblade.png")},
        {id: 4, name: "Bathory, the Seductress", stats: "ATK: 96 SKILL: 54", description:"Crit increases by 10%. After landing a critical hit in battle, deals fixed damage once to the enemy (damage = 1x own ATK).", image: require("./images/bathory.png")},
        {id: 5, name: "Blood Sword Hrunting", stats: "ATK: 107 SKILL: 43", description:"ATK +5%. Has 50% chance to deal extra fixed damage after actively dealing damage (Damage = 1x Hero's ATK).", image: require("./images/bloodsword.png")},
        {id: 6, name: "Bloody Melody", stats: "ATK: 107 SKILL: 43", description:"ATK +10%, DEF + 5%.", image: require("./images/bloodymelody.png")},
    ]

    return (
        <View style={{flex:1}}>
            <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 100}}>
                {commonItems.map((comitem) => (
                    <View key={comitem.id} style={styles.card}>

                        <Image source={comitem.image} style={styles.image} resizeMode="contain" />

                        <View style={styles.info}>
                            <Text style={styles.title}>
                                {comitem.name}
                            </Text>

                            <Text style={styles.stats}>
                                {comitem.stats}
                            </Text>

                            <Text style={styles.passive}>{comitem.description}</Text>

                        </View>
                    </View>
                )
            )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    card: {
        flexDirection: "row",
        marginBottom: 10,
        padding: 10,
        borderRadius: 8,
        alignItems: "flex-start"
    },
    
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
    },

    info: {
        flexShrink: 1,
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginBottom: 4,
    },

    symbol: {
        width: 16,
        height: 16,
    },

    stats: {
        fontSize: 14,
        color: "black",
        marginBottom: 4,
    },

    passive: {
        fontSize: 12,
        fontStyle: "italic",
        color: "black",
    },
});
*/