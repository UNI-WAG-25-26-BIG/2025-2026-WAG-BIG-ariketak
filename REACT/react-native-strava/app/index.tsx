import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import Emaitzak from "./Emaitzak";
import Header from "./Header";

import { mock1 } from "../assets/klubak";
import CONFIG from "../config/config";

export type Kluba = {
  id: number | string;
  name: string;
  club_type?: string | null;
  privatea?: boolean | null;
  description?: string | null;
  sport_type?: string | null;
  member_count?: number | null;
  cover_photo_small?: string | null;
};

export default function Index() {
  const [query, setQuery] = useState<string>("");
  const [emaitza, setEmaitza] = useState<Kluba[]>([]);

  const callServer = async (param?: "all") => {
    Keyboard.dismiss();

    if (CONFIG.use_server) {
      try {
        let queryparams = "";
        if (param !== "all") {
          // encode, espazioak eta karaktere bereziak ondo joateko
          queryparams = `/search?q=${encodeURIComponent(query)}`;
        }

        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        setEmaitza(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log(error);
        Alert.alert("Errorea", "Ezin izan da daturik eskuratu.");
      }
    } else {
      // mock datuak
      setEmaitza(mock1.klubak as Kluba[]);
    }
  };

  return (
    <View style={styles.main}>
      <Header />

      <Text style={styles.title} accessibilityRole="header">
        Kluben bilatzailea
      </Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Idatzi klubaren izena"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        onSubmitEditing={() => callServer()}
      />

      <View style={styles.buttonsRow}>
        <Pressable style={styles.button} onPress={() => callServer()}>
          <Text style={styles.buttonText}>Bilatu</Text>
        </Pressable>

        <Pressable style={styles.buttonSecondary} onPress={() => callServer("all")}>
          <Text style={styles.buttonText}>Ikusi guztiak</Text>
        </Pressable>
      </View>

      {emaitza.length > 0 ? <Emaitzak emaitza={emaitza} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonSecondary: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
