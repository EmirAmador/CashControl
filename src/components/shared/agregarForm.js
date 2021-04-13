import React from "react";
import {Container,View,Item,Input,Button} from "native-base";
import { StyleSheet, Text} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { format } from "date-fns";


const Agregar = ({handleSave,descripcion,setDescripcion,monto,setMonto, errorDescripcion,timestamp}) => {
    return(
        
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
                                 onChangeText={setMonto}
                                 placeHolderTextStyle={{ color: "#d3d3d3" }}
                                 />
                                 
                            </Item>
                            
                            <Item>
                            <MaterialIcons name="date-range" size={24} color="black" />
                              <Text> {`${format(timestamp, "eee H:m")}`}
                          </Text>
                            </Item>

                            <Button style={styles.botonCrear} rounded onPress={handleSave}>
                              <Text style={styles.textoBotones}>
                                Crear
                              </Text>    
                            </Button>
                            </View>
    );
}
const styles = StyleSheet.create({
  viewStyle:{
    width:350,
    height:500,
    alignSelf:"center"
},
inputError: {
    borderColor: "red",
  },
  itemStyle:{
    marginTop:20,
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
});

export default Agregar;
