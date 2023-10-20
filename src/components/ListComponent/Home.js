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
      <TouchableOpacity onPress={()=>{navigation.navigate('Contacts')}}><Text>Contactos</Text></TouchableOpacity>{/*desde contactos se accede a configuracion de numero de emergencia*/}
      <TouchableOpacity onPress={()=>{navigation.navigate('Temp')}}><Text>Hora Actual</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Emergency')}}><Text>Llamado de emergencia</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('QR')}}><Text>Llamado de emergencia</Text></TouchableOpacity>
      {/*agregar identificacion de cada aplicacion*/}
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0db',
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
    backgroundColor: '#6fa042',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  warning:{
    color: 'crimson'
  }
  
});

export default Home;
