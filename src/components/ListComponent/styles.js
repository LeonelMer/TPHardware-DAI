import { StyleSheet, StatusBar } from 'react-native';

export const ListComponentStyle = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'#fff0db',
        position: 'static',
        height: "75%", //Esto es lo que hay que cambiar para que se vea el loading + el fondo del mismo colo (Si no es height es width)
    },
    Image:{
        width:  '200px',
        height: '200px',
        alignSelf: 'center',
        borderWidth: 7,
        borderColor: '#905010',
        borderRadius:7
        

    },
    Dish:{
        fontSize: 20,
       textAlign: 'center',
       fontWeight: 'bold',
    },
    Eliminar:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'crimson',
    }
});


export const ListChildStyle = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    title: {
        fontSize: 32,
        marginLeft: 16
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    
});
