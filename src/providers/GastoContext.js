import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

// Acciones disponibles para el reducer
const gastoReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "createGasto":
      return { ...state, gastos: [...gastos, action.payload] };
    case "getGastos":
      return { ...state, gastos: action.payload };
    default:
      return state;
  }
};

// Referencia al nombre de la colección de gastos
const gastosRef = firebase.firestore().collection("gastos");

// Almacena una nueva nota para el usuario actual
const createGasto = (dispatch) => (descripcion, monto, author, timestamp) => {
  const data = {
    descripcion,
    monto,
    timestamp,
    userId: author,
  };

  gastosRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "errorMessage", payload: "¡Gasto agregado!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Obtener las notas del usuario
const getGastos = (dispatch) => (userId) => {
  gastosRef
    .where("userId", "==", userId)
    .orderBy("timestamp", "desc")
    .onSnapshot(
      (querySnapshot) => {
        const gastos = [];

        querySnapshot.forEach((doc) => {
          const gasto = doc.data();
          gasto.id = doc.id;
          notes.push(gasto);
        });

        dispatch({ type: "getGastos", payload: gastos });
      },
      (error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      }
    );
};

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  gastoReducer,
  {
    createGasto,
    getGastos,
  },
  {
    gastos: [],
    errorMessage: "",
  }
);
