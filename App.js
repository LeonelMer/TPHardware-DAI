import Contacts from './src/components/ListComponent/Contacts';
import Temp from './src/components/ListComponent/Temp';
import Home from './src/components/ListComponent/Home';
import Emergency from './src/components/ListComponent/Emergency';
import  QR from './src/components/ListComponent/QR';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="Contacts" component={Contacts} /> 
          <Stack.Screen name="Temp" component={Temp} />
          <Stack.Screen name="Emergency" component={Emergency} />
          <Stack.Screen name="QR" component={QR} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
