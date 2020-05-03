import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
	container: {},
	bgImage: {},
	profileName: {
		textTransform: "uppercase",
		fontWeight: "bold",
	},
	profileOcc: {
		fontWeight: "100",
	},
});

export default function ProfilePage() {
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.bgImage} source={require("../assets/profile.jpg")}></ImageBackground>
			<LinearGradient></LinearGradient>
			<Text style={styles.profileName}>John Doe</Text>
			<Text style={styles.profileOcc}>Musician</Text>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem fuga alias optio voluptatum voluptas deleniti, voluptate eos
				perspiciatis eveniet unde tempore porro assumenda officiis sunt consequatur nesciunt earum cum.
			</Text>
			<View>
				<Text>25 Playlists</Text>
				<Text>2.5k Downloads</Text>
			</View>
		</View>
	);
}
