import React, {useEffect, useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import { Context as GastoContext } from "../../providers/GastoContext";
import { Context as AuthContext } from "../../providers/AuthContext";

import Gasto from "./gasto";

const { width, height } = Dimensions.get("window");


const ListaGasto = ({ navigation, gastos }) => {

  const { state } = useContext(AuthContext);
  const { state: gastoState,setCurrentGasto,deleteGasto } = useContext(GastoContext);

  useEffect(() => {
    gastoState.currentGasto
  }, [gastoState.currentGasto]);

    const handleSelectGasto = (gasto) => {
      setCurrentGasto(gasto);

      navigation.navigate("modificarGasto");
    };

    const handleDeleteGasto = (gasto) => {
      deleteGasto(gasto.id);
      navigation.navigate("listadoGastos");
    };
    

    const emptyFlatList = (
      <View style={styles.emptyNotes}>
        <Text>Aun no tienes gastos para mostrar...</Text>
      </View>
    );


        const alertDelete = (gasto) => {
          setCurrentGasto(gasto);
          //console.log("hola",gasto.id);
          Alert.alert(
            "Eliminar Gasto",
            "Estas seguro de eliminar este gasto?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => handleDeleteGasto(gasto)}
            ]
          );
        }

    return (
      <View style={styles.lista}>
        <FlatList
          data={gastos}
          numColumns={1}
          renderItem={({item }) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  handleSelectGasto(item);
                }}
                onLongPress={() => {
                  alertDelete(item);
                }}
              >
                  
                <Gasto
                  key={item.id}
                  descripcion={item.descripcion}
                  monto={item.monto}
                />
              </TouchableOpacity>
              
            </>
          )}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    lista:{
        backgroundColor:"white",
        height: height * 0.75,
        width: width * 0.9,
        alignSelf: "center",
        borderRadius: 8,
        marginTop: 8
    },
    emptyNotes: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
    },
  });
  
  export default ListaGasto;
  