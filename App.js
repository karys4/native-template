import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

//import { createNativeStackNavigator } from "@react-navigation/native-stack";

/*import VistaActualizar from "./views/actualizaVista";
import VistaGeneral from "./views/vistaGeneral";
import VistaCrear from "./views/crearVista";
import VistaEliminar from "./views/eliminarvista";*/

import React from "react";
import LoginForm from "./views/loginForm/LoginForm";

//const MyNavegacion = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#6f4a8e" }}>
      <LoginForm />
    </View>
    /*<NavigationContainer>
      <MyNavegacion.Navigator>
        <MyNavegacion.Screen name="Vista General" component={VistaGeneral} />
        <MyNavegacion.Screen name="Vista Crear" component={VistaCrear} />
        <MyNavegacion.Screen
          name="Vista Actualizar"
          component={VistaActualizar}
        />
        <MyNavegacion.Screen name="Vista Eliminar" component={VistaEliminar} />
      </MyNavegacion.Navigator>
    </NavigationContainer>*/
  );
}
