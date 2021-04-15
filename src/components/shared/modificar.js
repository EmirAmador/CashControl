import React  from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Text,View,Item,Input,Button} from "native-base";
const { width, height } = Dimensions.get("window");
import { FontAwesome5 } from '@expo/vector-icons';
import * as Font from 'expo-font';

const Modificar = ({handleSave,descripcion,setDescripcion,monto,setMonto, errorDescripcion}) => {

  
    return (
        
        <View style={styles.viewStyle}>
                            <Item  style={errorDescripcion ? styles.inputError : styles.itemStyle}
            >
                                <Input 
                                value={descripcion}
                                onChangeText={setDescripcion}
                                placeholder='Descripción'/>
                               
                            </Item>
                            
                            <Item style={errorDescripcion ? styles.inputError : styles.itemStyle} >
                                <FontAwesome5 name="money-bill-alt" size={24} color="black" />
                                <Input  placeholder='Monto'
                                value={monto}
                                  onChangeText={setMonto}/>
                            </Item>
                            
                            

                            <Button style={styles.botonCrear} rounded onPress={handleSave}>
                              <Text style={styles.textoBotones}>
                                Modificar
                              </Text>    
                            </Button>
                            </View>
    );

}

const styles = StyleSheet.create({
    
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
fontSize:20,
justifyContent:"center",
textAlign:"center",
color:"#000000",
},

viewStyle:{
    width:350,
    height:500,
    alignSelf:"center"
},
});

export default Modificar;
