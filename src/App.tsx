import * as React from "react";
import { ChakraProvider, Grid, theme } from "@chakra-ui/react";
import ApartmentAmount from "./components/ApartmentAmount";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";

export const App = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		isLoading && dispatch({ type: "LOAD_APT_AMOUNT" });
	}, [dispatch]);

	useEffect(() => {
		// console.log(gMonth);
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Grid minH="100vh" p={3} gridTemplateRows="min-content">
				<ApartmentAmount />
			</Grid>
		</ChakraProvider>
	);
};
