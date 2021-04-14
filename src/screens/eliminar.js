import React, { useEffect, useContext } from "react";
import {Container,View,Button} from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { StyleSheet, Text,Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";
import { Context as IngresoContext } from "../providers/IngresoContext";
import { Context as AuthContext } from "../providers/AuthContext";
const { width, height } = Dimensions.get("window");

const eliminar = ({ navigation }) => { 
  const { state} = useContext(AuthContext);

  const { state: ingresoState,deleteIngreso,setCurrentIngreso,getIngresos } = useContext(IngresoContext);
  
  

  const handleDeleteIngreso = () => {

    deleteIngreso(ingresoState.currentIngreso.id);

    navigation.goBack();

  };

  const alertDelete = (ingreso) => {
    Alert.alert(
      "Eliminar Ingreso",
      "Estas seguro de eliminar este ingreso?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => handleDeleteIngreso}
      ]
    );
  }


       return (
            <Container style={styles.Fondo}  >
                 <LinearGradient 
                     colors={['#480048','#C04848']} 
                     style={styles.LinearGradient}
                     start={{ x: 0, y: 1 }}
                     end={{ x: 1, y: 0 }}> 
                    <View  >
                      
                        <Text style={styles.textoTitulo}>Eliminar Ingreso </Text> 
                        <Button  style={styles.botonCancelar} onPress={() => navigation.goBack()}> 
                            <Text style={styles.textoBotones}>Cancelar</Text>
                        </Button> 
                        <Button  style={styles.botonOk} onPress={() => handleDeleteIngreso()}>
                            <Text style={styles.textoBotones}>OK</Text>
                        </Button> 
                        
                      
                        
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
      logout:{
        width:50,
        marginTop:30,
        alignContent:"flex-end",
        alignItems:"flex-end",
        marginRight:20,
        alignSelf:"flex-end"
      },
    botonCancelar:{
      width:190,
      height:60,
      backgroundColor:"#ffffff",
      marginTop:50,
      alignSelf:"center",
      borderRadius:26,
      alignContent:"center",
      justifyContent:"center",

  },
  botonOk:{
    width:190,
    height:60,
    backgroundColor:"#ffffff",
    marginTop:50,
    alignSelf:"center",
    borderRadius:26,
    alignContent:"center",
    justifyContent:"center",

},

textoBotones:{
  fontWeight:"bold",
  fontSize:20,
  justifyContent:"center",
  textAlign:"center",
},      
textoTitulo:{
  marginTop:150,
  color:"#FFFFFF",
  fontSize:40,
  fontWeight:"bold",
  alignSelf: "center"
},

});

export default eliminar;