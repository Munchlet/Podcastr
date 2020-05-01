import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DownloadsPage from "./DownloadsPage";
import ExplorePage from "./ExplorePage";
import PodcastsScreen from "./PodcastsScreen";
import ProfilePage from "./ProfilePage";

const Tab = createBottomTabNavigator();

export default function HomeContainer() {
	return (
		<Tab.Navigator
			initialRouteName="ExplorePage"
			tabBarOptions={{
				activeTintColor: "#e91e63",
				showLabel: false,
				style: {
					backgroundColor: "#2c2838",
					borderTopColor: "transparent",
				},
			}}
			options={{ tabBarVisible: false }}>
			<Tab.Screen
				name="ExplorePage"
				component={ExplorePage}
				options={{
					tabBarIcon: ({ color, size }) => <SimpleLineIcons name="grid" color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="PodcastsScreen"
				component={PodcastsScreen}
				options={{
					tabBarIcon: ({ color, size }) => <SimpleLineIcons name="earphones" color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="DownloadsPage"
				component={DownloadsPage}
				options={{
					tabBarIcon: ({ color, size }) => <SimpleLineIcons name="cloud-download" color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="ProfilePage"
				component={ProfilePage}
				options={{
					tabBarIcon: ({ color, size }) => <SimpleLineIcons name="user" color={color} size={size} />,
				}}
			/>
		</Tab.Navigator>
	);
}
