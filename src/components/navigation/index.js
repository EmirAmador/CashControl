import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { Context as AuthContext } from "../../providers/AuthContext";
import registro  from "../../screens/registroUsuario";
import forgotPassword from '../../screens/forgotPassword';
import login from "../../screens/login";
import BottomTab from "../bottomTab"

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
            
            <BottomTab></BottomTab>
            
            ) : (
              <Stack.Navigator>
                    <Stack.Screen name="login" component={login} />
                    <Stack.Screen name="registro" component={registro}  />
                </Stack.Navigator>
            )}
        </>
      )}

    </NavigationContainer> 
  );
};

export default Navigation;
