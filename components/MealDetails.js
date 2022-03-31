import { View, Text, StyleSheet } from "react-native";

function MealDetails(props) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{props.duration}m</Text>
      <Text style={styles.detailItem}>{props.complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{props.affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
