import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QR({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('No has escaneado todavía')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setText(data)
    console.log("URL: " + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <ScrollView style={styles.ContactScrollView}>
      <Text></Text>
      
      <TouchableOpacity onPress={()=>{navigation.goBack();}}><Image style={styles.flecha} source={require('../../../assets/flechita.png')}></Image></TouchableOpacity>
      

    <View style={styles.container}>
    <Text></Text>
    <Image style={styles.tinyLogo} source={require('../../../assets/Captura.png')}/> 
    <Text></Text>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 900, width: 900 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Escanear nuevamente'} onPress={() => setScanned(false)} color='#ccadc4' />}
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF0D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
  },
  flecha: {
    width: 35,
    height: 35,
  },
  ContendorQR:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContactScrollView:{
    
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#fff0db',
    position: 'static',
    height: "75%", //Esto es lo que hay que cambiar para que se vea el loading + el fondo del mismo colo (Si no es height es width)

}
});