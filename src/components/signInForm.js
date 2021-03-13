import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { validate } from "email-validator";
import { firebase } from "../firebase";
import Alert from "../components/shared/Shared";

const SigninForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

  // Verifica que se ingresan los datos del email y el password
  const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    }
  };

  const handleSignin = () => {
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        // Obtener el Unique Identifier generado para cada usuario
        // Firebase -> Authentication
        
        const uid = response.user.uid;
        console.log(uid);
        // Obtener la colección desde Firebase
        const usersRef = firebase.firestore().collection("users");

        // Verificar que el usuario existe en Firebase authentication
        // y también está almacenado en la colección de usuarios.
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              setError("User does not exist in the database!");
              return;
            }

            // Obtener la información del usuario y enviarla a la pantalla Home
            const user = firestoreDocument.data();

            navigation.navigate("mainScreen", { user });
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View>
      {error ? <Alert title={error} type="error" /> : null}
      <Input
        placeholder="Correo"
        leftIcon={<Icon name="envelope" />}
        value={email}
        onChangeText={setEmail}
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError
            ? "Por favor ingrese su cuenta de correo electrónico"
            : null
        }
      />
      <Input
        placeholder="Contraseña"
        leftIcon={<Icon name="lock" />}
        value={password}
        onChangeText={setPassword}
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={passwordError ? "Por favor ingrese su contraseña" : null}
      />
      <Button style={styles.boton} title="Log in" onPress={handleSignin} />
    </View>
  );
};

const styles = StyleSheet.create({
  boton:{
    marginTop: 20,
    width: 150,
    alignSelf:"center",
    marginBottom:20
  }
});

export default SigninForm;