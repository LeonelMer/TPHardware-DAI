import { useEffect, useState } from "react";
import { View, Image, Text} from "react-native";
import { ListComponentStyle } from "./styles";
import { TouchableOpacity,ScrollView, StyleSheet } from "react-native";
import { format } from 'date-fns';
import * as Location from 'expo-location';
import axios from 'axios'


const Temp = ({ navigation}) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [weather, setWeather] = useState();
  //3707031863044c7ab91145609230610 apikey
  //https://www.weatherapi.com/docs/
  //https://api.weatherapi.com/v1/current.json?key=3707031863044c7ab91145609230610&q=51.5085300,-0.1257400

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    (async () => {
      // Solicitar permisos de ubicación
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log('Estado de permiso:', status);

      if (status !== 'granted') {
        console.error('Permiso de ubicación denegado');
        return;
      }

      try {
        // Obtener la ubicación actual
        const location = await Location.getCurrentPositionAsync({});
        axios.get('https://api.weatherapi.com/v1/current.json?key=3707031863044c7ab91145609230610&q=' + location.coords.latitude + "," + location.coords.longitude)
        .then((response)=> {
          console.log(response.data.current.temp_c);
          setWeather(response.data.current.temp_c);
        })
        .catch((error) =>{
          console.log(error);
        })
      } catch (error) {
        console.error('Error al obtener la ubicación:', error);
      }
    })();
  }, []);

    return (
        <ScrollView style={ListComponentStyle.container}>
          <Text></Text>
          <Text></Text>
          
            <TouchableOpacity onPress={()=>{navigation.goBack();}}><Image style={styles.flecha} source={require('../../../assets/flechita.png')}></Image></TouchableOpacity>{/*desde contactos se accede a configuracion de numero de emergencia*/}
            <Text>Fecha y hora actual: {format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')}</Text>
            <Text style={styles.Temperatura}>Temperatura actual: {weather} grados celcius</Text>

        </ScrollView>
    )
}


export default Temp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff0db',
    },
    Titulo:{
        fontWeight: 'bold',
        fontSize: 20, 
    },
    Temperatura:{
      backgroundColor: '#F7C59F',
    },
      flecha: {
        width: 50,
        height: 50,
      }

  });