import { Box, Flex, Heading, Spinner, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SpinnerBox from './SpinnerBox';

type apartmentTypes = {
	아파트:string;
	전용면적:number;
	건축년도:number;
	도로명:string;
	법정동:string;
	년:number;
	월:number;
	일:number;
	층:number;
	거래금액:number;
}

const ApartmentAmount = () => {
	const [isLoading, setIsLoading] = useState(true);
	const aptReducer =  useSelector((state: any) => state.aptReducer)

	const day = new Date();
	const year = day.getFullYear();
	const month = day.getMonth() + 1;

	useEffect(() => {
		aptReducer.length > 0 && setIsLoading(false);
	}, [aptReducer.length])

	return (
		<Box m={4}>
			<Heading fontSize="lg" m={4}>{`${year}년${month}월`} 김포 아파트 실거래가</Heading>
			{isLoading && (
				<SpinnerBox />
				
			)}
			{!isLoading &&(
				<Table variant="striped" size="lg">
					<TableCaption>Imperial to metric conversion factors</TableCaption>
					<Thead>
						<Tr>
							<Th>아파트</Th>
							<Th>전용면적</Th>
							<Th>건축년도</Th>
							<Th>도로명</Th>
							<Th>법정동</Th>
							<Th>거래날짜</Th>
							<Th>층</Th>
							<Th>거래금액(만원)</Th>
						</Tr>
					</Thead>
					<Tbody>
						{aptReducer.map(((item: apartmentTypes, index: number) => {
							const {아파트,전용면적,건축년도,도로명,법정동,년,월,일,층,거래금액} = item;
							return (
								<Tr key={index}>
									<Td>{아파트}</Td>
									<Td>{전용면적}</Td>
									<Td>{건축년도}</Td>
									<Td>{도로명}</Td>
									<Td>{법정동}</Td>
									<Td>{년}-{월}-{일}</Td>
									<Td>{층}</Td>
									<Td>{거래금액}</Td>
								</Tr>
							)
						}))}
					</Tbody>
				</Table>
			)}
			
		</Box>
	)
}

export default ApartmentAmount
