import { useEffect, useState } from "react";
import { View, Image, Text} from "react-native";
import { ListComponentStyle } from "./styles";
import { TouchableOpacity,ScrollView, StyleSheet } from "react-native";
import { format } from 'date-fns';
import { useContextState } from "../../../ContextState.js";
import * as Location from 'expo-location';

const Temp = ({ navigation}) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [location, setLocation] = useState(null);
  //3707031863044c7ab91145609230610 apikey
  //https://www.weatherapi.com/docs/

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
        setLocation(location);
      } catch (error) {
        console.error('Error al obtener la ubicación:', error);
      }
    })();
  }, []);

    return (
        <View>
            <TouchableOpacity onPress={()=>{navigation.goback()}}><Text>Volver</Text></TouchableOpacity>{/*desde contactos se accede a configuracion de numero de emergencia*/}
            <Text>Fecha y hora actual: {format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')}</Text>
            {location && location.coords ? (
              <Text>Latitud: {location.coords.latitude}, Longitud: {location.coords.longitude}</Text>
              ) : (<Text>Obteniendo ubicación...</Text>
            )}

        </View>
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
    Precio:{
        color: '#6fa042',
        fontSize: 20,
        fontWeight: 'bold',
      },
      Vegano:{
        color: '#6fa042',
        fontWeight: 'bold',
        fontSize: 20,
      },
      ViewcitaEnLinea:{
        flexDirection: "row",
      },
      HealthScore: {
        color: '#a0d150',
        fontWeight: 'bold',
        fontSize: 20, 
      },
      NombrePlato:{
        fontWeight: 'bold',
        fontSize: 20, 
        textAlign: 'center',
      },
      button: {
        backgroundColor: '#6fa042',
        padding: 10,
        borderRadius: 5,
        width: '40%',
        
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
      },
      ContenedorBoton: {
        alignItems: 'center',
      },
      flecha: {
        width: 50,
        height: 50,
      }

  });
