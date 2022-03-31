import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import CategoriesScreens from "./screens/CategoriesScreens";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreens />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
