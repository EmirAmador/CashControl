import React, { Component, useEffect, useState ,useContext} from "react";
import {Container,View,Header,Form,Item,Input,Icon,DatePicker, Right,Button,Card,List,ListItem,Fab,Left,Body} from "native-base";
import { StyleSheet, Text,Dimensions, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ContextoGastos } from "../Context/ContextoGasto";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get("window");


const List= () => {
    const {gastos,gastosAlimentacion,gastosVivienda,gastosTrasporte,gastosSalud,gastosEntretenimiento,gastosVestuario,gastosEducacion,gastosOtros} = useContext(ContextoGastos);
    var montos = gastos ? gastos.map((gasto)=>(gasto.monto)) : null;
    
    
    var suma = 0;
    montos ? montos.forEach(function(monto){
        suma += monto;
    }):null; 
   console.log(suma);
return (
    <Container style={styles.Fondo}>
         
        
        <LinearGradient 
           colors={[colors= '#AB2C2C','#9C4142','#866064','#78757A', '#62959C','#56A6AE','#48BBC4','#3CCCD6']} 
           style={styles.LinearGradient}
           start={{ x: 1, y: 1 }}
           end={{ x: 1, y: 0 }}> 
           <View >
                <Image source={require("../assets/logoSimbolo.png")} style={styles.logoImage} />
            
               <Text style={styles.h1}>Gastos</Text>
               <View style={styles.divisor}/>
               
               <Card style={styles.lista}>
                   <ScrollView>
                      <List>
                            
                         {gastosAlimentacion != "" ?
                            <ListItem itemDivider style={styles.item}  >
                                <Text style={styles.textItem}>Alimentacion</Text>
                            </ListItem>
                            :null
                          }
                            
                        {gastosAlimentacion
                 
                            ? 
                            
                            gastosAlimentacion.map((alimento) => (
                                <ListItem key={alimento.id.toString()}
                                onPress={() => {                                            
                                    navigation.navigate("modificarGasto", { id: alimento.id });
                                }}>
                                    <Left><Text>{alimento.descripcion}</Text></Left> 
                                    <Body><Text> {alimento.monto}</Text></Body>  
                                    <Right><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Right> 

                                </ListItem>
                            ))
                            : null}

                          {gastosVivienda != "" ?
                            <ListItem itemDivider style={styles.item}>
                                <Text style={styles.textItem}>Vivienda</Text>
                            </ListItem>
                          :null}  
                         
                         {gastosVivienda
                 
                            ? gastosVivienda.map((vivienda) => (
                                <ListItem key={vivienda.id.toString()}
                                onPress={() => {                                            
                                    navigation.navigate("modificarGasto", { id: vivienda.id });
                                }}>
                                    <Left><Text>{vivienda.descripcion}</Text></Left> 
                                    <Body><Text> {vivienda.monto}</Text></Body>  
                                    <Right><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Right> 


                                </ListItem>
                            ))
                            : null}

                        {gastosTrasporte != "" ? 
                            <ListItem itemDivider style={styles.item}>
                                <Text style={styles.textItem}>Trasporte</Text>
                            </ListItem>
                            :null}

                         {gastosTrasporte
                 
                            ? gastosTrasporte.map((transporte) => (
                                <ListItem key={transporte.id.toString()}
                                onPress={() => {                                            
                                    navigation.navigate("modificarGasto", { id: transporte.id });
                                }}>
                                    <Left><Text>{transporte.descripcion}</Text></Left> 
                                    <Body><Text> {transporte.monto}</Text></Body>  
                                    <Right><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Right> 


                                </ListItem>
                            ))
                            : null} 
                        {gastosSalud != "" ?
                             <ListItem itemDivider style={styles.item}>
                                <Text style={styles.textItem}>Salud</Text>
                            </ListItem>
                        :null}
                       
                         {gastosSalud
                 
                            ? gastosSalud.map((salud) => (
                                <ListItem key={salud.id.toString()}
                                onPress={() => {                                            
                                    navigation.navigate("modificarGasto", { id: salud.id });
                                }}>
                                    <Left><Text>{salud.descripcion}</Text></Left> 
                                    <Body><Text> {salud.monto}</Text></Body>  
                                    <Right><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Right> 


                                </ListItem>
                            ))
                            : null}  

                         {gastosEntretenimiento != "" ?
                            <ListItem itemDivider style={styles.item}>
                                <Text style={styles.textItem}>Entretenimiento</Text>
                            </ListItem>
                         :null}
                         
                         {gastosEntretenimiento
                 
                            ? gastosEntretenimiento.map((entretenimiento) => (
                                <ListItem key={entretenimiento.id.toString()}
                                onPress={() => {                                            
                                    navigation.navigate("modificarGasto", { id: entretenimiento.id });
                                }}>
                                    <Left><Text>{entretenimiento.descripcion}</Text></Left> 
                                    <Body><Text> {entretenimiento.monto}</Text></Body>  
                                    <Right><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Right> 


                                </ListItem>
                            ))
                            : null}    

                        {gastosVestuario != "" ?
                            <ListItem itemDivider style={styles.item}>
                                <Text style={styles.textItem}>Vestuario</Text>
                            </ListItem>
                        :null}
                        
                         {gastosVestuario
                 
                            ? gastosVestuario.map((vestuario) => (
                                <ListItem key={vestuario.id.toString()}
                                onPress={() => {                                            
                                    navigation.navigate("modificarGasto", { id: vestuario.id });
                                }}>
                                    <Left><Text>{vestuario.descripcion}</Text></Left> 
                                    <Body><Text> {vestuario.monto}</Text></Body>  
                                    <Right><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Right> 


                                </ListItem>
                            ))
                            : null}     

                            {gastosEducacion != "" ?
                                 <ListItem itemDivider style={styles.item}>
                                    <Text style={styles.textItem}>Educacion</Text>
                                </ListItem>
                            :null}
                         
                         {gastosEducacion
                 
                            ? gastosEducacion.map((educacion) => (
                                <ListItem key={educacion.id.toString()}
                                onPress={() => {                                            
                                    navigation.navigate("modificarGasto", { id: educacion.id });
                                }}>
                                    <Left><Text>{educacion.descripcion}</Text></Left> 
                                    <Body><Text> {educacion.monto}</Text></Body>  
                                    <Right><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Right> 

                                </ListItem>
                            ))
                            : null}         

                        {gastosOtros != "" ?
                        <ListItem itemDivider style={styles.item}>
                            <Text style={styles.textItem}>Otros</Text>
                        </ListItem>
                        :null}
                        
                         {gastosOtros
                 
                            ? gastosOtros.map((otros) => (
                                <ListItem key={otros.id.toString()}
                                onPress={() => {                                            
                                    navigation.navigate("modificarGasto", { id: otros.id });
                                }}>
                                    <Left><Text>{otros.descripcion}</Text></Left> 
                                    <Body><Text> {otros.monto}</Text></Body>  
                                    <Right><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Right> 


                                </ListItem>
                            ))
                            : null}      
                        </List>

                               
                      
                         
                    </ScrollView>
                    <View>
                        <Text style={styles.textoTotal} >Total: {suma}</Text>
                    </View>
                </Card>
                <Fab
                    active={true}
                    position="bottomRight"
                    style={{ backgroundColor: "#ff0023" }}
                    direction="up"
                    onPress={() => {
                        navigation.navigate("agregarGastos")
                    }}
                    >
                    <Icon name="plus" type="FontAwesome" />
                    </Fab>
             


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

h1:{
fontSize: 33,
textAlign:"center",
marginTop: 0,
color: '#236266',
},

divisor:{
borderBottomColor: '#236266',
borderBottomWidth: 2,
width: width * 0.9,
alignSelf: "center"
},

texto: {
textAlign: "center",
marginTop: 10,
},

lista:{
backgroundColor:"white",
height: height * 0.75,
width: width * 0.9,
alignSelf: "center",
borderRadius: 8,
marginTop: 8
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
textoTotal:{
fontWeight : "bold",
textAlign:"center",
fontSize:20
},
logoImage: {
width: width * 0.1,
height: 50,
marginTop: 40,
marginLeft:19,

},
item:{
backgroundColor: "#FFCDD2",
justifyContent:"center"

},
textItem:{
fontWeight:"bold",
fontSize:15,
color: '#236266',
}
});