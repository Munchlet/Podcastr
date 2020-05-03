import React, { useState } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import DownloadCard from "./DownloadCard";

const styles = StyleSheet.create({
	container: {
		paddingBottom: 20,
	},
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
});

export default function PodcastsContainer() {
	const [podcasts, setPodcasts] = useState([
		{
			ep: 148,
			title: "How boredom can lead to your most brilliant ideas",
			time: "00:16:00",
		},
		{
			ep: 149,
			title: "Who are you, really? The puzzle of personality",
			time: "00:15:00",
		},
		{
			ep: 150,
			title: "How to overcome apathy and find your power",
			time: "01:13:00",
		},
		{
			ep: 210,
			title: `How "policing for profit" undermines your rights`,
			time: "01:12:00",
		},
		{
			ep: 210,
			title: "Crisis support for the world, one text away",
			time: "00:11:00",
		},
	]);

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.exploreTitle}>DOWNLOADS</Text>
				<Text style={styles.exploreSubtitle}>Listen to all your playlists</Text>
				<Text style={styles.exploreSubtitle2}>offline right here.</Text>
			</View>
			<View>
				{podcasts.map((podcast) => (
					<DownloadCard {...podcast} key={podcast.title} />
				))}
			</View>
		</View>
	);
}
