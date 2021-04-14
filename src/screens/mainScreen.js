import React, { useEffect, useContext } from "react";
import {Container,View,Button,Card} from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 
import { StyleSheet, Text,Dimensions} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Image } from "react-native";
import {Context as AuthContext} from "../providers/AuthContext";
import {Context as GastoContext} from "../providers/GastoContext";
import {Context as IngresoContext} from "../providers/IngresoContext";

const { width, height } = Dimensions.get("window");

const mainScreen = ({ navigation }) => { 

  const { signout,state } = useContext(AuthContext);
  const {state: ingresoState, getIngresos } = useContext(IngresoContext);
  const {state: gastoState, getGastos } = useContext(GastoContext);

  useEffect(() => {
    getIngresos(state.user.id);
    getGastos(state.user.id);

  }, [state]);
  var gastos= gastoState.gastos;
  var ingresos= ingresoState.ingresos;

  var montos = [];
  var montosIngreso = [];

  montos = gastos ? gastos.map((gasto)=>(gasto.monto)) : null;
  montosIngreso = ingresos ? ingresos.map((ingreso)=>(ingreso.monto)) : null;

  const sumaGasto = montos.reduce((a, b) => Number(a) + Number(b),0);
  const sumaIngreso = montosIngreso.reduce((a, b) => Number(a) + Number(b),0);

  const calculos =() =>{
    if(sumaGasto <= 0 && sumaIngreso <= 0){
      var estado = "Agrega ingresos y gastos para ver tu estado";
    }
    else
    if(sumaGasto > sumaIngreso ){
      var estado = "Has excedido tu presupuesto";
    }
    else
    if(sumaGasto <= sumaIngreso ){
      var estado = "Saludable";
    }
    return estado;
  };
  
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
                        <Text style={styles.textoTitulo}>¡Bienvenido {state.user.fullname} ! </Text>
                        <Card style={styles.card}>

                        <Text style={styles.h2}>Ingresos: L. {sumaIngreso}  </Text> 
                        <Text style={styles.h2}>Gastos: L. {sumaGasto} </Text> 
                        <Text style={styles.h2}>Estado: {calculos()} </Text> 
                        </Card>

                        {/*<Button  style={styles.botonIngresos} onPress={() => navigation.navigate("listadoIngresos")}> 
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
                        </Button>  */} 
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
    h2:{
      fontSize: 20,
      textAlign:"left",
      marginTop: 30,
      marginLeft:20,
      color: '#FFFFFF',
  },
  card:{
    marginTop:40,
    width:width * 0.8,
    height:height *0.4,
    alignSelf:"center",
    backgroundColor:"transparent",
    shadowRadius: 9,
    shadowOpacity: 0.2,
    shadowColor: "#ffffff",
    shadowOffset: { width: 7, height: 7 },
    borderColor: "blue",
    borderRadius:5,
    
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
  marginTop:30,
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