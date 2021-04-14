import React, {useEffect, useState ,useContext} from "react";
import {Container,View,Header,Item,Input,Icon, Left,Button,Content,Spinner} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
import * as Font from "expo-font";
import { Context as GastoContext } from "../providers/GastoContext";
import {Context as AuthContext} from "../providers/AuthContext";
import Modificar from "../components/shared/modificar";
import BottomTab from "../components/bottomTab"

 const modificarGasto  = ({navigation }) =>{ 

        const { state: gastoState, updateGasto } = useContext(GastoContext);
        const { state } = useContext(AuthContext);
        const [descripcion, setDescripcion] = useState("");
        const [monto, setMonto] = useState("");
        const [timestamp, setTimestamp] = useState("");

        const [errorDescripcion, setErrorDescripcion] = useState(false);


          useEffect(() => {
            if (gastoState.currentGasto.id) {
              setDescripcion(gastoState.currentGasto.descripcion);
              setMonto(gastoState.currentGasto.monto);
            }
          }, [gastoState.currentGasto]);
        
          const handleSaveGasto = () => {
            updateGasto(
              gastoState.currentGasto.id,
              descripcion ,
              monto,
              timestamp,
              
            );
            navigation.goBack();
          };

          
//console.log(gastoState.currentGasto.id);
            return (
                <Container style={styles.Fondo}  >
                  
                     <LinearGradient 
                         colors={['#480048','#C04848']} 
                         style={styles.LinearGradient}
                         start={{ x: 0, y: 1 }}
                         end={{ x: 1, y: 0 }}>
                        <View style={styles.view}></View>
                        <View >

                            <Text style={styles.textoTitulo}> Modificar Gastos </Text> 

                            <Modificar
                             handleSave = {handleSaveGasto}
                             descripcion={descripcion}
                             setDescripcion={setDescripcion}
                             monto={monto}
                             setMonto={setMonto}
                             errorDescripcion={errorDescripcion} />
                            
                        </View>
                    <BottomTab></BottomTab>
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
  marginTop:100,
  color:"#FFFFFF",
  fontSize:30,
  fontWeight:"bold",
  alignSelf: "center"
},

view: {
  height: 64
},

 });

export default modificarGasto;