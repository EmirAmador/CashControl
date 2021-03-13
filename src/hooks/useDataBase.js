import React, { useEffect, useState } from "react";
import { database } from "../components/bd";

const useDatabase = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const loadDatabase = async () => {
    try {

      //Borrar Tablas
      //await database.dropDatabaseTableAsync();
      //await database.dropCategoriasTableAsync();
      //await database.dropIngresosTableAsync();

      //Crear tablas
      //await database.ingresosTableAsync();
      //await database.setupDatabaseTableAsync();
      //await database.categoriesTableAsync();

      //Llenar Tabla de Categorias
      //await database.setupCategoriasAsync();
  
      // Finaliza la carga de la DB

     setIsLoadingComplete(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDatabase();
  }, []);

  return isLoadingComplete;
};


export default useDatabase;
