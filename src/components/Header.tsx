import { Button, Flex, HStack } from '@chakra-ui/react'
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import React from 'react'

const Header = () => {
	return (
		<Flex justifyContent="space-between">
			<HStack justifyContent="space-evenly" w="100%">
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="01">1월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="02">2월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="03">3월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="04">4월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="05">5월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="06">6월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="07">7월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="08">8월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="09">9월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="10">10월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="11">11월</Button>
				<Button colorScheme="blue" size="sm" variant="ghost" data-month="12">12월</Button>
			</HStack>
			<ColorModeSwitcher justifySelf="flex-end" h="50px"/>
		</Flex>
	)
}

export default Header
