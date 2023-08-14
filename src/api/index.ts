import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getAccessToken } from "../utils/getAccessToken";

export interface List<D> {
	data: {
		data: D[];
		paginationInfo: {
			total: number;
			page: number;
			limit: number;
		};
	};
	status_code: number;
	error_message: string;
}

export const axiosBaseQuery =
	(
		{ baseUrl }: { baseUrl: string } = { baseUrl: "" }
	): BaseQueryFn<AxiosRequestConfig, any, { data: any; status?: number }> =>
	async (configs) => {
		try {
			const newConfig = {
				...configs,
				headers: {
					Authorization: `Bearer ${getAccessToken()}`,
				},
			};
			const result = await axios(newConfig);
			return { data: result.data };
		} catch (axiosError) {
			const err = axiosError as AxiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data,
				},
			};
		}
	};

const baseQuery = axiosBaseQuery({
	baseUrl: "http://192.168.1.5/zabbix",
});

// const baseQueryWithReauth: BaseQueryFn<AxiosRequestConfig, unknown, unknown> = async (configs, api, extraOptions) => {
//     let result = await baseQuery(configs, api, extraOptions)
//     if (result.error && result.error.status === 401) {
//         // try to get a new token
//         if (getLoggedInUser()?.exp < Date.now() * 1000) {
//             const refreshResult = await baseQuery({
//                 url: '/auth/refresh',
//                 method: "POST",
//                 data: {
//                     accessToken: getAccessToken(),
//                     refreshToken: getRefreshToken()
//                 }
//             }, api, extraOptions)
//             if (refreshResult.data) {
//                 // store the new token
//                 // retry the initial query
//                 setSession("accessToken", refreshResult.data.accessToken);
//                 setSession("refreshToken", refreshResult.data.refreshToken);
//                 setSession("user", jwtDecode(refreshResult.data.accessToken));
//                 configs.headers["Authorization"] = `Bearer ${refreshResult.data.accessToken}`
//                 result = await baseQuery(configs, api, extraOptions)
//             } else { }
//         }
//     }
//     return result
// }

export const api = createApi({
	baseQuery: baseQuery,
	reducerPath: "api",
	tagTypes: [
		"Users",
		"Employee",
		"Store",
		"Config",
		"Criteria",
		"DefaultCriteria",
		"Feedback",
		"Report",
		"Logs",
	],
	endpoints: () => ({}),
});
