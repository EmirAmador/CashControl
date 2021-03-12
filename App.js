import React ,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import mainScreen from "./src/screens/mainScreen"
import listadoIngresos from "./src/screens/listadoIngresos"
import pantallaGastos from "./src/screens/listadoGastos"
import AgregarGastos from './src/screens/agregarGasto'
import balance from './src/screens/balance'
import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/useDataBase";
import { GastosContextProvider } from "./src/Context/ContextoGasto";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import modificarGasto from './src/modificarGasto';
import {CategoriaContextProvider} from "./src/Context/categoriasContext"
import { IngresosContextProvider } from "./src/Context/ingresoContext";
import agregarIngreso from './src/screens/agregarIngreso';
import  registro  from "./src/screens/registroUsuario";
import { theme } from "./src/components/theme";
import PersistLogin from "./src/utils/persistLogin";
import login from './src/screens/login';
//import modificarIngreso from './src/screens/modificarIngreso';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userData = PersistLogin();
    setUser(userData);
  }, []);

 SplashScreen.preventAutoHideAsync();

  const isLoadingComplete = useDatabase();

  // Ocutar la pantalla de splash
  if (isLoadingComplete) SplashScreen.hideAsync();

 return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
      <GastosContextProvider>
        <CategoriaContextProvider>
        <IngresosContextProvider> 
        <NavigationContainer>
        <Stack.Navigator initialRouteName="login" headerMode="none" >
            <Stack.Screen name="mainScreen" component={mainScreen} initialParams={{user:user}}/>

       
            <Stack.Screen  name="login" component={login} initialParams={{userCreated:false}}
            options={{headerShown:false}}/>
            
            <Stack.Screen name="agregarGastos" component={AgregarGastos} />
          <Stack.Screen name="listadoIngresos" component={listadoIngresos} headerMode="none"/>
          <Stack.Screen name="pantallaGastos" component={pantallaGastos} headerMode="none" />
          <Stack.Screen name="balance" component={balance} />
          <Stack.Screen name="agregarIngreso" component={agregarIngreso} />
          <Stack.Screen name="registro" component={registro}  />

          
        
       
        </Stack.Navigator>
      </NavigationContainer>  
      </IngresosContextProvider> 
      </CategoriaContextProvider>
      </GastosContextProvider> 
 
      </SafeAreaProvider>
    </ThemeProvider>


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
