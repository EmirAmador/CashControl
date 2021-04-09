import React, {  useEffect, useState ,useContext} from "react";
import {Container,View,Header,Item,Input,Button,Picker,Content,Spinner, Left} from "native-base";
import { StyleSheet, Text,Dimensions,Image} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
import { AntDesign } from '@expo/vector-icons'; 
import {Context as AuthContext} from "../providers/AuthContext"
import {Context as GastoContext } from "../providers/GastoContext";

 const agregarGasto  = ({ navigation }) =>{ 


        
    const [fontsLoaded, setFontsLoaded] = useState(false);         
    const { createGasto } = useContext(GastoContext);
    const { state } = useContext(AuthContext);
    const [monto, setMonto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [errorDescripcion, setErrorDescripcion] = useState(false);
    const [enableSave, setEnableSave] = useState(true);



    const handleSaveNote = () => {
        createGasto( descripcion, monto, state.user.id);
        navigation.goBack();
    };
/*
          useEffect(() => {
            const loadFontsAsync = async () => {
              await Font.loadAsync({
                Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
              }).then(() => {
                setFontsLoaded(true);
              });
            };
        
            loadFontsAsync();
          }, []);*/
         
          // Ejecutar el efecto cuando el valor de la nota cambie
           /* useEffect(() => {
              if (descripcion) setEnableSave(false);
              else setEnableSave(true);
            }, [descripcion]);*/

          /*
          if (!fontsLoaded)
          return (
            <Content contentContainerStyle={styles.content}>
              <Spinner color="blue" />
            </Content>
          );
          console.log(categorias);
*/
            return (
                <Container style={styles.Fondo}  >
                    
                     <LinearGradient 
                         colors={['#480048','#C04848']} 
                         style={styles.LinearGradient}
                         start={{ x: 0, y: 1 }}
                         end={{ x: 1, y: 0 }}> 
                        <View >
                            <Text style={styles.textoTitulo}> Agregar Gastos </Text> 
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
                                 onChangeText={setMonto}/>
                            </Item>
                            
                            <Item>
                              <AntDesign name="select1" size={24} color="white" />            
                                <Picker
                                    mode="dropdown"
                                    placeHolderText="Fecha"
                                    label="Basic example"
                                    /*selectedValue={categoria}
                                    onValueChange={ (item) => {
                                      setCategoria(item)
                                    }}*/
                                    animateYearScrolling
                                    iosHeader="Categorias"
                                    
                                  >
                                    {/*
                                      categorias ? categorias.map((categoria)=>{
                                        return(
                                          <Picker.Item key={categoria.id.toString()} label={categoria.categoria} value={categoria.id}/>
                                        )
                                      }

                                      )
                                    : null*/
                                    }
                                   
                                  </Picker>
                            </Item>

                            <Button style={styles.botonCrear} rounded onPress={handleSaveNote}>
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
  marginTop:40,
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
  marginTop: 50,
  marginLeft: 19,
},
 });

export default agregarGasto;