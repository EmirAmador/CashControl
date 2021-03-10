import React, {  useContext} from "react";
import {Container,View,Header,Button, Left} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ContextoGastos } from "../src/context/movimientosContext";
import { ContextoIngresos } from "../src/context/ingresoContext";
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

const grafico = ({ navigation }) => { 
  const {gastos} = useContext(ContextoGastos);
  const {ingresos} = useContext(ContextoIngresos);

  var montos = gastos ? gastos.map((gasto)=>(gasto.monto)) : null;
  var montosIngreso = ingresos ? ingresos.map((ingreso)=>(ingreso.monto)) : null;

    
    var sumaGasto = 0;
    montos ? montos.forEach(function(monto){
        sumaGasto += monto;
    }):null; 

    var sumaIngreso = 0;
    montosIngreso ? montosIngreso.forEach(function(monto){
        sumaIngreso += monto;
    }):null; 

     var resta = sumaIngreso - sumaGasto; 
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
       return (
            <Container style={styles.Fondo}  >
                    {
                      ingresos,gastos <= 0 ?
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
                      <Text  style={styles.h2}>Te has pasado de tu presupesto </Text>
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
            </Container>
        );                  
}

const styles = StyleSheet.create({
  Fondo: {
    width: width,
    height: height,
    },
  
    header: {
        backgroundColor: '#3CCCD6',
    },

    view: {
        backgroundColor: "white",
        marginTop: 15,
    },

});

export default grafico;