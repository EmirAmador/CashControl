import { Input, Item, Text } from "native-base";
import React, { Component, useEffect, useState } from "react";
import { StyleSheet,Dimensions, Image} from "react-native";
import {Container,View,Header} from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import Button  from "../components/Button";
const { width, height } = Dimensions.get("window");

const registro = ({ navigation }) => {
    return(
        <Container style={styles.Fondo}  >
            <View  style={styles.viewHeather}>
            <LinearGradient 
                    colors={['#480048','#C04848']} 
                    style={styles.LinearGradient}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}> 
                    

            </LinearGradient>
            </View>
            <View style={styles.vistaFlotante} >
              <Item>
                <Text>
                  Usuario
                </Text>
                <Input>
                </Input>
              </Item>
              <Item></Item>
            </View>
            <View style={styles.vistaBoton}>
                <Button  title="Registrarse" ></Button>

            </View>

            <View  style={styles.viewFoother}>
            <LinearGradient 
                    colors={['#480048','#C04848']} 
                    style={styles.LinearGradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 1 }}> 
                    

            </LinearGradient>
            </View>    
                 

         </Container>
    );
}

const styles = StyleSheet.create({
    Fondo: {
      width: width,
      height: height,
      },
    
      LinearGradient: {
        height: height * 0.20,
        width: width 
        
      },
      header: {
          backgroundColor: '#3CCCD6',
        },

        vistaFlotante:{
            borderRadius: 40,
            backgroundColor: "#FFFFFF",
            width:width * 0.80,
            height:height * 0.40,
            alignSelf: "center",
            marginTop:-50,
            borderColor: "#0000000",
            shadowRadius: 9,
            shadowOpacity: 0.2,
            shadowColor: "#000000",
            shadowOffset: { width: 7, height: 7 }

        },
      viewHeather:{
        height: height * 0.20,
        width: width ,
      }  ,
      viewFoother:{
        height: height * 0.20,
        width: width ,
        marginTop:130,
      }  ,
     vistaBoton:{
         alignSelf:"center",
         alignContent:"center",
         alignItems:"center",
         justifyContent:"center",
         width : width,
         height : height*0.20
     },
    
  
  });
  
  export default registro;