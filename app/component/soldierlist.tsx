import React from "react";
import {View, Text, Image, ScrollView, StyleSheet} from "react-native";

export default function SoldierList() {
    const infantrySoldiers = [
        {id: 1, name: "Infantry", movement: 3, range: 1, hp: 28, atk: 26, def: 15, mdef: 12, passive: "Basic Infantry", category: "Infantry", image: require("./soldierimg/infantry.png")},
        {id: 2, name: "Elite Infatry", movement: 3, range: 1, hp: 34, atk: 31, def: 18, mdef: 14, passive: "When attacking and entering battle, damage taken reduces by 20%",category: "Infantry", image: require("./soldierimg/eliteinfantry.png")},
        {id: 3, name: "Orc", movement: 3, range: 1, hp: 34, atk: 31, def: 17, mdef: 13, passive: "When attacking and entering battle, ATK increases by 20%", category: "Infantry", image: require("./soldierimg/orc.png")},
        {id: 4, name: "Warrior", movement: 3, range: 1, hp: 31, atk: 34, def: 17, mdef: 14, passive: "When attacking and entering battle, critical hit rate increases by 20%", category: "Infantry", image: require("./soldierimg/warrior.png")},
        {id: 5, name: "Maid", movement: 3, range: 1, hp: 28, atk: 26, def: 15, mdef: 12, passive: "When soldier HP is above 80%, ATK increases by 20%", category: "Infantry", image: require("./soldierimg/maid.png")},
        {id: 6, name: "Heavy Infantry", movement: 3, range: 1, hp: 43, atk: 40, def: 23, mdef: 19, passive: "When attacking and entering battle, soldier's ATK increases by 30%. When forced into battle, soldier's DEF increases by 30%", category: "Infantry", image: require("./soldierimg/heavyinfantry.png")},
        {id: 7, name: "Guardian Infantry", movement: 3, range: 1, hp: 53, atk: 37, def: 23, mdef: 19, passive: "When attacked and soldier HP is above 80%, soldier's DEF increases by 45%", category: "Infantry", image: require("./soldierimg/guardianinfantry.png")},
    ]

    return (
        <View style={{flex:1}}>
            <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 100}}>
                {infantrySoldiers.map((soldier) => (
                    <View key={soldier.id} style={styles.card}>

                        <Image source={soldier.image} style={styles.image} resizeMode="contain" />

                        <View style={styles.info}>
                            <Text style={styles.title}>
                                {soldier.name} <Image source={require("./symbolimg/movement.png")} style={styles.symbol} resizeMode="contain"></Image> {soldier.movement} <Image source={require("./symbolimg/range.png")} style={styles.symbol} resizeMode="contain"></Image> {soldier.range}
                            </Text>

                            <Text style={styles.stats}>
                                HP: {soldier.hp}, ATK: {soldier.atk}, DEF: {soldier.def}, MDEF: {soldier.mdef}
                            </Text>

                            <Text style={styles.passive}>{soldier.passive}</Text>

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