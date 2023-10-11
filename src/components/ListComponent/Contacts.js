import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { ListComponentStyle } from "./styles";
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import * as Con from 'expo-contacts';

const Contacts = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const loadContacts = async () => {
        const { status } = await Con.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permiso de acceso a los contactos denegado');
            return;
        }
        const { data } = await Con.getContactsAsync({
            fields: [Con.Fields.Name, Con.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
            setContacts(data);
        }
        };
        loadContacts();
    }, []);

    return (
        <ScrollView style={ListComponentStyle.container}>
            <Text>.</Text>
          <Text>.</Text>
          <Text>.</Text>
            <TouchableOpacity onPress={()=>{navigation.goback();}}><Text>Volver</Text></TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lista de Contactos:</Text>
            {contacts.length > 0 ? 
                (contacts.map((contact, index) => (
                    <View key={index}>
                        <Text>Nombre: {contact.name}</Text>
                        {contact.phoneNumbers &&
                        contact.phoneNumbers.map((phoneNumber, i) => (
                        <Text key={i}>Teléfono: {phoneNumber.number}</Text>))}
                    </View>))) : (<Text>No se encontraron contactos.</Text>
                )
            }
        </ ScrollView >
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



