import Constants from "expo-constants";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DownloadsContainer from "../component/DownloadsContainer";
import Header from "../component/Header";

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		backgroundColor: "#2c2838",
		paddingTop: Constants.statusBarHeight,
	},
	container: {
		flex: 1,
	},
});

export default function DownloadsPage() {
	return (
		<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<Header />
				<DownloadsContainer />
			</View>
		</ScrollView>
	);
}
