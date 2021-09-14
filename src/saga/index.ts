import { takeEvery, put, call } from "redux-saga/effects";
import { loadAptSuccess, loadAptFail } from "../actions/actions";
import fetchApiData from "../fetchData";

export function* workerSaga(): any {
	console.log("Hello, worker!");
	try {
		const item = yield call(fetchApiData);
		yield put(loadAptSuccess(item));
	} catch (err) {
		yield put(loadAptFail(err));
	}
}

function* rootSaga() {
	yield takeEvery("LOAD_APT_AMOUNT", workerSaga);
}

export default rootSaga;
