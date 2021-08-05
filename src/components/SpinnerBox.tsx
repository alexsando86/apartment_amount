import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const SpinnerBox = () => {
	return (
		<Flex justifyContent="center" alignItems="center" style={{position:"fixed", left:0,top:0,bottom:0,right:0,background:"rgba(0,0,0,.3)"}}>
			<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" color="red.500" zIndex="10" />
		</Flex>
	)
}

export default SpinnerBox
