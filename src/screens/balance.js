import React, { useEffect, useContext} from "react";
import {Container,View,Header,Button, Left} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { PieChart } from "react-native-chart-kit";
import {Context as GastoContext } from "../providers/GastoContext";
import {Context as AuthContext} from "../providers/AuthContext"
import { MaterialIcons } from '@expo/vector-icons';
import BottomTab from "../components/bottomTab"

//import { ContextoIngresos } from "../src/context/ingresoContext";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window");

// data del grafico

const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

const balance = ({ navigation }) => { 
  const { state} = useContext(AuthContext);

  const {state: gastoState, getGastos} = useContext(GastoContext);
  //const {ingresos} = useContext(ContextoIngresos);
  
  useEffect(() => {
    getGastos(state.user.id);
  }, []);
  var gastos= gastoState.gastos;
  console.log(gastos);
  var montos = [];
  montos = gastos ? gastos.map((gasto)=>(gasto.monto)) : null;
  console.log(montos);

  //var montosIngreso = ingresos ? ingresos.map((ingreso)=>(ingreso.monto)) : null;
  var montosIngreso = 500;


    //var sumaGasto = 0;
    const sumaGasto = montos.reduce((a, b) => Number(a) + Number(b),0);


    console.log(sumaGasto);

/*
    var sumaIngreso = 0;
    montosIngreso ? montosIngreso.forEach(function(monto){
        sumaIngreso += monto;
    }):null; */
console.log(gastos);
     var resta = montosIngreso - sumaGasto; 
  const data = [
    {
      name: "Ingresos",
      population: montosIngreso,
      color: "#236266",
      legendFontColor: "black",
      legendFontSize: 15
    },
    {
      name: "Gastos",
      population: sumaGasto,
      color: "#de3537",
      legendFontColor: "black",
      legendFontSize: 15
    }
  ];
       return (
            <Container style={styles.Fondo}  >
                
                <LinearGradient 
                    colors={['#480048','#C04848']} 
                    style={styles.LinearGradient}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}> 
                   
                    <Text style={styles.h1}>Balance</Text>
                    <View style={styles.divisor}/>
                    {
                      gastos <= 0 ?
                      <View>
                        <Text style={styles.advertencia}>Registra tus ingresos y gastos para ver Balance</Text>
                        <Button  style={styles.botonIngresos} onPress={() => navigation.navigate("pantallaIngresos")}> 
                        <MaterialIcons name="attach-money" size={24} color="black" />
                          <Text style={styles.textoBotones}>Ingresos</Text>
                      </Button> 
                      <Button  style={styles.botonGastos} onPress={() => navigation.navigate("pantallaGastos")}>
                        <MaterialIcons name="money-off" size={24} color="black" />
                          <Text style={styles.textoBotones}>Gastos</Text>
                      </Button> 
                    </View>
                      :
                      <View style={styles.view}>

                      <PieChart
                            //doughnut={true}
                            data={data}
                            width={width}
                            height={200}
                            chartConfig={chartConfig}
                            accessor="population"
                            backgroundColor="transparent"
                            absolute
                        /> 
                    </View>

                    }
    
                    {
                      resta < 0 ?  
                      <Text  style={styles.h2}>Te has pasado de tu presupuesto </Text>
                        : null
                    }
                    {
                      resta > 0 ?  
                      <Text style={styles.h2}>Te quedan {resta} de tu presupuesto</Text>
                        : null
                    }
                     {
                      resta = 0 ?  
                      <Text ></Text>
                        : null
                    }
                 
                </LinearGradient>
                <BottomTab></BottomTab>
            </Container>
        );                  
}

const styles = StyleSheet.create({
  Fondo: {
    width: width,
    height: height,
    },
  
    LinearGradient: {
      height: height * 0.9,
      width: width
      
    },

    header: {
        backgroundColor: '#3CCCD6',
    },

    h1:{
      fontSize: 33,
      textAlign:"center",
      marginTop: 50,
      color: '#FFFFFF',
  },

    h2:{
      fontSize: 33,
      textAlign:"center",
      marginTop: 12,
      color: '#FFFFFF',
    },

    advertencia:{
      fontSize: 30,
      textAlign:"center",
      marginTop: 12,
      color: 'red',
    },

    divisor:{
      borderBottomColor: '#fff',
      borderBottomWidth: 2,
      width: width * 0.9,
      alignSelf: "center"
    },

    texto: {
        textAlign: "center",
        marginTop: 20,
        color: "white",
        fontSize: 25,
    },

    icono: {
        color: "white",
        fontSize: 35,
        paddingBottom:35
    },

    boton: {
        alignContent:"center",
        backgroundColor: "#31898F",
        borderRadius: 40,
        marginLeft: 290,
        position: "absolute",
        top: 500
    },

    view: {
        backgroundColor: "white",
        marginTop: 15,
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

    textoBotones:{
        fontWeight:"bold",
        fontSize:20,
        justifyContent:"center",
        textAlign:"center",
    },

    logoImage: {
        width: width * 0.1,
        height: 50,
        marginTop: 10,
        marginLeft: 19,
    },

    
 });

export default balance;