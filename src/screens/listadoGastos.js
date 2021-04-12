import React, { useEffect, useState ,useContext} from "react";
import {View,Icon,Fab} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
import {Context as AuthContext} from "../providers/AuthContext"
import {Context as GastoContext } from "../providers/GastoContext";
import Toast from "react-native-toast-message";
import ListaGasto from "../components/shared/ListaGasto"


const listadoGastos = ({ navigation }) => { 
    const { state} = useContext(AuthContext);
    const {state: gastoState, getGastos , clearMessage} = useContext(GastoContext);

    useEffect(() => {
        getGastos(state.user.id);
      }, [state]);

      useEffect(() => {
        if (gastoState.errorMessage) {
          Toast.show({
            text2: gastoState.errorMessage,
          });
          clearMessage();
        }
      }, [gastoState.errorMessage]);
    
    

       return (

            <>
                <Toast ref={(ref) => Toast.setRef(ref)} />

                <LinearGradient 
                   colors={['#480048','#C04848']} 
                   style={styles.LinearGradient}
                   start={{ x: 0, y: 1 }}
                   end={{ x: 1, y: 0 }}> 
                   <View>
                        
                       <Text style={styles.h1}>Gastos</Text>
                       <View style={styles.divisor}/>
                        <ListaGasto navigation={navigation} gastos={gastoState.gastos} />

                        <Fab
                            active={true}
                            position="bottomRight"
                            style={{ backgroundColor: "#ff0023" }}
                            direction="up"
                            onPress={() => {
                                navigation.navigate("agregarGasto")
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
        marginTop: 80,
        color: '#FFFFFF',
    },

    divisor:{
        borderBottomColor: '#FFFFFF',
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