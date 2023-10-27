import React, { useEffect, useState } from "react";
import { View, Image, Text, FlatList } from "react-native";
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
            <Text></Text>
            <TouchableOpacity onPress={()=>{navigation.goBack();}}><Image style={styles.flecha} source={require('../../../assets/flechita.png')}></Image></TouchableOpacity>
            <Text></Text>
            <Text style={styles.ListaContactos}>Lista de Contactos</Text>
            <Text></Text>
            
            {contacts.length > 0 ? 
                (contacts.map((contact, index) => (
                    <View key={index}>
                        
                        <View style={styles.ListaContactos}>
                        <Text>Nombre: {contact.name}</Text>
                        </View>
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
        
        backgroundColor: '#FDF0D5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#FDF0D5',
        alignItems: 'center',
    },
    ListaContactos:{
        fontSize: 25, 
        fontWeight: 'bold',
        textAlign: 'center',
    },
    flecha: {
        width: 35,
        height: 35,
      }

});



