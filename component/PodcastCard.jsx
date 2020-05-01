import React from "react";
import { Image, PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	cardContainer: {
		width: "25%",
		marginBottom: 60 / PixelRatio.get(),
		marginLeft: 70 / PixelRatio.get(),
	},
	image: {
		width: "100%",
		height: 400 / PixelRatio.get(),
		borderRadius: 12,
		resizeMode: "cover",
	},
	title: {
		fontFamily: "opensans-bold",
		marginLeft: 3,
		color: "#d0d0d0",
		fontSize: 38 / PixelRatio.get(),
		textTransform: "uppercase",
		marginTop: 8,
	},
	subtitle: {
		marginLeft: 3,
		fontSize: 42 / PixelRatio.get(),
		color: "#d0d0d0",
		fontFamily: "opensans-light",
	},
});

export default function PodcastCard({ name, subtitle, img }) {
	return (
		<View style={styles.cardContainer}>
			<Image style={styles.image} source={img}></Image>
			<Text style={styles.title}>{name}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
		</View>
	);
}
