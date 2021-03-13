import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/bd";

export const ContextoIngresos = createContext({});
export const IngresosContextProvider = (props) => {

    const { ingresos: initialIngresos, children } = props;
    const [ingresos, setIngresos] = useState(initialIngresos);
    const [ingreso, setIngreso] = useState("");

    useEffect(() => {
        refreshIngresos();
    }, []);

    const refreshIngresos = () => {
        return database.getIngresos(setIngresos);
    };

    const agregarIngreso = async (descripcion,monto) => {
        await database.insertIngresos(descripcion, monto, refreshIngresos);
        return refreshIngresos();
    };
    const modificarIngreso = async(descripcion,monto,id)   => {
        await database.updateIngreso(descripcion,monto,id,refreshIngresos)
        return refreshIngresos();
    }
    
    const getIngresoId = (id) => {
        return database.getIngresoPorId(id, setIngreso);
    }

    const contextoIngresosObject = {
        ingresos,
        ingreso,
        agregarIngreso,
        modificarIngreso,
        getIngresoId,
      };

    return (
        <ContextoIngresos.Provider value={contextoIngresosObject}>
            {children}    
        </ContextoIngresos.Provider>
    );
}