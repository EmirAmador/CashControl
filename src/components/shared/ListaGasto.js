import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context as GastoContext } from "../../providers/GastoContext";
import Gasto from "./gasto";


const ListaGasto = ({ navigation, gastos }) => {
    const { state, setCurrentNote } = useContext(GastoContext);
  
    const handleSelectNote = (gasto) => {
      setCurrentNote(gasto);
      //navigation.navigate("ModifyNote");
    };
  
    const emptyFlatList = (
      <View style={styles.emptyNotes}>
        <Text>Aun no tienes gastos para mostrar...</Text>
      </View>
    );
        console.log(gastos);
    return (
      <View style={styles.container}>
          
        <FlatList
          data={gastos}
          emptyFlatList={emptyFlatList}
          numColumns={2}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  handleSelectNote(item);
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
    emptyNotes: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
    },
  });
  
  export default ListaGasto;
  