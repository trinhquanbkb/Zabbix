import axios from "axios";
import { api } from ".";
import { createAction } from "@reduxjs/toolkit";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const getInforAllTemplateApi = api.injectEndpoints({
	endpoints: (build) => ({
		getInforAllTemplateData: build.query<any, void>({
			query: () => ({
				url: "",
				method: "GET",
                body: {
                    jsonrpc: "2.0",
                    method: "template.get",
                    params: {
                      output: "extend",
                      selectHosts:"count",
                      selectItems: "count",
                      selectTriggers: "count",
                      selectDiscoveries: "count",
                      selectGraphs: "count",
                      selectHttpTests: "count",
                      selectDashboards: "count"
                      },
                    auth: null,
                    id: 1
                }
                  
		    }),
	    }),
    })
});

export const { useGetInforAllTemplateDataQuery } = getInforAllTemplateApi;