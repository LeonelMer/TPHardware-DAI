import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as SMS from 'expo-sms';
import { Accelerometer } from 'expo-sensors';

const Emergency=({ navigation })=> {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const accelerometerObservable = Accelerometer.addListener(({ x, y, z }) => {
      const acceleration = Math.sqrt(x * x + y * y + z * z);
      if (acceleration > 10) {
        setIsShaking(true);
        enviarMensajeSMS();
      }
    });

    return () => {
      accelerometerObservable.remove();
    };
  }, []);

  const solicitarPermisosDeSMS = async () => {
    const { status } = await SMS.requestPermissionsAsync();
    if (status === 'granted') {
      console.log('Permiso de SMS otorgado');
    } else {
      console.log('Permiso de SMS denegado');
    }
  };

  const enviarMensajeSMS = async () => {
    solicitarPermisosDeSMS();

    const isAvailable = await SMS.isAvailableAsync();

    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(
        ['25359019'], // Reemplaza con el número de teléfono al que deseas enviar el SMS
        '¡Emergencia! Necesito ayuda.'
      );

      if (result) {
        console.log('SMS enviado con éxito.');
      } else {
        console.error('Error al enviar el SMS.');
      }
    } else {
      console.error('La funcionalidad de SMS no está disponible en este dispositivo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>.</Text>
      <Text>.</Text>
      <Text>.</Text>
      <TouchableOpacity onPress={()=>{navigation.goBack();}}><Text>Volver</Text></TouchableOpacity>
      <Text style={styles.title}>Llamado de Emergencia</Text>
      {isShaking ? (
        <Text style={styles.message}>¡Se ha detectado una sacudida rápida! Se ha enviado un SMS de emergencia.</Text>
      ) : (
        <Text style={styles.message}>Sacude el dispositivo para activar la llamada de emergencia.</Text>
      )}
    </View>
  );
}
export default Emergency;

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
