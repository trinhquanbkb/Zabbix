import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { setSession } from "./redux/auth/saga";
import { store } from "./redux/store";
import { getLoggedInUser } from "./utils/authUtils";
import { getAccessToken } from "./utils/getAccessToken";
import { getRefreshToken } from "./utils/getRefreshToken";
import jwtDecode from "jwt-decode";

let isRefreshing = false;

// Cai dat baseURL mac dinh cho cac request su dung axios
axios.defaults.baseURL = "https://api.dev.dp-cargo.com";
// axios.defaults.headers = { Authorization: `Bearer ${getAccessToken()}` };

// xu ly response tra ve, neu response code = 401, trang thai chua dang nhap, thi thuc hien refresh token

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(err) => {
		return new Promise((resolve, reject) => {
			const originalReq = err.config;
			if (
				err.response.status === 401 &&
				err.config &&
				!err.config.__isRetryRequest
			) {
				originalReq._retry = true;
				const { exp } = getLoggedInUser();
				if (exp < Date.now() / 1000 && !isRefreshing) {
					isRefreshing = true;
					let res = fetch(axios.defaults.baseURL + "/auth/refresh", {
						method: "POST",
						mode: "cors",
						cache: "no-cache",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							access_token: getAccessToken(),
							refresh_token: getRefreshToken(),
						}),
						redirect: "follow",
						referrer: "no-referrer",
					})
						.then((res) => res.json())
						.then((res) => {
							setSession("access_token", res.accessToken);
							setSession("refresh_token", res.refreshToken);
							setSession("user", jwtDecode(res.accessToken));
							originalReq.headers[
								"Authorization"
							] = `Bearer ${res.accessToken}`;
							return axios(originalReq);
						})
						.catch((error) => console.log(error));
					resolve(res);
				}
			}
			reject(err);
		});
	}
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
