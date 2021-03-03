import React, { useEffect, createContext, useState } from "react";
import { database } from "../../components/bd";

// Crear el contexto de las notas
export const ContextoGastos = createContext({});
export const GastosContextProvider = (props) => {
 
  const { gastos: initialGastos, children } = props;
  const [gastos, setGastos] = useState(initialGastos);
  const [gasto,setGasto] = useState("");

  const { gastosAlimentacion: initialGastosAlimentacion, children1 } = props;
  const [gastosAlimentacion , setGastosAlimentacion] = useState(initialGastosAlimentacion);
 
  const { gastosVivienda: initialGastosVivienda, children2 } = props;
  const [gastosVivienda, setGastosVivienda] = useState(initialGastosVivienda);

  const { gastosTrasporte: initialGastosTrasporte, children3 } = props;
  const [gastosTrasporte, setGastosTransporte] = useState(initialGastosTrasporte);

  const { gastosSalud: initialGastosSalud, children4 } = props;
  const [gastosSalud, setGastosSalud] = useState(initialGastosSalud);

  const { gastosEntretenimiento: initialGastosEntretenimiento, children5 } = props;
  const [gastosEntretenimiento, setGastosEntretenimiento] = useState(initialGastosEntretenimiento);

  const { gastosVestuario: initialGastosVestuario, children6 } = props;
  const [gastosVestuario, setGastosVestuario] = useState(initialGastosVestuario);
  
  const { Educacion: initialGastosEducacion, children7 } = props;
  const [gastosEducacion, setGastosEducacion] = useState(initialGastosEducacion);
  
  const { gastosOtros: initialGastosOtros, children8 } = props;
  const [gastosOtros, setGastosOtros] = useState(initialGastosOtros);

  useEffect(() => {
    refreshGastos();
    refreshGastosAlimentacion();
    refreshGastosVivienda();
    refreshGastosTransporte();
    refreshGastosSalud();
    refreshGastosEntretenimiento();
    refreshGastosVestuario();
    refreshGastosEducacion();
    refreshGastosOtros();
    
  }, []);
  
  const refreshGastos = () => {
    return database.getGastos(setGastos);
  };
  const refreshGastosAlimentacion = () => {
    return database.getGastosAlimentacion(setGastosAlimentacion);
  };
  const refreshGastosVivienda = () => {
    return database.getGastosVivienda(setGastosVivienda);
  };

  const refreshGastosTransporte = () => {
    return database.getGastosTransporte(setGastosTransporte);
  };

  const refreshGastosSalud = () => {
    return database.getGastosSalud(setGastosSalud);
  };

  const refreshGastosEntretenimiento = () => {
    return database.getGastosEntretenimiento(setGastosEntretenimiento);
  };

  const refreshGastosVestuario = () => {
    return database.getGastosVestuario(setGastosVestuario);
  };

  const refreshGastosEducacion = () => {
    return database.getGastosEducacion(setGastosEducacion);
  };

  const refreshGastosOtros = () => {
    return database.getGastosOtrosGastos(setGastosOtros);
  };

  const agregarGasto = async (descripcion,monto,idCategoria) => {
    await database.insertGastos(descripcion,monto,idCategoria, refreshGastos);
    return refreshGastos(),refreshGastosAlimentacion(),refreshGastosEducacion(),refreshGastosEntretenimiento(),refreshGastosOtros(),refreshGastosSalud(),refreshGastosTransporte(),refreshGastosVestuario(),refreshGastosVivienda();
  };

  const modificarGastos = async(descripcion,monto,id)   => {
    await database.updateGastos(descripcion,monto,id,refreshGastos)
    return refreshGastos(),refreshGastosAlimentacion(),refreshGastosEducacion(),refreshGastosEntretenimiento(),refreshGastosOtros(),refreshGastosSalud(),refreshGastosTransporte(),refreshGastosVestuario(),refreshGastosVivienda();
  }

  const getGastoId = (id) => {
    return database.getGastoPorId(id, setGasto);
  }
  // Crear el objeto de contexto
  const contextoGastosObject = {
    gastos,
    gasto,
    gastosAlimentacion,
    gastosVivienda,
    gastosTrasporte,
    gastosSalud,
    gastosEntretenimiento,
    gastosVestuario,
    gastosEducacion,
    gastosOtros,
    agregarGasto,
    getGastoId,
    modificarGastos,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <ContextoGastos.Provider value={contextoGastosObject}>
      {children1}
      {children2}
      {children3}
      {children4}
      {children5}
      {children6}
      {children7}
      {children8}
      {children}
    </ContextoGastos.Provider>
  );
};