export const loadApt = () => {
	return {
		type: "LOAD_APT"
	};
}

export const loadAptSuccess = (data: any) => {
	return {
		type: "LOAD_APT_SUCCESS",
		payload:data,
	};
};

export const loadAptFail = (error: any) => {
	return {
		type: "LOAD_APT_FAIL",
		error
	}
}