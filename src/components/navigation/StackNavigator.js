import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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

const Stack = createStackNavigator();

const IngresoNavigator = () => {
    return (
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="listadoIngresos" component={listadoIngresos} />
        <Stack.Screen name="agregarIngreso" component={agregarIngreso} />
        <Stack.Screen name="modificarIngreso" component={modificarIngreso} />
      </Stack.Navigator>
    );
}

const GastoNavigator = () => {
    return (
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="listadoGastos" component={listadoGastos} />
        <Stack.Screen name="agregarGasto" component={agregarGasto} />
        <Stack.Screen name="modificarGasto" component={modificarGasto} />
      </Stack.Navigator>
    );
}

export {IngresoNavigator, GastoNavigator};