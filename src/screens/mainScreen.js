import React, { Component, useEffect, useState } from "react";
import {Container,View,Header} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import Button from "../components/Button"
const { width, height } = Dimensions.get("window");

const mainScreen = ({ navigation }) => { 
  
       return (
            <Container style={styles.Fondo}  >
                 <LinearGradient 
                    colors={['#AB2C2C','#9C4142','#866064','#78757A', '#62959C','#56A6AE','#48BBC4','#3CCCD6']} 
                    style={styles.LinearGradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}> 
                    <View >
                    
                        <Text style={styles.textoTitulo}>¡Bienvenido! </Text> 
                        <Button  style={styles.botonIngresos}  title="Back" 
                            callback={() => {
                                navigation.navigate("pantallaIngresos");
                            }} > 
                          <MaterialIcons name="attach-money" size={24} color="black" />
                            <Text style={styles.textoBotones}>Ingresos</Text>
                        </Button> 
                        <Button  style={styles.botonGastos} onPress={() => navigation.navigate("pantallaGastos")}>
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
  marginTop:140,
  color:"#FFFFFF",
  fontSize:40,
  fontWeight:"bold",
  marginLeft: 35,
  
},

});

export default mainScreen;