import React, {useEffect, useState ,useContext} from "react";
import {Container,View,Header,Item,Input,Icon, Left,Button,Content,Spinner} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
import { Context as IngresoContext } from "../providers/IngresoContext";
import {Context as AuthContext} from "../providers/AuthContext";
import Modificar from "../components/shared/modificar";

 const modificarIngreso = ({navigation}) =>{ 

        const { state: ingresoState, updateIngreso } = useContext(IngresoContext);
        const { state } = useContext(AuthContext);
        const [descripcion, setDescripcion] = useState("");
        const [monto, setMonto] = useState("");
        const [timestamp, setTimestamp] = useState("");

        const [errorDescripcion, setErrorDescripcion] = useState(false);
        
          useEffect(() => {
            if (ingresoState.currentIngreso.id) {
              setDescripcion(ingresoState.currentIngreso.descripcion);
              setMonto(ingresoState.currentIngreso.monto);
            }
          }, [ingresoState.currentIngreso]);
        
          const handleSaveIngreso = () => {
            updateIngreso(
              ingresoState.currentIngreso.id,
              descripcion ,
              monto,
              timestamp,
              
            );
            navigation.goBack();
          };
          
            return (
                <Container style={styles.Fondo}  >
                     <LinearGradient 
                         colors={['#480048','#C04848']} 
                         style={styles.LinearGradient}
                         start={{ x: 0, y: 1 }}
                         end={{ x: 1, y: 0 }}>
                        <View style={styles.view}></View>
                        <View >

                            <Text style={styles.textoTitulo}> Modificar Ingresos </Text> 

                            <Modificar
                             handleSave = {handleSaveIngreso}
                             descripcion={descripcion}
                             setDescripcion={setDescripcion}
                             monto={monto}
                             setMonto={setMonto}
                             errorDescripcion={errorDescripcion} />
                            
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
       
  textoTitulo:{
    marginTop: 100,
    color:"#FFFFFF",
    fontSize:30,
    fontWeight:"bold",
    alignSelf: "center"
  },
  
  view: {
    height: 64
  },

 });

export default modificarIngreso;