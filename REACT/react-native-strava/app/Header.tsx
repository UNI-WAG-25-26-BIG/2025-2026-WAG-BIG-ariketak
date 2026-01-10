import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.goiburua}>
      <Image
        source={require("../assets/strava.webp")}
        style={styles.logo}
        accessibilityLabel="strava logoa"
      />
      <Text style={styles.mezua}>
        Ongi etorri strava web orrira
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goiburua: {
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 8,
  },
  mezua: {
    fontSize: 16,
    fontWeight: "500",
  },
});