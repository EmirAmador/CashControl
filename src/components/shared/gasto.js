import React  from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Card,Text, List, View} from "native-base";
const { width, height } = Dimensions.get("window");




const Gasto = ({ descripcion, monto }) => {
  return (
    
      <List style={styles.lista}>
        <Text>{descripcion}</Text>
        <Text>{monto}</Text>
        <View style={styles.divisor}/>
      </List>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.90,
    height: height * 0.07,
    margin: 5,
    
  },

  lista:{
    backgroundColor:"white",
    borderRadius: 5,
    height: height * 0.11,
    width: width * 0.9,
    alignSelf:"center",
    padding: 15,
    
},
divisor:{
  borderBottomColor: '#8a071f',
  borderBottomWidth: 2,
  width: width * 0.88,
  alignSelf: "center",
  marginTop: 3
},
  content: {
    flex: 1,
  },
  actions: {
    justifyContent: "flex-end",
  },
  
});

export default Gasto;
