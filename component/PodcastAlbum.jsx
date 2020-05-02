import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: 450 / PixelRatio.get(),
		marginRight: 20,
		marginVertical: 10,
	},
	albumImgContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
	},
	albumImg: {
		width: 300 / PixelRatio.get(),
		height: 420 / PixelRatio.get(),
		borderRadius: 10,
	},
	albumImgBack: {
		position: "absolute",
		right: 0,
		height: 300 / PixelRatio.get(),
		width: 300 / PixelRatio.get(),
	},
	albumTextContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 20 / PixelRatio.get(),
	},
	albumText: {
		color: "#e2e2e2",
		fontSize: 44 / PixelRatio.get(),
		fontWeight: "bold",
	},
	albumEps: {
		color: "#53f1cd",
		fontWeight: "bold",
	},
	albumEpsText: {
		color: "white",
		fontWeight: "bold",
		textTransform: "uppercase",
	},
});

export default function PodcastAlbum({ name, eps, img, done }) {
	return (
		<View style={styles.container}>
			<View style={styles.albumImgContainer}>
				<Image resizeMode="cover" source={require("../assets/disc.png")} style={styles.albumImgBack} />
				<Image source={img} style={styles.albumImg} resizeMode="cover" />
				<View>
					<Text style={styles.albumEps}>{eps}</Text>
					<Text style={styles.albumEpsText}>ep</Text>
				</View>
			</View>
			<View style={styles.albumTextContainer}>
				<Text style={styles.albumText}>{name}</Text>
				{done ? (
					<Ionicons name="md-checkmark-circle-outline" size={18} color="#53f1cd" />
				) : (
					<Ionicons name="md-add-circle-outline" size={18} color="white" />
				)}
			</View>
		</View>
	);
}
