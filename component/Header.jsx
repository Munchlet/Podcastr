import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	header: {
		marginTop: 24,
		height: 60,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 20,
	},
	headerImg: {
		height: 38,
		width: 38,
	},
	leftView: {
		flexDirection: "row",
		alignItems: "center",
	},
	leftText: {
		marginLeft: 12,
	},
	headerText: {
		fontFamily: "opensans-bold",
		color: "#d0d0d0",
		fontSize: 72 / PixelRatio.get(),
	},
	headerTextSmall: {
		fontFamily: "opensans-bold",
		color: "#d0d0d0",
		fontWeight: "bold",
		fontSize: 44 / PixelRatio.get(),
	},
	rightView: {
		marginRight: 20,
		marginTop: 8 / PixelRatio.get(),
		justifyContent: "center",
		alignItems: "center",
	},
	searchIcon: {
		backgroundColor: "#2c2838",
		height: 44,
		width: 44,
		marginLeft: 0,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
	},
});

export default function Header() {
	return (
		<View style={styles.header}>
			<View style={styles.leftView}>
				<Image style={styles.headerImg} source={require("../assets/disc.png")}></Image>
				<View style={styles.leftText}>
					<Text style={styles.headerText}>POD</Text>
					<Text style={styles.headerTextSmall}>CASTR</Text>
				</View>
			</View>
			<View style={styles.rightView}>
				<LinearGradient
					colors={["#c937bf", "#dc3e78", "#f98f8f"]}
					start={{ x: 0.0, y: 0.0 }}
					end={{ x: 1.0, y: 1.0 }}
					style={{ height: 47, width: 47, alignItems: "center", justifyContent: "center", borderRadius: 100 }}>
					<View style={styles.searchIcon}>
						<Ionicons name="md-search" size={22} color="white" />
					</View>
				</LinearGradient>
			</View>
		</View>
	);
}
