import React, { useState } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import GradientSearch from "./GradientSearch";
import PodcastCard from "./PodcastCard";

const styles = StyleSheet.create({
	container: {
		paddingBottom: 20,
	},
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
	exploreSubtitle: {
		fontFamily: "opensans-light",
		fontSize: 42 / PixelRatio.get(),
		color: "#dadada7d",
		fontWeight: "100",
		marginTop: 10,
	},
	exploreSubtitle2: {
		fontSize: 42 / PixelRatio.get(),
		color: "#dadada7d",
		fontWeight: "100",
	},
	podcastContainer: {
		flexWrap: "wrap",
		alignItems: "flex-start",
		flexDirection: "row",
	},
	exploreSearch: {
		marginLeft: 20,
		marginRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		marginBottom: 28,
		borderWidth: 2,
		borderColor: "pink",
		borderRadius: 18,
	},
});

export default function ExplorContainer() {
	const [categories, setCategories] = useState([
		{
			name: "Art & Design",
			subtitle: "208",
			img: require("../assets/category/1.jpg"),
		},
		{
			name: "Music",
			subtitle: "4.2k",
			img: require("../assets/category/2.jpg"),
		},
		{
			name: "Education",
			subtitle: "12k",
			img: require("../assets/category/3.jpg"),
		},
		{
			name: "Fitness",
			subtitle: "9.1k",
			img: require("../assets/category/4.jpg"),
		},
		{
			name: "Food",
			subtitle: "3.8k",
			img: require("../assets/category/5.jpg"),
		},
		{
			name: "Fashion",
			subtitle: "5,7k",
			img: require("../assets/category/6.jpg"),
		},
	]);

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.exploreTitle}>EXPLORE</Text>
				<Text style={styles.exploreSubtitle}>all your favorite</Text>
				<Text style={styles.exploreSubtitle2}>podcasts under one roof!</Text>
			</View>
			<GradientSearch />
			<View style={styles.podcastContainer}>
				{categories.map((category) => (
					<PodcastCard {...category} key={category.name} />
				))}
			</View>
		</View>
	);
}
