import React, { useState } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import CategoryChip from "./CategoryChip";
import PodcastAlbum from "./PodcastAlbum";

const styles = StyleSheet.create({
	headerContainer: {
		marginBottom: 4,
		paddingLeft: 20,
		marginTop: 62,
		paddingBottom: 20,
	},
	exploreTitle: {
		fontSize: 68 / PixelRatio.get(),
		color: "#d0d0d0",
		fontFamily: "opensans-bold",
		marginBottom: 8,
	},
	categoryChips: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	albumContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 20,
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

	const [albums, setAlbums] = useState([
		{
			name: "Comedy-Kontoret",
			eps: 47,
			img: require("../assets/album/1.jpg"),
			done: true,
		},
		{
			name: "Stand Up Comedy",
			eps: 137,
			img: require("../assets/album/2.jpg"),
			done: true,
		},
		{
			name: "Comedy of the Week",
			eps: 278,
			img: require("../assets/album/3.jpg"),
			done: true,
		},
		{
			name: "Brooklyn Nine Nine",
			eps: 22,
			img: require("../assets/album/4.jpg"),
			done: false,
		},
	]);

	return (
		<View style={styles.headerContainer}>
			<Text style={styles.exploreTitle}>PODCASTS</Text>
			<View style={styles.categoryChips}>
				{categories.map((category) => (
					<CategoryChip {...category} key={category.name} />
				))}
			</View>
			<View style={styles.albumContainer}>
				{albums.map((album) => (
					<PodcastAlbum {...album} key={album.name} />
				))}
			</View>
		</View>
	);
}
