import React, { useEffect, useContext} from "react";
import {Container,View,Button} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { PieChart } from "react-native-chart-kit";
import {Context as GastoContext } from "../providers/GastoContext";
import {Context as AuthContext} from "../providers/AuthContext";
import {Context as IngresoContext} from "../providers/IngresoContext"
import { MaterialIcons } from '@expo/vector-icons';
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
  const {state: ingresoState, getIngresos} = useContext(IngresoContext);
  
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


     var resta = montosIngreso - montos; 
    const data = [
    {
      name: "Ingresos",
      population: sumaIngreso,
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

  const calculos =() =>{
    if(resta == 0 && gastos > 0  && ingresos > 0){
      var estado = "Has completado tu presupuesto";
    }
    if(resta > 0 ){
      var estado = ` Te quedan ${resta} de tu presupuesto` ;
    }
    if(resta < 0 ){
      var estado = "Te has pasado de tu presupesto";
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


                      <Text  style={styles.h2}>{calculos()} </Text>

                 
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

    h1:{
      fontSize: 33,
      textAlign:"center",
      marginTop: 100,
      color: '#FFFFFF',
      fontWeight:"bold",
  },
  h2:{
    fontSize: 33,
    textAlign:"center",
    marginTop: 10,
    color: '#FFFFFF',
    fontWeight:"bold",
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

    
 });

export default balance;