import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	chipContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},
	chipChosen: {
		height: 20,
		width: 20,
		borderRadius: 100,
		backgroundColor: "limegreen",
	},
	chipText: {
		textTransform: "uppercase",
		color: "white",
	},
	chipMore: {
		color: "limegreen",
	},
});

export default function CategoryChip({ name, chosen = false, isMore = false }) {
	return (
		<View style={styles.chipContainer}>
			{chosen && <View style={styles.chipChosen}></View>}
			{isMore ? <Text style={styles.chipMore}>+ More</Text> : <Text style={styles.chipText}>{name}</Text>}
		</View>
	);
}
