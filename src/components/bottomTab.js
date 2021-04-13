import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import mainScreen from "../screens/mainScreen"
import listadoGastos from "../screens/listadoGastos"
import listadoIngresos from "../screens/listadoIngresos"
import balance from "../screens/balance"

const Tab = createBottomTabNavigator();

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="mainScreen"
        component={mainScreen}
        initialParams = {{navigation : navigation}} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="listadoGastos"
        component={listadoGastos}
        initialParams = {{navigation : navigation}} 
        options={{
          tabBarLabel: 'Gastos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          //tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="listadoIngresos"
        component={listadoIngresos}
        initialParams = {{navigation : navigation}} 
        options={{
          tabBarLabel: 'Ingresos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="balance"
        component={balance}
        initialParams = {{navigation : navigation}} 
        options={{
          tabBarLabel: 'Balance',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;