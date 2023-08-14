import axios from "axios";
import { api } from ".";
import { createAction } from "@reduxjs/toolkit";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const lastestAllHostApi = api.injectEndpoints({
	endpoints: (build) => ({
		getLatestAllHostData: build.query<any, void>({
			query: () => ({
				url: "",
				method: "GET",
                body: {
                    jsonrpc: "2.0",
                    method: "item.get",
                    params: {
                        output: ["itemid", "name","lastclock","lastvalue"],
                        sortfield: "name"
                    },
                    id: 1
                }
			}),
		}),
	}),
});

const lastestPerHostApi = api.injectEndpoints({
	endpoints: (build) => ({
		getLatestPerHostData: build.query<any, void>({
			query: () => ({
				url: "",
				method: "GET",
                body: {
                    jsonrpc: "2.0",
                    method: "item.get",
                    params: {
                      output: ["itemid", "name","lastclock","lastvalue"],
                      hostids:10084,
                      sortfield: "name"
                    },
                    id: 1
                }
			}),
		}),
	}),
});

export const { useGetLatestAllHostDataQuery } = lastestAllHostApi;
export const { useGetLatestPerHostDataQuery } = lastestPerHostApi;