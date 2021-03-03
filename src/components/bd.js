import React from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("financeManager.db");

// Obtener los gastos del usuario
const getGastos = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};

const getGastoPorId = (id, setNoteFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos where id = ?",
      [id],
      (_, { rows: { _array } }) => {
        setNoteFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gasto obtenido");
      }
    );
  });
};
// modificar gastos
const updateGastos = (descripcion,monto,id, setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE  gastos set descripcion = ? , monto = ? where id = ?", [descripcion,monto,id]);
  },
    (_t, error) => {
      console.log("Error al Actualizar gastos");
      console.log(error);
    },
    (_t, _success) => {
      setGastosFunc;
      console.log("Gastos Actualizados");
    }
  );
};




const getGastosAlimentacion = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos where idCategoria = 1",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};
const getGastosVivienda = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos where idCategoria = 2",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};

const getGastosTransporte = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos where idCategoria = 3",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};
const getGastosSalud = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos where idCategoria = 4",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};

const getGastosEntretenimiento = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos where idCategoria = 5",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};

const getGastosVestuario = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos where idCategoria = 6",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};

const getGastosEducacion = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos where idCategoria = 7",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};

const getGastosOtrosGastos = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from gastos where idCategoria = 8",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos obtenidos");
      }
    );
  });
};

const sumarGastos = (setGastosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select SUM monto from gastos ",
      [],
      (_, { rows: { _array } }) => {
        setGastosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de sumar los gastos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Gastos sumados");
      }
    );
  });
};

// Obtener los categorias de gastos
const getCategorias = (setCategoriasFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from categorias",
      [],
      (_, { rows: { _array } }) => {
        setCategoriasFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener las categorias");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Categorias obtenidos");
      }
    );
  });
};

// Insertar gastos
const insertGastos = (descripcion,monto,idCategoria,successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into gastos (descripcion,monto,idCategoria) values (?,?,?)", [descripcion,monto,idCategoria]);
    },
    (_t, error) => {
      console.log("Error al insertar gastos");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

// Borrar la tabla gastos
const dropDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table gastos");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de gastos");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
      
    );
  });
};

// Borrar la tabla categorias
const dropCategoriasTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table categorias");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de gastos");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
      
    );
  });
};


// Creación de la tabla de movimientos
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `create table if not exists gastos (id integer primary key autoincrement,
                                             descripcion text not null ,
                                             monto real not null ,
                                             fecha DATE DEFAULT (dateTime('now','localtime')),
                                             idCategoria integer ,
                                             foreign key (idCategoria) references categorias(id)
                                               
                                             );` );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
        console.log("Tabla Creada");

      }
    );
  });
};

//Creacion tabla categorias
const categoriesTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists categorias (id integer primary key autoincrement, categoria text not null)"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {

        resolve(success);
        console.log("table creada con exito");

      }
    );
  });
};

// Agrega una gasto por defecto
const setupGastosAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into gastos (descripcion) values (?)", [
          "Primer gasto"
        ]);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};


//Insertar categorias de gasto
const setupCategoriasAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into categorias (categoria) values (?),(?),(?),(?),(?),(?),(?),(?)", [
          ("Alimentacion"),
          ("Vivienda"),
          ("Transporte"),
          ("Salud"),
          ("Entretenimiento"),
          ("Vestuario"),
          ("Educacion"),
          ("Otros gastos")
         
        ]);
      },
      (_t, error) => {
        console.log("Error al momento de insertar las categorias");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("categorias cargadas ");

        resolve(success);
      }
    );
  });
};

/*********  INGRESOS  ************/

//Creacion de la tabla ingresos
const ingresosTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `create table if not exists ingresos (id integer primary key autoincrement,
                                                descripcion text not null ,
                                                monto real not null 
                                                );` );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
        console.log("Tabla Creada");

      }
    );
  });
};

// Insertar ingresos
const insertIngresos = (descripcion,monto,successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into ingresos (descripcion,monto) values (?,?)", [descripcion,monto]);
    },
    (_t, error) => {
      console.log("Error al insertar ingresos");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

// Obtener ingresos del usuario
const getIngresos = (setIngresosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from ingresos",
      [],
      (_, { rows: { _array } }) => {
        setIngresosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los ingresos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Ingresos obtenidos");
      }
    );
  });
};

// Borrar tabla ingresos
const dropIngresosTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table ingresos");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de ingresos");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
      
    );
  });
};

const getIngresoPorId = (id, setIngresosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from ingresos where id = ?",
      [id],
      (_, { rows: { _array } }) => {
        setIngresosFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los ingresos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Ingreso obtenido");
      }
    );
  });
};

// Modificar ingresos
const updateIngreso = (descripcion,monto,id, setIngresosFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE  ingresos set descripcion = ? , monto = ? where id = ?", [descripcion,monto,id]);
  },
    (_t, error) => {
      console.log("Error al momento de actualizar ingresos");
      console.log(error);
    },
    (_t, _success) => {
      setIngresosFunc;
      console.log("Ingresos Actualizados");
    }
  );
};

export const database = {
  getGastos,
  getGastosAlimentacion,
  getGastosVivienda,
  getGastosTransporte,
  getGastosSalud,
  getGastosEntretenimiento,
  getGastosVestuario,
  getGastosEducacion,
  getGastosOtrosGastos,
  getCategorias,
  getGastoPorId,
  insertGastos,
  dropDatabaseTableAsync,
  dropCategoriasTableAsync,
  setupDatabaseTableAsync,
  categoriesTableAsync,
  setupGastosAsync,
  setupCategoriasAsync,
  updateGastos,
  ingresosTableAsync,
  insertIngresos,
  getIngresos,
  dropIngresosTableAsync,
  getIngresoPorId,
  updateIngreso,
};
