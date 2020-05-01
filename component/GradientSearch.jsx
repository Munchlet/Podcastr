import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		height: 50,
		marginTop: 20,
		marginBottom: 32,
		marginLeft: 20,
		marginRight: 20,
	},
	gradient: {
		width: "100%",
		borderRadius: 100,
		padding: 2,
	},
	exploreSearch: {
		fontSize: 16,
	},
	transparentContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#2c2838",
		borderRadius: 100,
		height: 50,
		paddingLeft: 20,
		paddingRight: 20,
	},
});

export default function GradientSearch() {
	return (
		<View style={styles.container}>
			<LinearGradient colors={["#c937bf", "#dc3e78", "#f98f8f"]} start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }} style={styles.gradient}>
				<View style={styles.transparentContainer}>
					<TextInput style={styles.exploreSearch} placeholder="Search All Podcasts"></TextInput>
					<Ionicons name="md-search" size={22} color="white" />
				</View>
			</LinearGradient>
		</View>
	);
}
