import React, { useState } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	headerContainer: {
		marginBottom: 4,
		paddingLeft: 20,
		marginTop: 62,
	},
	exploreTitle: {
		fontSize: 68 / PixelRatio.get(),
		color: "#d0d0d0",
		fontFamily: "opensans-bold",
	},
});

export default function PodcastsContainer() {
	const [categories, setCategories] = useState([
		{
			name: "Comedy",
			chosen: true,
		},
		{
			name: "Local",
		},
		{
			name: "Politics",
		},
		{
			name: "Music",
		},
		{
			name: "More",
			isMore: true,
		},
	]);

	return (
		<View>
			<View style={styles.headerContainer}>
				<Text style={styles.exploreTitle}>PODCASTS</Text>
			</View>
		</View>
	);
}
