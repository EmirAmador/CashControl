import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Card,Text,CardItem } from "native-base";

const { width, height } = Dimensions.get("screen");

const Gasto = ({ descripcion, monto }) => {
  return (
    
    <Card style={styles.container}>
        <Text>{descripcion}</Text>
        <Text>{monto}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.45,
    height: height * 0.2,
    margin: 5,
    
  },
  content: {
    flex: 1,
  },
  actions: {
    justifyContent: "flex-end",
  },
  
});

export default Gasto;
