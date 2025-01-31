import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.meditationImage}
        source={{
          uri: "https://images.unsplash.com/photo-1737265396686-00377dcd99d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        {/* Sprinkled Icons */}
        <Ionicons name="laptop" size={24} color="#00aeff" style={styles.icon1} />
        <Ionicons name="code" size={24} color="#00aeff" style={styles.icon2} />
        <Ionicons name="code" size={24} color="#00aeff" style={styles.icon3} />
        <Ionicons name="rocket" size={24} color="#00aeff" style={styles.icon4} />
        <Ionicons name="rocket" size={24} color="#00aeff" style={styles.icon5} />
      </ImageBackground>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            Linking.openURL("https://hng.tech/hire/react-native-developers");
          }}
        >
          <View style={styles.btn1}>
            <Button title="HNG React-Native Devs" />
            <Ionicons name="arrow-forward-circle" color="white" size={32} />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            Linking.openURL("https://github.com/NkwiCyril/HNG_Internship");
          }}
        >
          <View style={styles.btn2}>
            <Ionicons name="logo-github" size={32} />
            <Button title="GitHub Repo" color="black" />
          </View>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  meditationImage: {
    flex: 1,
    width: "100%",
    display: "relative",
  },

  container: {
    borderColor: "red",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },

  btn1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    padding: 5,
    marginVertical: 10,
    width: 300,
    backgroundColor: "#00aeff",
  },

  btn2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 5,
    padding: 5,
    width: 300,
    backgroundColor: "#fff",
  },

  icon1: {
    position: "absolute",
    top: "10%",
    left: "10%",
  },

  icon2: {
    position: "absolute",
    top: "20%",
    right: "15%",
  },

  icon3: {
    position: "absolute",
    bottom: "30%",
    left: "5%",
  },

  icon4: {
    position: "absolute",
    bottom: "15%",
    right: "20%",
  },

  icon5: {
    position: "absolute",
    top: "5%",
    right: "5%",
  },
});