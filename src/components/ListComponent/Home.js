import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { css } from "@emotion/react";
import { PulseLoader} from "react-spinners";

const Home = ({navigation}) => {
  const [email, setEmail] = useState('challenge@alkemy.org');
  const [password, setPassword] = useState('react');
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Kogan Studios</Text>
      <Text></Text>
      <TouchableOpacity style={styles.buttonContactos} onPress={()=>{navigation.navigate('Contacts')}}><Text style={styles.buttonText}>Contactos</Text></TouchableOpacity>{/*desde contactos se accede a configuracion de numero de emergencia*/}
      <Text></Text>
      <TouchableOpacity style={styles.buttonActual} onPress={()=>{navigation.navigate('Temp')}}><Text style={styles.buttonText}>Hora Actual</Text></TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.buttonLlamadoEmergencia} onPress={()=>{navigation.navigate('Emergency')}}><Text style={styles.buttonText}>Llamado de emergencia</Text></TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.buttonQR} onPress={()=>{navigation.navigate('QR')}}><Text style={styles.buttonText}>Acerca De</Text></TouchableOpacity>
      {/*agregar identificacion de cada aplicacion*/}
    </View> 
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF0D5', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  buttonContactos: {
    backgroundColor: '#F7C59F',
    padding: 10,
    borderRadius: 5,
  },
  buttonActual: {
    backgroundColor: '#C6DABF',
    padding: 10,
    borderRadius: 5,
  },
  buttonLlamadoEmergencia: {
    backgroundColor: '#9ABAD9',
    padding: 10,
    borderRadius: 5,
  },
  buttonQR: {
    backgroundColor: '#ccadc4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#3b230d'  ,
    fontWeight: 'bold',
  },
  warning:{
    color: 'crimson'
  },
  Titulo:{
    fontSize: 25, 
        fontWeight: 'bold',
        textAlign: 'center',
  }
  
  
});

export default Home;
