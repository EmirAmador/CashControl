import React, { Component, useEffect, useState } from "react";
import {Container,View,Header,Button, Right} from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer} from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const mainScreen = ({ navigation }) => { 
  
       return (
            <Container style={styles.Fondo}  >
                 <LinearGradient 
                     colors={['#480048','#C04848']} 
                     style={styles.LinearGradient}
                     start={{ x: 0, y: 1 }}
                     end={{ x: 1, y: 0 }}> 
                    <View  >
                      <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate("login")}>
                        <MaterialIcons name="logout" size={30} color="black" />
                      </TouchableOpacity>

                        <Text style={styles.textoTitulo}>¡Bienvenido! </Text> 
                        <Button  style={styles.botonIngresos} onPress={() => navigation.navigate("listadoIngresos")}> 
                          <MaterialIcons name="attach-money" size={24} color="black" />
                            <Text style={styles.textoBotones}>Ingresos</Text>
                        </Button> 
                        <Button  style={styles.botonGastos} onPress={() => navigation.navigate("listadoGastos")}>
                          <MaterialIcons name="money-off" size={24} color="black" />
                            <Text style={styles.textoBotones}>Gastos</Text>
                        </Button> 
                        
                        <Button  style={styles.botonBalance} onPress={() => navigation.navigate("balance")}>
                          <MaterialIcons name="account-balance" size={24} color="black" />
                            <Text style={styles.textoBotones}>Balance</Text>
                        </Button> 

                </View>

            </LinearGradient>

         </Container>
        );                  
}

const styles = StyleSheet.create({
  Fondo: {
    width: width,
    height: height,
    },
  
    LinearGradient: {
      height: height,
      width: width
      
    },
    header: {
        backgroundColor: '#3CCCD6',
      },
      logout:{
        width:50,
        marginTop:30,
        alignContent:"flex-end",
        alignItems:"flex-end",
        marginRight:20,
        alignSelf:"flex-end"
      },
    botonIngresos:{
      width:190,
      height:60,
      backgroundColor:"#ffffff",
      marginTop:50,
      alignSelf:"center",
      borderRadius:26,
      alignContent:"center",
      justifyContent:"center",

  },
  botonGastos:{
    width:190,
    height:60,
    backgroundColor:"#ffffff",
    marginTop:50,
    alignSelf:"center",
    borderRadius:26,
    alignContent:"center",
    justifyContent:"center",

},
botonMovimientos:{
  width:190,
  height:60,
  backgroundColor:"#ffffff",
  marginTop:50,
  alignSelf:"center",
  borderRadius:26,
  alignContent:"center",
  justifyContent:"center",

}  ,
botonBalance:{
  width:190,
  height:60,
  backgroundColor:"#ffffff",
  marginTop:50,
  alignSelf:"center",
  borderRadius:26, 
  alignContent:"center",
  justifyContent:"center",

},
textoBotones:{
  fontWeight:"bold",
  fontSize:20,
  justifyContent:"center",
  textAlign:"center",
},      
textoTitulo:{
  marginTop:20,
  color:"#FFFFFF",
  fontSize:40,
  fontWeight:"bold",
  marginLeft: 35,
  
},

});

export default mainScreen;