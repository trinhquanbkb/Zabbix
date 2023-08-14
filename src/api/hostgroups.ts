import axios from "axios";
import { api } from ".";
import { createAction } from "@reduxjs/toolkit";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const getAllHostGroupApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAllHostGroupData: build.query<any, void>({
			query: () => ({
				url: "",
				method: "GET",
                body: {
                        jsonrpc: "2.0",
                        method: "hostgroup.get",
                        params: {
                            output: "extend",
                            selectHosts: "count"
                        },
                        id: 1
                    }
			}),
		}),
	}),
});

export const { useGetAllHostGroupDataQuery } = getAllHostGroupApi;