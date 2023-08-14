import { AxiosResponse } from "axios";
import { History } from "history";
import { Cookies } from "react-cookie";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LoginRequest } from "../../api/auth";
import errorHandler from "../../utils/errorHandler";
import { setCredentials } from "../../utils/setCredentials";
import {
	initLoginUser,
	loginUserFailed,
	loginUserSuccess,
	logoutUser,
} from "./reducers";
/**
 * Sets the session
 * @param {*} user
 */

export const setSession = (key?: string, value?: any, httpOnly?: boolean) => {
	let cookies = new Cookies();
	if (key && value)
		cookies.set(key, value, {
			path: "/",
			sameSite: "lax",
			secure: false,
			httpOnly: httpOnly,
		});
	else {
		cookies.remove("refresh_token", { path: "/" });
		cookies.remove("access_token", { path: "/" });
		cookies.remove("user", { path: "/" });
	}
};

/**
 * Login the user
 * @param {*} payload - username and password
 */

function* login(action: { payload: { username: string; password: string } }) {
	try {
		const authResponse: AxiosResponse = yield call(
			LoginRequest,
			action.payload.username,
			action.payload.password
		);
		const token = authResponse.data.result;
		console.log(token);
		setCredentials({
			access_token: token,
		});
		yield put(loginUserSuccess(token));
	} catch (err) {
		const message = errorHandler(err);
		yield put(loginUserFailed(message));
		setSession();
	}
}

/**
 * Logout the user
 * @param {*} param0
 */
function* logout({ payload: { history } }: { payload: { history: History } }) {
	try {
		setSession();
		yield call(() => {
			history.push("/auth/login");
		});
	} catch (error) {}
}

export function* watchLoginUser() {
	yield takeEvery(initLoginUser, login);
}

export function* watchLogoutUser() {
	yield takeEvery(logoutUser, logout);
}

function* authSaga() {
	yield all([fork(watchLoginUser), fork(watchLogoutUser)]);
}

export default authSaga;
