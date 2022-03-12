import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginForm({ text }) {
  return (
    //Si es más de un elemento, debe ir dentro de un View.
    <SafeAreaView style={styles.principal}>
      <View style={styles.container}>
        <Image
          style={styles.imagen}
          source={require("../../assets/Logo.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          autoCapitalize="none"
          placeholderTextColor={"#6f4a8e"}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor={"#6f4a8e"}
        />
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.titleButton}>{text}Iniciar sesión</Text>
        </TouchableOpacity>

        <Text
          style={{
            color: "white",
            fontSize: 15,
            margin: 20,
            textAlign: "center",
            textDecorationLine: "underline",
          }}
          onPress={() => Linking.openURL("#")}
        >
          Olvidaste la contraseña
        </Text>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.titleButton}>{text}Registrarse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

//Agregando estilos a los componentes
const styles = StyleSheet.create({
  principal: { backgroundColor: "#6f4a8e" },
  container: {
    backgroundColor: "#6f4a8e",
    alignItems: "center",
    marginTop: 80,
  },
  input: {
    height: 60,
    width: 365,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  boton: {
    height: 60,
    width: 365,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#221f3b",
  },
  titleButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    paddingTop: 20,
  },
  imagen: {
    alignContent: "center",
    justifyContent: "center",
  },
});
