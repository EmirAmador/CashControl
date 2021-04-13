import React, { Component, useEffect, useState ,useContext} from "react";
import {Container,View,Header,Form,Item,Input,Icon,Right,Button,Card,List,ListItem,Fab,Left,Body} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import { MaterialIcons } from '@expo/vector-icons';
import {Context as AuthContext} from "../providers/AuthContext"
import {Context as IngresoContext } from "../providers/IngresoContext";
import Toast from "react-native-toast-message";
import ListaIngreso from "../components/shared/ListaIngreso";
state
const listadoIngresos = ({ navigation }) => {

    const { state} = useContext(AuthContext);
    const {state: ingresoState, getIngresos , clearMessage} = useContext(IngresoContext);

    useEffect(() => {
        getIngresos(state.user.id);
      }, [state]);

      useEffect(() => {
        if (ingresoState.errorMessage) {
          Toast.show({
            text2: ingresoState.errorMessage,
          });
          clearMessage();
        }
      }, [ingresoState.errorMessage]);

       return (
             <>
                <Toast ref={(ref) => Toast.setRef(ref)} />

                <LinearGradient 
                   colors={['#480048','#C04848']} 
                   style={styles.LinearGradient}
                   start={{ x: 0, y: 1 }}
                   end={{ x: 1, y: 0 }}> 
                   <View>
                        
                       <Text style={styles.h1}>Ingresos</Text>
                       <View style={styles.divisor}/>
                        <ListaIngreso navigation={navigation} ingresos={ingresoState.ingresos} />

                        <Fab
                            active={true}
                            position="bottomRight"
                            style={{ backgroundColor: "#ff0023" }}
                            direction="up"
                            onPress={() => {
                                navigation.navigate("agregarIngreso")
                            }}
                            >
                            <Icon name="plus" type="FontAwesome" />
                        </Fab>
                    </View>
                </LinearGradient>
            </>
        );                 
}

const styles = StyleSheet.create({
   
    fondo: {
      width: width,
      height: height ,
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
        marginTop: 100,
        color: '#ffffff',
    },

    divisor:{
        borderBottomColor: '#000000',
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
        backgroundColor: "#C70039",
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

export default listadoIngresos;