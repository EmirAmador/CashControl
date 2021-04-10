import React ,{useContext} from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Card,Text,CardItem,ScrollView,Button ,SwipeRow,Icon} from "native-base";
import {Context as GastoContext } from "../../providers/GastoContext";

const { width, height } = Dimensions.get("window");




const Gasto = ({ descripcion, monto }) => {

  const { width, height } = Dimensions.get("screen");
const { state: gastoState, deleteGasto } = useContext(GastoContext);


  const handleDeleteGasto= () => {
    deleteGasto(
      gastoState.currentNote.id,
    );
    alert('Gasto Eliminado');
  };

  return (
    <SwipeRow
    rightOpenValue={-85}
    body={
      <Card style={styles.container}>
        <Text>{descripcion}</Text>
        <Text>{monto}</Text>
      </Card>
    }
    right={
      <Button danger onPress={() => handleDeleteGasto()}>
        <Icon active name="trash" />
      </Button>
    }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.90,
    height: height * 0.07,
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
