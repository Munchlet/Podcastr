import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		height: 100,
	},
	textContainer: {
		flex: 4,
		margin: 10,
	},
	playIcon: {
		margin: 16,
		flex: 1,
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#efefef",
		borderRadius: 100,
		height: 61,
		borderColor: "#949494de",
	},
	textEp: {
		fontWeight: "700",
		textTransform: "uppercase",
		color: "white",
	},
	textTitle: {
		color: "#bdbdbd",
	},
	textTime: {
		fontWeight: "100",
		color: "#bdbdbdd6",
		fontSize: 32 / PixelRatio.get(),
	},
	optionIcon: {
		flex: 1,
	},
});

export default function DownloadCard({ ep, title, time }) {
	return (
		<View style={styles.container}>
			<View style={styles.playIcon}>
				<Ionicons name="md-play" size={20} color="#53f5cf" />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.textEp} numberOfLines={1}>
					Episode {ep}
				</Text>
				<Text style={styles.textTitle}>{title}</Text>
				<Text style={styles.textTime}>{time}</Text>
			</View>
			<View style={styles.optionIcon}>
				<MaterialCommunityIcons name="dots-horizontal" size={22} color="white" />
			</View>
		</View>
	);
}
