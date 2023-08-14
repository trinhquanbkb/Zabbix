import axios from "axios";
import { getAccessToken } from "../utils/getAccessToken";

export const getInforAllHostApi = async () => {
	let data = {
		jsonrpc: "2.0",
		method: "host.get",
		params: {
			output: "extend",
			selectInterfaces: "extend",
		},
		id: 1,
	};

	let config: any = {
		method: "GET",
		url: "http://192.168.1.5/zabbix/api_jsonrpc.php",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer 9cb11402eb7b85eff6de0f5eea53c451",
		},
		data: JSON.stringify(data),
	};
	const response = await axios.request(config);
	console.log(response);
	return response;
};
