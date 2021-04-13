import React, {  useEffect, useState ,useContext} from "react";
import {Container,View,Header,Item,Input,Icon,Button,Content,Spinner, Left} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {Context as AuthContext} from "../providers/AuthContext"
import {Context as IngresoContext } from "../providers/IngresoContext";
import { format } from "date-fns";
import { MaterialIcons } from '@expo/vector-icons'; 


const { width, height } = Dimensions.get("window");

 const agregarIngreso = ({ navigation }) =>{ 

  const { createIngreso } = useContext(IngresoContext);
  const { state } = useContext(AuthContext);
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errorDescripcion, setErrorDescripcion] = useState(false);
  const [enableSave, setEnableSave] = useState(true);
  const [timestamp, setTimestamp] = useState(Date.now());




  const handleSaveIngreso = () => {
      createIngreso( descripcion, monto,timestamp, state.user.id);
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
                          <Text style={styles.textoTitulo}> Agregar Ingresos </Text> 
                          <View style={styles.viewStyle}>
                          <Item  style={errorDescripcion ? styles.inputError : styles.itemStyle}
>
                              <Input 
                              value={descripcion}
                              onChangeText={setDescripcion}
                              placeholder='Descripción'/>
                             
                          </Item>
                          
                          <Item style={errorDescripcion ? styles.inputError : styles.itemStyle} >
                              <FontAwesome5 name="money-bill-alt" size={24} color="white" />
                              <Input  placeholder='Monto'
                               value={monto}
                               onChangeText={setMonto}
                               placeHolderTextStyle={{ color: "#d3d3d3" }}
                               />
                               
                          </Item>
                          
                          <Item>
                          <MaterialIcons name="date-range" size={24} color="black" />
                            <Text> {`${format(timestamp, "eee H:m")}`}
                        </Text>


                                  
                                 
                          </Item>

                          <Button style={styles.botonCrear} rounded onPress={handleSaveIngreso}>
                            <Text style={styles.textoBotones}>
                              Crear
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
    textoInput:{
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
  marginTop:100,
  color:"#FFFFFF",
  fontSize:30,
  fontWeight:"bold",
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

export default agregarIngreso;