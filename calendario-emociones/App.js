import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function App() {

  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const emociones = {
    feliz: "¡Sigue disfrutando los buenos momentos! 😊",
    normal: "Cada día es una nueva oportunidad.",
    triste: "Los días difíciles también pasan. 💙",
    enojado: "Respira profundo, todo mejorará.",
    cansado: "Descansar también es avanzar."
  };

  const seleccionarEmocion = (emocion) => {
    setMensaje(emociones[emocion]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>📅 Calendario de Emociones</Text>

      <Text style={styles.subtitulo}>Selecciona un día</Text>

      <View style={styles.calendario}>
        {Array.from({ length: 31 }, (_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.dia,
              diaSeleccionado === i + 1 && styles.diaSeleccionado
            ]}
            onPress={() => setDiaSeleccionado(i + 1)}
          >
            <Text>{i + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {diaSeleccionado && (
        <>
          <Text style={styles.subtitulo}>
            Día {diaSeleccionado} - ¿Cómo te sentiste?
          </Text>

          <View style={styles.botones}>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => seleccionarEmocion("feliz")}
            >
              <Text>😊 Feliz</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => seleccionarEmocion("normal")}
            >
              <Text>😐 Normal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => seleccionarEmocion("triste")}
            >
              <Text>😢 Triste</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => seleccionarEmocion("enojado")}
            >
              <Text>😡 Enojado</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => seleccionarEmocion("cansado")}
            >
              <Text>😴 Cansado</Text>
            </TouchableOpacity>

          </View>

          {mensaje !== "" && (
            <View style={styles.mensajeBox}>
              <Text style={styles.mensaje}>{mensaje}</Text>
            </View>
          )}
        </>
      )}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },

  subtitulo: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10
  },

  calendario: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },

  dia: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    borderRadius: 8
  },

  diaSeleccionado: {
    backgroundColor: "#a0e7e5"
  },

  botones: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10
  },

  boton: {
    backgroundColor: "#eee",
    padding: 10,
    margin: 5,
    borderRadius: 10
  },

  mensajeBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#dfffd8",
    borderRadius: 10
  },

  mensaje: {
    fontSize: 16,
    textAlign: "center"
  }

});