import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import HomeContainer from "./screen/HomeContainer";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

const Stack = createStackNavigator();

export default function App() {
	const [isLoaded, setLoaded] = useState(false);

	useEffect(() => {
		async function loadFonts() {
			await Font.loadAsync({
				opensans: require("./assets/fonts/OpenSans-Regular.ttf"),
				"opensans-light": require("./assets/fonts/OpenSans-Regular.ttf"),
				"opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
			});

			setLoaded(true);
		}

		loadFonts();
	}, []);

	if (!isLoaded) return <Text>Loading</Text>;
	return (
		<NavigationContainer>
			<StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
			<Stack.Navigator initialRouteName="HomeContainer" headerMode="none" options={{ headerShown: false }}>
				<Stack.Screen name="HomeContainer" component={HomeContainer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
