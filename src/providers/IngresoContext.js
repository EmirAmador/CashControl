import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

// Acciones disponibles para el reducer
const ingresoReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "createIngreso":
      return { ...state, ingresos: [...ingresos, action.payload] };
    case "getIngresos":
      return { ...state, ingresos: action.payload };
      case "setCurrentIngreso":
      return { ...state, currentIngreso: action.payload };
      case "updateIngreso":
      return {
        ...state,
        ingresos: state.ingresos.map((ingreso) => {
          if (ingreso.id === action.payload.ingreso.id) {
            return {
              ...ingreso,
              descripcion: action.payload.ingreso.descripcion,
              monto: action.payload.ingreso.monto,
              timestamp: action.payload.ingreso.timestamp,

            };
          }

          return ingreso;
        }),
      };
      case "deleteIngreso":
      return { ...state, ingresos: action.payload };
    default:
      return state;
  }
};

// Referencia al nombre de la colección de ingresos
const ingresosRef = firebase.firestore().collection("ingresos");

// Almacena una nueva nota para el usuario actual
const createIngreso = (dispatch) => (descripcion, monto,timestamp,autor) => {
  const data = {
    descripcion,
    monto,
    timestamp,
    userId : autor,
  };

  ingresosRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "errorMessage", payload: "Ingreso agregado!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};


const getIngresos = (dispatch) => (userId) => {
  ingresosRef
    .where("userId", "==", userId)
    .onSnapshot(
      (querySnapshot) => {
        const  ingresos= [];
        querySnapshot.forEach((doc) => {
          const ingreso = doc.data();
          ingreso.id = doc.id;
          ingresos.push(ingreso);
          console.log(userId);
        });

        dispatch({ type: "getIngresos", payload: ingresos });
        dispatch({ type: "errorMessage", payload: "Tu ingreso ha sido registrado!" });


      },
      (error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      }
    );
};

// Limpiar el mensaje del contexto
const clearMessage = (dispatch) => () => {
  dispatch({ type: "errorMessage", payload: "" });
};

// Establece la nota actual seleccionada
const setCurrentIngreso = (dispatch) => (ingreso) => {
  dispatch({ type: "setCurrentIngreso", payload: ingreso });
};

// Actualizar una nota existente
const updateIngreso = (dispatch) => (id, descripcion, monto,timestamp) => {
  ingresosRef
    .doc(id)
    .update({ descripcion, monto,timestamp})
    .then(() => {
      dispatch({
        type: "updateIngreso",
        payload: { ingreso: { id, descripcion, monto ,timestamp} },
      });
      dispatch({ type: "errorMessage", payload: "Ingreso Actualizado!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};
const deleteIngreso = (dispatch) => (id) => {
  ingresosRef
    .doc(id)
    .delete()
    .then(() => {
      dispatch({
        type: "deleteIngreso",
        payload: { ingreso: { id } },
      });
      dispatch({ type: "errorMessage", payload: "Ingreso Eliminado!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  ingresoReducer,
  {
    clearMessage,
    updateIngreso,
    deleteIngreso,
    setCurrentIngreso,
    createIngreso,
    getIngresos,
  },
  {
    ingresos: [],
    errorMessage: "",
    currentIngreso: { id: "", descripcion: "", monto: "" },

  }
);
