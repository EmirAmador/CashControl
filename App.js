import React from 'react';
//import useDatabase from "./src/hooks/useDataBase";
import { GastosContextProvider } from "./src/Context/ContextoGasto";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {CategoriaContextProvider} from "./src/Context/categoriasContext"
import { IngresosContextProvider } from "./src/Context/ingresoContext";
import { theme } from "./src/components/theme";
import {Provider as AuthProvider, Context as AuthContext} from "./src/providers/AuthContext"
import Navigation from "./src/components/navigation";
import LongTimers from "./src/utils/LongTimers";

export default function App() {
  LongTimers();
  //const isLoadingComplete = useDatabase();

 return (
   <AuthProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <GastosContextProvider>
            <CategoriaContextProvider>
              <IngresosContextProvider> 
                <Navigation />
              </IngresosContextProvider> 
            </CategoriaContextProvider>
         </GastosContextProvider> 
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>

  );
}
