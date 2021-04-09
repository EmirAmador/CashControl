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
      case "setCurrentNote":
      return { ...state, currentNote: action.payload };
    default:
      return state;
  }
};

// Referencia al nombre de la colección de gastos
const gastosRef = firebase.firestore().collection("gastos");

// Almacena una nueva nota para el usuario actual
const createGasto = (dispatch) => (descripcion, monto,autor) => {
  const data = {
    descripcion,
    monto,
    userId : autor,
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


const getGastos = (dispatch) => (userId) => {
  gastosRef
    .where("userId", "==", userId)
    .orderBy("descripcion", "desc")
    .onSnapshot(
      (querySnapshot) => {
        const  gastos= [];
        querySnapshot.forEach((doc) => {
          const gasto = doc.data();
          gasto.id = doc.id;
          gastos.push(gasto);

        });

        dispatch({ type: "getGastos", payload: gastos });

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
const setCurrentGasto = (dispatch) => (note) => {
  dispatch({ type: "setCurrentNote", payload: note });
};

// Actualizar una nota existente
const updateGasto = (dispatch) => (id, title, content, timestamp) => {
  notesRef
    .doc(id)
    .update({ title, content, timestamp })
    .then(() => {
      dispatch({
        type: "updateNote",
        payload: { note: { id, title, content, timestamp } },
      });
      dispatch({ type: "errorMessage", payload: "Note updated!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  gastoReducer,
  {
    clearMessage,
    updateGasto,
    setCurrentGasto,
    createGasto,
    getGastos,
  },
  {
    gastos: [],
    errorMessage: "",
    currentNote: { id: "", descripcion: "", monto: "" },

  }
);
