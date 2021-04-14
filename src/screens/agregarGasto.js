import React, {  useState ,useContext} from "react";
import {Container,View} from "native-base";
import { StyleSheet, Text,Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");
import {Context as AuthContext} from "../providers/AuthContext"
import {Context as GastoContext } from "../providers/GastoContext";
import Agregar from "../components/shared/agregarForm";
import BottomTab from "../components/bottomTab"

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
                        <View style={styles.view}></View>
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

export default agregarGasto;