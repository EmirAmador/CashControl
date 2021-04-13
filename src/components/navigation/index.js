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
import login from "../../screens/login";
import modificarGasto from "../../screens/modificarGasto";
import modificarIngreso from "../../screens/modificarIngreso";
import eliminar from "../../screens/eliminar";



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
            
            <Stack.Navigator screenOptions={{ headerShown: false }} >
               <Stack.Screen name="mainScreen" component={mainScreen}  />
               <Stack.Screen name="listadoGastos" component={listadoGastos} />
                <Stack.Screen name="agregarGasto" component={agregarGasto}  />
                <Stack.Screen name="listadoIngresos" component={listadoIngresos} />
                <Stack.Screen name="balance" component={balance} />
                <Stack.Screen name="agregarIngreso" component={agregarIngreso} />
                <Stack.Screen name="forgotPassword" component={forgotPassword}  />
                <Stack.Screen name="modificarGasto" component={modificarGasto} />
                <Stack.Screen name="modificarIngreso" component={modificarIngreso} />
                <Stack.Screen name="eliminar" component={eliminar} />


                
            </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen  name="login" component={login} />
                    <Stack.Screen name="registro" component={registro}  />

                </Stack.Navigator>
            )}
        </>
      )}
      </NavigationContainer> 
  );
};

export default Navigation;
