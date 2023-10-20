import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as SMS from 'expo-sms';
import { Accelerometer } from 'expo-sensors';

const QR =({ navigation })=> {
  return (
    <View style={styles.container}>
         <Text>.</Text>
          <Text>.</Text>
          <Text>.</Text>
            <TouchableOpacity onPress={()=>{navigation.goBack();}}><Text>Volver</Text></TouchableOpacity>
      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/Captura.png')}
      />
    </View>
  );
}
export default QR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
  },
});
