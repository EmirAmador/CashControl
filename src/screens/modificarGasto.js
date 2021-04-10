import React, {useEffect, useState ,useContext} from "react";
import {Container,View,Header,Item,Input,Icon, Left,Button,Content,Spinner} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
import * as Font from "expo-font";
import { Context as GastoContext } from "../providers/GastoContext";
import {Context as AuthContext} from "../providers/AuthContext"



 const modificarGasto  = ({ route,navigation }) =>{ 


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
          

            return (
                <Container style={styles.Fondo}  >
                  
                     <LinearGradient 
                         colors={['#480048','#C04848']} 
                         style={styles.LinearGradient}
                         start={{ x: 0, y: 1 }}
                         end={{ x: 1, y: 0 }}>
                        <View >

                            <Text style={styles.textoTitulo}> Modificar Gastos </Text> 
                            <View style={styles.viewStyle}>
                            <Item  style={errorDescripcion ? styles.inputError : styles.itemStyle}
 >
                                <Input 
                                value={descripcion}
                                onChangeText={setDescripcion}
                                placeholder='Descripción'/>
                               
                            </Item>
                            
                            <Item style={errorDescripcion ? styles.inputError : styles.itemStyle} >
                                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                                <Input  placeholder='Monto'
                                value={monto}
                                  onChangeText={setMonto}/>
                            </Item>
                            
                            

                            <Button style={styles.botonCrear} rounded onPress={handleSaveGasto}>
                              <Text style={styles.textoBotones}>
                                Modificar
                              </Text>    
                            </Button>
                            </View>
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
    inputError: {
      borderColor: "red",
    },
    header: {
        backgroundColor: '#3CCCD6',
      },

 
    botonCrear:{
      width:160,
      height:60,
      alignSelf:"center",
      marginTop:60,
      backgroundColor:"#FFFFFF",
      justifyContent:"center",
      alignContent:"center"
  },
  
textoBotones:{
  fontWeight:"bold",
  fontSize:25,
  justifyContent:"center",
  textAlign:"center",
},      
textoTitulo:{
  marginTop:20,
  color:"#FFFFFF",
  fontSize:30,
  fontWeight:"bold",
  marginLeft:45,
  alignSelf: "center"
},
itemStyle:{
    marginTop:20,
},
viewStyle:{
    width:350,
    height:500,
    alignSelf:"center"
},
botonCategorias:{
    backgroundColor:"transparent",
    marginTop:30,
    width:"auto",
},
logoImage: {
  width: width * 0.1,
  height: 50,
  marginTop: 10,
  marginLeft: 19,
},
 });

export default modificarGasto;