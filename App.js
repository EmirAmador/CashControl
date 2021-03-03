import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import agregarGasto from './src/screens/agregarGasto';
import agregarIngreso from './src/screens/agregarIngreso';
import ahorros from './src/screens/ahorros';
import balance from './src/screens/balance';
import listadoGastos from './src/screens/listadoGastos';
import listadoIngresos from './src/screens/listadoIngresos';
import login from './src/screens/login';
import mainScreen from "./src/screens/mainScreen";
import registroUsuario from './src/screens/registroUsuario';

const Stack = createStackNavigator();

export default function App() {

  return (
     
    <NavigationContainer>
      <Stack.Navigator initialRouteName="mainScreen" headerMode = 'none'>
        <Stack.Screen name="listadoGastos" component={listadoGastos} />
      </Stack.Navigator>
      
  </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
