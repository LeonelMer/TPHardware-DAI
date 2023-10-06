import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { getDishes } from "../../services/omdbService";
import { ListComponentStyle } from "./styles";
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Info from './Emergency';

const Contacts = ({ navigation }) => {
    return (
        <View style={ListComponentStyle.container}>
            
        </ View >
    )
}

export default Contacts;

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#fff0db',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#fff0db',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    Titulo:{
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 50,
        textDecorationLine: "underline",
    },
    PrecioTotal:{
        fontWeight: 'bold',
        textDecorationLine: "underline",
        fontSize: 10,  
    }
});



