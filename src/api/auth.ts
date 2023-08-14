import axios from "axios";
import { getAccessToken } from "../utils/getAccessToken";

export const LoginRequest = async (username: string, password: string) => {
	let data = {
		jsonrpc: "2.0",
		method: "user.login",
		params: {
			username: "Admin",
			password: "zabbix",
		},
		id: 1,
	};

	let config: any = {
		method: "POST",
		url: "http://192.168.1.5/zabbix/api_jsonrpc.php",
		headers: {
			"Content-Type": "application/json",
		},
		data: JSON.stringify(data),
	};
	const response = await axios(config);
	return response;
};

export const LogoutUser = async () => {
	const response = await axios({
		url: "/auth/logout",
		method: "POST",
		headers: { Authorization: `Bearer ${getAccessToken()}` },
	});
	return response;
};

export const POST_VerifyUser = async (activeToken: string) => {
	const response = await axios({
		url: "/user/verify",
		method: "GET",
		data: { active_token: activeToken },
	});
	return response;
};
