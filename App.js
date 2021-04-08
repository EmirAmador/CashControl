import React from 'react';
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "./src/components/theme";
import {Provider as AuthProvider, Context as AuthContext} from "./src/providers/AuthContext"
import { Provider as GastoProvider } from "./src/providers/GastoContext";
import Navigation from "./src/components/navigation/index";
import LongTimers from "./src/utils/LongTimers";

export default function App() {
  LongTimers();

 return (
   <AuthProvider>
     <GastoProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation/>
          </SafeAreaProvider>
        </ThemeProvider>
      </GastoProvider>
    </AuthProvider>

  );
}
