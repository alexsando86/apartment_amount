import { Button, Flex, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import React, { useEffect } from "react";

const Header = (): any => {
	return (
		<Flex justifyContent="space-between">
			<HStack justifyContent="space-evenly" w="100%">
				{["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map((item) => (
					<Button key={item} colorScheme="blue" size="sm" variant="ghost" data-month={item}>
						{item}월
					</Button>
				))}
			</HStack>
			<ColorModeSwitcher justifySelf="flex-end" h="50px" />
		</Flex>
	);
};

export default Header;
