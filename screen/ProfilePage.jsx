import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2c2838",
	},
	bgImage: {
		flex: 2,
		justifyContent: "flex-end",
	},
	profileName: {
		color: "white",
		textTransform: "uppercase",
		fontFamily: "opensans-bold",
		fontSize: 62 / PixelRatio.get(),
	},
	profileOcc: {
		fontFamily: "opensans-light",
		color: "white",
		fontSize: 44 / PixelRatio.get(),
	},
	description: {
		fontFamily: "opensans-light",
		color: "white",
		marginTop: 20,
		fontSize: 38 / PixelRatio.get(),
	},
	profileContainer: {
		flex: 1,
		padding: 20,
	},
	stats: {
		marginTop: 14,
		flexDirection: "row",
	},
	statsCenter: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	statsWhite: {
		color: "white",
		paddingLeft: 20,
	},
});

export default function ProfilePage() {
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.bgImage} resizeMode="cover" source={require("../assets/profile.jpg")}>
				<LinearGradient
					colors={["transparent", "#2c2838"]}
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						height: 200,
					}}></LinearGradient>
			</ImageBackground>
			<View style={styles.profileContainer}>
				<Text style={styles.profileName}>Mary Doe</Text>
				<Text style={styles.profileOcc}>Musician</Text>
				<Text style={styles.description}>
					Life is what happens when you’re making other plans. Being good to people is a wonderful legacy to leave behind. You see, we are here, as
					far as I can tell, to help each other; our brothers, our sisters, our friends, our enemies. That is to help each other and not hurt each
					other.
				</Text>
				<View style={styles.stats}>
					<View style={styles.statsCenter}>
						<MaterialCommunityIcons name="playlist-check" size={22} color="white" />
						<Text style={styles.statsWhite}>17 Playlists</Text>
					</View>
					<View style={styles.statsCenter}>
						<MaterialCommunityIcons name="download" size={22} color="white" />
						<Text style={styles.statsWhite}>2.5k Downloads</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
