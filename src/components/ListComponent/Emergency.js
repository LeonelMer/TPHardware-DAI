import { View, Image, Text, TouchableOpacityBase} from "react-native";
import { ListComponentStyle } from "./styles";
import { TouchableOpacity,ScrollView, StyleSheet } from "react-native";
import { useContextState } from "../../../ContextState.js";

const Emergency = () => {
    const { contextState, setContextState } = useContextState();

    return (
        <View>
        </ View >
    )
}

export default Emergency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff0db',
  },
  TituloFooter:{
    fontWeight: 'bold',
    fontSize: '92%',  
},
TituloFooterConSubrayado:{
  fontWeight: 'bold',
  fontSize: '92%',
  textDecorationLine: "underline",
},
Precio:{
  color: '#6fa042',
},
Vegano:{
  color: '#6fa042',
  fontWeight: 'bold',
  fontSize: '92%',
},
NoVegano:{
  color: '#85461e',
  fontWeight: 'bold',
  fontSize: '92%',
},
ViewcitaEnLinea:{
  flexDirection: "row",
},
HealthScore: {
  color: '#a0d150',
  fontWeight: 'bold',
  fontSize: '92%', 
},
Eliminar:{
  color:'crimson'
}
  
});