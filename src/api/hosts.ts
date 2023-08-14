import axios from "axios";
import { api } from ".";
import { createAction } from "@reduxjs/toolkit";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const getInforAllHostApi = api.injectEndpoints({
	endpoints: (build) => ({
		getInforAllHostData: build.query<any, void>({
			query: () => ({
				url: "",
				method: "GET",
                body: {
                jsonrpc: "2.0",
                    method: "host.get",
                    params: {
                      output: ["hostid", "name", "status", "tls_connect", "tls_accept","active_available"],
                      selectHosts:"count",
                      selectItems: "count",
                      selectTriggers: "count",
                      selectDiscoveries: "count",
                      selectGraphs: "count",
                      selectHttpTests: "count",
                      selectInterfaces:["ip","port"],
                      selectParentTemplates: ["name"]
                      },
                    auth: null,
                    id: 1
                }
                  
			}),
		}),
	}),
});

export const { useGetInforAllHostDataQuery } = getInforAllHostApi;