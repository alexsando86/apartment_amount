import axios from "axios";

const today: Date = new Date();
const year = today.getFullYear(); // 년도
const month = ("0" + (today.getMonth() + 1)).slice(-2); // 월
const month2 = ("0" + today.getMonth()).slice(-2); // 전월
const date = ("0" + today.getDate()).slice(-2);
const yesterday = ("0" + (today.getDate() - 1)).slice(-2);

export const getToday: string = `${year}${month}${date}`;
export const getYesterday: string = `${year}${month}${yesterday}`;
export const lastMonth: string = `${year}${month2}${date}`;
export const thatMonth: string = `${year}${month}`;

export const getUrl = (customMonth = thatMonth) => {
	const url = "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev"; /*URL*/
	let queryParams = "?" + encodeURIComponent("ServiceKey") + "=" + "HoRvXlHzt4YAth4rfQmkQUXibIMl%2BmmW24iZZ8mYKPg0B9ZAAtYr6kVBtCf2Yf4n2XQWjRnDXZzDvE2XoLwVkg%3D%3D"; /*Service Key*/
	queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("100000"); /* 한페이지 결과 수 */
	queryParams += "&" + encodeURIComponent("LAWD_CD") + "=" + encodeURIComponent("41570"); /* 김포코드 41570 */
	queryParams += "&" + encodeURIComponent("DEAL_YMD") + "=" + encodeURIComponent(customMonth); /**/

	return {
		url,
		queryParams,
	};
};

const fetchApiData = (gMonth?: string) => {
	const { url, queryParams } = getUrl(gMonth);

	return axios({
		method: "GET",
		url: `https://cors.bridged.cc/${url}${queryParams}`,
	}).then((response) => {
		const {
			data: {
				response: {
					body: {
						items: { item },
					},
				},
			},
		} = response;
		console.log(item);
		return item;
	});
};
export default fetchApiData;
