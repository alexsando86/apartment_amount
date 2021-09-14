import React, { useEffect, useState } from "react";
import moment from "moment";
import { Box, Flex, Heading, Spinner, Text, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerBox from "./SpinnerBox";

type apartmentTypes = {
	아파트: string;
	전용면적: number;
	건축년도: number;
	도로명: string;
	법정동: string;
	년: number;
	월: number;
	일: number;
	층: number;
	거래금액: number;
};

const ApartmentAmount = () => {
	const [active, setActive] = useState(true);
	const [sortState, setSortState] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const aptReducer = useSelector((state: any) => state.aptReducer);

	const aptSorting = aptReducer
		.map((item: apartmentTypes) => item)
		.sort((a: apartmentTypes, b: apartmentTypes) => {
			if (!active) {
				return a.전용면적 < b.전용면적 ? -1 : a.전용면적 === b.전용면적 ? 0 : 1;
			} else {
				return a.전용면적 > b.전용면적 ? -1 : a.전용면적 === b.전용면적 ? 0 : 1;
			}
		});

	const handleApt = () => {
		const aptSorting = aptReducer
			.map((item: apartmentTypes) => item)
			.sort((a: apartmentTypes, b: apartmentTypes) => {
				if (active) {
					return a.아파트 < b.아파트 ? -1 : a.아파트 === b.아파트 ? 0 : 1;
				} else {
					return a.아파트 > b.아파트 ? -1 : a.아파트 === b.아파트 ? 0 : 1;
				}
			});
		setSortState(aptSorting);
		setActive((prev) => !prev);
	};

	const handleYear = () => {
		const aptSorting = aptReducer
			.map((item: apartmentTypes) => item)
			.sort((a: apartmentTypes, b: apartmentTypes) => {
				if (active) {
					return a.건축년도 < b.건축년도 ? -1 : a.건축년도 === b.건축년도 ? 0 : 1;
				} else {
					return a.건축년도 > b.건축년도 ? -1 : a.건축년도 === b.건축년도 ? 0 : 1;
				}
			});
		setSortState(aptSorting);
		setActive((prev) => !prev);
	};

	const handleDate = () => {
		const aptSorting = aptReducer
			.map((item: apartmentTypes) => item)
			.sort((a: apartmentTypes, b: apartmentTypes) => {
				if (active) {
					return a.일 < b.일 ? -1 : a.일 === b.일 ? 0 : 1;
				} else {
					return a.일 > b.일 ? -1 : a.일 === b.일 ? 0 : 1;
				}
			});
		setSortState(aptSorting);
		setActive((prev) => !prev);
	};

	const handlePayment = () => {
		const aptSorting = aptReducer
			.map((item: apartmentTypes) => item)
			.sort((a: apartmentTypes, b: apartmentTypes) => {
				if (active) {
					return a.거래금액 < b.거래금액 ? -1 : a.거래금액 === b.거래금액 ? 0 : 1;
				} else {
					return a.거래금액 > b.거래금액 ? -1 : a.거래금액 === b.거래금액 ? 0 : 1;
				}
			});
		setSortState(aptSorting);
		setActive((prev) => !prev);
	};

	const day = new Date();
	const year = day.getFullYear();
	const month = day.getMonth() + 1;

	useEffect(() => {
		aptReducer.length > 0 && setIsLoading(false);
		setSortState(aptSorting);
	}, [aptReducer.length]);

	return (
		<Box m={4}>
			<Heading fontSize="lg" m={4}>
				{`${year}년${month}월`} 김포 아파트 실거래가
				<Text as="span" fontSize="sm" m={4}>
					총 거래건수: {aptReducer.length}건
				</Text>
			</Heading>
			{isLoading && <SpinnerBox />}
			{!isLoading && (
				<Table variant="striped" size="md">
					<TableCaption>
						{year}년 {month}월 거래내역
					</TableCaption>
					<Thead>
						<Tr>
							<Th onClick={() => handleApt()} cursor="pointer">
								아파트{" "}
								<Box as="span" fontSize="lg">
									🔄
								</Box>
							</Th>
							<Th>전용면적</Th>
							<Th onClick={() => handleYear()} cursor="pointer">
								건축년도{" "}
								<Box as="span" fontSize="lg">
									🔄
								</Box>
							</Th>
							<Th>도로명</Th>
							<Th>법정동</Th>
							<Th onClick={() => handleDate()} cursor="pointer">
								거래날짜{" "}
								<Box as="span" fontSize="lg">
									🔄
								</Box>
							</Th>
							<Th>층</Th>
							<Th onClick={() => handlePayment()} cursor="pointer">
								거래금액(만원){" "}
								<Box as="span" fontSize="lg">
									🔄
								</Box>
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{sortState?.map((item: apartmentTypes, index: number) => {
							const { 아파트, 전용면적, 건축년도, 도로명, 법정동, 년, 월, 일, 층, 거래금액 } = item;
							return (
								<Tr key={index}>
									<Td>{아파트}</Td>
									<Td>{전용면적}</Td>
									<Td>{건축년도}</Td>
									<Td>{도로명}</Td>
									<Td>{법정동}</Td>
									<Td>
										{년}-{월}-{일}
									</Td>
									<Td>{층}</Td>
									<Td>{거래금액}</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			)}
		</Box>
	);
};

export default ApartmentAmount;
