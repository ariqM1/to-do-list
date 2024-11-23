import React from "react";
import { Text, View } from "react-native";
import { SignInPage } from "../components/SignInPage";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Edit app/index.tsx to edit this screen.</Text>
			<SignInPage />
		</View>
	);
}
