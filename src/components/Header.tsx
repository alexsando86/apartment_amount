import { Button, Flex, HStack } from '@chakra-ui/react'
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import React from 'react'

const Header = () => {
	return (
		<Flex justifyContent="space-between">
			<HStack justifyContent="space-evenly" w="100%">
				<Button colorScheme="blue" size="sm" variant="ghost">1월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">2월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">3월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">4월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">5월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">6월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">7월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">8월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">9월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">10월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">11월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost">12월</Button>
			</HStack>
			<ColorModeSwitcher justifySelf="flex-end" h="50px"/>
		</Flex>
	)
}

export default Header
