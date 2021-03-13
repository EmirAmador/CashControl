import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { validate } from "email-validator";
import { firebase } from "../firebase";
import Alert from "../components/shared/Shared";

const PasswordForm = ({ navigation }) => {
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // Verifica que se ingresan los datos del password
  const handleVerify = (input) => {
    if (input === "password") {
      // Verificar la contraseña
      if (!password) setPasswordError(true);
      else if (password.length < 6) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "confirmPassword") {
      // Verificar la confirmación de la contraseña
      if (!confirmPassword) setConfirmPasswordError(true);
      else if (confirmPassword !== password) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    }
  };

  const handleSignin = () => {
    
    firebase
      .auth()
      .signInWithPassword(password)
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

            navigation.navigate("login", { user });
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
        placeholder="Password"
        leftIcon={<Icon name="lock" />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={
          passwordError
            ? "Por favor ingresa una contraseña de mínimo 6 caracteres"
            : ""
        }
      />
      <Input
        placeholder="Confirm password"
        leftIcon={<Icon name="lock" />}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("confirmPassword");
        }}
        errorMessage={
          confirmPasswordError
            ? "Por favor reingresa la contraseña y verifica que es correcta"
            : ""
        }
      />
      <Button style={styles.boton} title="Guardar Contraseña" onPress={() => navigation.navigate("login")} />
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

export default PasswordForm;