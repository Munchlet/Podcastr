import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	chipContainer: {
		backgroundColor: "#2c2838",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 200,
	},
	chipNormal: {
		borderColor: "#9e9e9edb",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
		borderWidth: 1,
		marginVertical: 6,
		marginHorizontal: 6,
		paddingHorizontal: 14,
		paddingVertical: 8,
	},
	chipChosen: {
		height: 8,
		width: 8,
		borderRadius: 100,
		backgroundColor: "#53f1cd",
		marginRight: 6,
	},
	chipText: {
		fontWeight: "bold",
		textTransform: "uppercase",
		color: "white",
	},
	chipMore: {
		fontWeight: "bold",
		color: "#54f9d2",
	},
	gradient: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
		marginVertical: 6,
		marginHorizontal: 6,
		paddingHorizontal: 1,
		paddingVertical: 1,
	},
});

export default function CategoryChip({ name, chosen = false, isMore = false }) {
	if (chosen)
		return (
			<LinearGradient colors={["#c937bf", "#dc3e78", "#f98f8f"]} start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }} style={styles.gradient}>
				<View style={styles.chipContainer}>
					<View style={styles.chipChosen}></View>
					{isMore ? <Text style={styles.chipMore}>+ More</Text> : <Text style={styles.chipText}>{name}</Text>}
				</View>
			</LinearGradient>
		);

	return (
		<View style={{ ...styles.chipContainer, ...styles.chipNormal }}>
			{isMore ? <Text style={styles.chipMore}>+ More</Text> : <Text style={styles.chipText}>{name}</Text>}
		</View>
	);
}
