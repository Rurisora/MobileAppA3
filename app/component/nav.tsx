import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { useRouter } from "expo-router";

export default function NavBar() {
    const router = useRouter();
    return(
       <View style={styles.container}>
            
            <View style={styles.topBar}>
                <View style={styles.language}>
                    <TouchableOpacity>
                        <Text style={styles.langText}>Русский</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.langText}>|</Text>
                    </TouchableOpacity>
                                    <TouchableOpacity>
                        <Text style={styles.langText}>English</Text>
                    </TouchableOpacity>
                </View>
                
                <Image source={require("../component/symbolimg/pc.png")}></Image>
                
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Text style={styles.banner}><Image source={require("./symbolimg/headpanel.png")} style={{width: 14, height: 14 }}></Image>Banner News<Image source={require("./symbolimg/headpanel.png")} style={{width: 14, height: 14 }}></Image> </Text>
                </TouchableOpacity>

            </View>


            <View style={styles.navbar}>
            
                <View style={styles.navLinks}>
                    <TouchableOpacity>
                        <Text style={styles.link}>Heroes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.link}>Items</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push('/Soldier/soldierPage')}>
                        <Text style={styles.link}>Soldiers</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.link}>Calendar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 8,
    },
    
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 6,
    },
    
    language: {
        flexDirection: "row",
        alignItems: "center",
    },
    
    langText: {
        color: "black",
        fontSize: 14,
        margin: 2,
    },

    banner: {
        color: "black",
        fontSize: 14,
    },
    
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        width: "100%", 
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#d8c2a9",   
    },

    navLinks: {
        flexDirection: "row",
    },

    link: {
        color: "black",
        marginRight: 10,
        fontSize: 16,
        marginLeft: 10,
    },
});