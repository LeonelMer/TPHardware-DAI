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
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Contacts')}}><Text style={styles.buttonText}>Contactos</Text></TouchableOpacity>{/*desde contactos se accede a configuracion de numero de emergencia*/}
      <Text></Text>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Temp')}}><Text style={styles.buttonText}>Hora Actual</Text></TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Emergency')}}><Text style={styles.buttonText}>Llamado de emergencia</Text></TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('QR')}}><Text style={styles.buttonText}>Código QR</Text></TouchableOpacity>
      {/*agregar identificacion de cada aplicacion*/}
    </View> 
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#acd3c5',
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
  button: {
    backgroundColor: '#b3f39e',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000'  ,
    fontWeight: 'bold',
  },
  warning:{
    color: 'crimson'
  },
  
  
});

export default Home;
