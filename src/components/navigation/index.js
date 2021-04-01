import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { Context as AuthContext } from "../../providers/AuthContext";
import mainScreen from "../../screens/mainScreen"
import listadoIngresos from "../../screens/listadoIngresos"
import listadoGastos from "../../screens/listadoGastos"
import agregarGasto from '../../screens/agregarGasto'
import balance from '../../screens/balance'
import agregarIngreso from '../../screens/agregarIngreso';
import registro  from "../../screens/registroUsuario";
import forgotPassword from '../../screens/forgotPassword';
import PersistLogin from "../../firebase/persistLogin";
import login from '../../screens/login';

const Stack = createStackNavigator();

const Navigation = () => {
    const { state, persistLogin } = useContext(AuthContext);

    // Verificar si ya existen credenciales de autenticación
    useEffect(() => {
      persistLogin();
    }, []);
  
    // Prevenir que se oculte la pantalla de splash
    SplashScreen.preventAutoHideAsync();
  
    // Ocultar la pantalla de splash al verificar que existe un token de inicio
    if (!state.loading) SplashScreen.hideAsync();
    
  return (
    <NavigationContainer>
        {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator initialRouteName="login" headerMode="none" >
                
            </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen  name="login" component={login} options={{headerShown:false}}/>
           
                    <Stack.Screen name="mainScreen" component={mainScreen} />
                    <Stack.Screen name="listadoIngresos" component={listadoIngresos} headerMode="none"/>
                    <Stack.Screen name="listadoGastos" component={listadoGastos} headerMode="none"/>
                    <Stack.Screen name="balance" component={balance} />
                    <Stack.Screen name="agregarIngreso" component={agregarIngreso} />
                    <Stack.Screen name="agregarGasto" component={agregarGasto} />
                    <Stack.Screen name="registro" component={registro}  />
                    <Stack.Screen name="forgotPassword" component={forgotPassword}  />
                </Stack.Navigator>
            )}
        </>
      )}
      </NavigationContainer> 
  );
};

export default Navigation;
