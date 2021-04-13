import React, {  useState ,useContext} from "react";
import {Container,View} from "native-base";
import { StyleSheet, Text,Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
import {Context as AuthContext} from "../providers/AuthContext"
import {Context as GastoContext } from "../providers/GastoContext";
import Agregar from "../components/shared/agregarForm";


 const agregarGasto  = ({ navigation }) =>{         
    const { createGasto } = useContext(GastoContext);
    const { state } = useContext(AuthContext);
    const [monto, setMonto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [errorDescripcion, setErrorDescripcion] = useState(false);
    const [timestamp, setTimestamp] = useState(Date.now());


    const handleSaveGasto = () => {
        createGasto( descripcion, monto,timestamp, state.user.id);
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
                            <Text style={styles.textoTitulo}> Agregar Gastos </Text> 
                            <Agregar
                              handleSave ={handleSaveGasto}
                              descripcion = {descripcion}
                              setDescripcion = {setDescripcion}
                              monto = {monto}
                              setMonto = {setMonto}
                              errorDescripcion ={errorDescripcion}
                              timestamp = {timestamp}
                            />

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
  marginTop:40,
  color:"#FFFFFF",
  fontSize:30,
  fontWeight:"bold",
  alignSelf: "center"
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