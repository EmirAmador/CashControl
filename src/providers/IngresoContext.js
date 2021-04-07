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
    default:
      return state;
  }
};

// Referencia al nombre de la colección de gastos
const ingresosRef = firebase.firestore().collection("ingresos");

// Almacena una nueva nota para el usuario actual
const createIngreso = (dispatch) => (descripcion, monto, author, timestamp) => {
  const data = {
    descripcion,
    monto,
    timestamp,
    userId: author,
  };

  ingresosRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "errorMessage", payload: "¡Ingreso agregado!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Obtener las notas del usuario
const getIngresos = (dispatch) => (userId) => {
  ingresosRef
    .where("userId", "==", userId)
    .orderBy("timestamp", "desc")
    .onSnapshot(
      (querySnapshot) => {
        const ingresos = [];

        querySnapshot.forEach((doc) => {
          const ingreso = doc.data();
          ingreso.id = doc.id;
          ingresos.push(ingreso);
        });

        dispatch({ type: "getIngresos", payload: ingresos });
      },
      (error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      }
    );
};

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  ingresoReducer,
  {
    createIngreso,
    getIngresos,
  },
  {
    ingresos: [],
    errorMessage: "",
  }
);
