import React, { Component, useEffect, useState ,useContext} from "react";
import {Container,View,Header,Form,Item,Input,Icon,Right,Button,Card,List,ListItem,Fab,Left,Body} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const listadoGastos = ({ navigation }) => { 

       return (
            <Container style={styles.fondo}>
                <LinearGradient 
                   colors={['#AB2C2C','#9C4142','#866064','#78757A', '#62959C','#56A6AE','#48BBC4','#3CCCD6']} 
                   style={styles.linearGradient}
                   start={{ x: 1, y: 1 }}
                   end={{ x: 1, y: 0 }}> 
                   <View>
                        <Header style={styles.header}>

                        </Header>
                    
                       <Text style={styles.h1}>Gastos</Text>
                       <View style={styles.divisor}/>
                       
                       <Card style={styles.lista}>
                           <ScrollView>
                              <List>
                                   
                              </List>
     
                            </ScrollView>
                            <View>
                                
                            </View>
                        </Card>
                        <Fab
                            active={true}
                            position="bottomRight"
                            style={{ backgroundColor: "#ff0023" }}
                            direction="up"
                            onPress={() => {
                                navigation.navigate("agregarGastos")
                            }}
                            >
                            <Icon name="plus" type="FontAwesome" />
                        </Fab>
                    </View>
                </LinearGradient>
            </Container>
        );                  
}

const styles = StyleSheet.create({
   
    fondo: {
      width: width,
      height: height,
    },
  
    linearGradient: {
      height: height,
      width: width
      
    },

    header: {
        backgroundColor: '#3CCCD6',
    },

    h1:{
        fontSize: 33,
        textAlign:"center",
        marginTop: 0,
        color: '#236266',
    },

    divisor:{
        borderBottomColor: '#236266',
        borderBottomWidth: 2,
        width: width * 0.9,
        alignSelf: "center"
    },

    texto: {
        textAlign: "center",
        marginTop: 10,
    },

    lista:{
        backgroundColor:"white",
        height: height * 0.75,
        width: width * 0.9,
        alignSelf: "center",
        borderRadius: 8,
        marginTop: 8
    },

    icono: {
        color: "white",
        fontSize: 35,
        paddingBottom:35
    },

    boton: {
        alignContent:"center",
        backgroundColor: "#31898F",
        borderRadius: 40,
        marginLeft: 290,
        position: "absolute",
        top: 500
    },

    logoImage: {
        width: width * 0.1,
        height: 50,
        marginTop: 40,
        marginLeft:19,
    },
});

export default listadoGastos;