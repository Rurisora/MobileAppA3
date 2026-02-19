import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function NavBar() {
    return(
        <View style={styles.navbar}>
        
            <View style={styles.navLinks}>
                <TouchableOpacity>
                    <Text style={styles.link}>Heroes</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.link}>Items</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.link}>Soldiers</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.link}>Calendar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        width: "100%", 
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#cdce8e",   
    },

    navLinks: {
        flexDirection: "row",
    },

    link: {
        color: "black",
        marginRight: 10,
        fontSize: 16,
        marginLeft: 4,
    },
});