import React, {  useContext } from "react";
import {Container,View,Button} from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { StyleSheet, Text,Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Image } from "react-native";
import {Context as AuthContext} from "../providers/AuthContext";

const { width, height } = Dimensions.get("window");

const mainScreen = ({ navigation }) => { 

  const { signout } = useContext(AuthContext);
       return (
            <Container style={styles.Fondo}  >
                 <LinearGradient 
                     colors={['#480048','#C04848']} 
                     style={styles.LinearGradient}
                     start={{ x: 0, y: 1 }}
                     end={{ x: 1, y: 0 }}> 
                     <View style={styles.view}></View>
                    <View  >
                      <TouchableOpacity style={styles.logout} onPress={() => signout()}>
                        <MaterialIcons name="logout" size={30} color="black" />
                      </TouchableOpacity>

                        <Text style={styles.textoTitulo}>¡Bienvenido! </Text> 
                        <Button  style={styles.botonIngresos} onPress={() => navigation.navigate("listadoIngresos")}> 
                          <MaterialIcons name="attach-money" size={24} color="black" />
                            <Text style={styles.textoBotones}>Ingresos</Text>
                        </Button> 
                        <Button  style={styles.botonGastos} onPress={() => navigation.navigate('listadoGastos')}>
                          <MaterialIcons name="money-off" size={24} color="black" />
                            <Text style={styles.textoBotones}>Gastos</Text>
                        </Button> 
                        
                        <Button  style={styles.botonBalance} onPress={() => navigation.navigate("balance")}>
                          <MaterialIcons name="account-balance" size={24} color="black" />
                            <Text style={styles.textoBotones}>Balance</Text>
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

      logout:{
        width:50,
        marginTop:30,
        alignContent:"flex-end",
        alignItems:"flex-end",
        marginRight:20,
        alignSelf:"flex-end"
      },
    botonIngresos:{
      width:190,
      height:60,
      backgroundColor:"#ffffff",
      marginTop:50,
      alignSelf:"center",
      borderRadius:26,
      alignContent:"center",
      justifyContent:"center",

  },
  botonGastos:{
    width:190,
    height:60,
    backgroundColor:"#ffffff",
    marginTop:50,
    alignSelf:"center",
    borderRadius:26,
    alignContent:"center",
    justifyContent:"center",

},

botonBalance:{
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
  marginTop:50,
  color:"#FFFFFF",
  fontSize:40,
  fontWeight:"bold",
  marginLeft: 35,
},

view: {
  height: 20
},

});

export default mainScreen;