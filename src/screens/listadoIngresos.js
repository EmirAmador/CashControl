import React, {  useEffect ,useContext} from "react";
import {View,Icon,Fab} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
import {Context as AuthContext} from "../providers/AuthContext"
import {Context as IngresoContext } from "../providers/IngresoContext";
import Toast from "react-native-toast-message";
import ListaIngreso from "../components/shared/ListaIngreso";
import BottomTab from "../components/bottomTab"

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
                            style={{ backgroundColor: "#b5124e" }}
                            direction="up"
                            onPress={() => {
                                navigation.navigate("agregarIngreso")
                            }}
                            >
                            <Icon name="plus" type="FontAwesome" />
                        </Fab>
                    </View>
                    <BottomTab></BottomTab>
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
        marginTop: 92,
        marginBottom: 5,
        color: '#ffffff',
    },

    divisor:{
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        width: width * 0.9,
        alignSelf: "center",
        marginBottom: 6 
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