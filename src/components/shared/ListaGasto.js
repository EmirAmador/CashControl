import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import { Context as GastoContext } from "../../providers/GastoContext";
import Gasto from "./gasto";
const { width, height } = Dimensions.get("window");


const ListaGasto = ({ navigation, gastos }) => {
    const { state, setCurrentGasto } = useContext(GastoContext);
  
    const handleSelectGasto = (gasto) => {
      setCurrentGasto(gasto);
      navigation.navigate("modificarGasto");
    };
  
    const emptyFlatList = (
      <View style={styles.emptyNotes}>
        <Text>Aun no tienes gastos para mostrar...</Text>
      </View>
    );
        console.log(gastos);
    return (
      <View style={styles.lista}>
              <ScrollView>

        <FlatList
          data={gastos}
          numColumns={1}
          renderItem={({item }) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  handleSelectGasto(item);
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
            </ScrollView>

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
  