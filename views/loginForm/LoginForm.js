//import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { Component } from "react";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      correo: "",
      contrasena: "",
      correoMensajeValidacion: "",
      contrasenaMensajeValidacion: "",
    };
  }
  cambioCampoCorreo(correo) {
    this.setState({ correo });
  }

  cambioCampoContrasena(contrasena) {
    this.setState({ contrasena });
  }

  cambioTextoCampos(textoCampos) {
    this.setState({ textoCampos });
  }

  botonOprimido() {
    //Borrar mensaje de texto cada vez que se oprime botón de iniciar sesión
    this.setState({ correoMensajeValidacion: "" });
    this.setState({ contrasenaMensajeValidacion: "" });

    if (this.state.correo == "" && this.state.contrasena != "") {
      this.setState({
        correoMensajeValidacion: "Ingresa tu correo electrónico",
      });
    } else if (this.state.contrasena == "" && this.state.correo != "") {
      this.setState({ contrasenaMensajeValidacion: "Ingresa tu contraseña" });
    } else if ((this.state.correo && this.state.contrasena) == "") {
      this.setState({
        correoMensajeValidacion: "Estos campos son requeridos",
      });
      this.setState({
        contrasenaMensajeValidacion: "Estos campos son requeridos",
      });
    }
  }

  render() {
    return (
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
            value={this.state.correo}
            onChangeText={(correo) => this.cambioCampoCorreo(correo)}
          />
          <Text style={styles.textoCampos}>
            {this.state.correoMensajeValidacion}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor={"#6f4a8e"}
            value={this.state.contrasena}
            onChangeText={(contrasena) =>
              this.cambioCampoContrasena(contrasena)
            }
          />

          <Text style={styles.textoCampos}>
            {this.state.contrasenaMensajeValidacion}
          </Text>
          <TouchableOpacity style={styles.boton}>
            <Text
              style={styles.titleButton}
              onPress={() => this.botonOprimido()}
            >
              Iniciar sesión
            </Text>
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
            <Text style={styles.titleButton}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

//Agregando estilos a los componentes
const styles = StyleSheet.create({
  principal: { backgroundColor: "#6f4a8e" },
  container: {
    backgroundColor: "#6f4a8e",
    alignItems: "center",
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
  textoCampos: {
    color: "red",
  },
});
