import axios from "axios";
import { api } from ".";
import { createAction } from "@reduxjs/toolkit";

export const successToastAction = createAction<string>("toast/success");
export const failedToastAction = createAction<string>("toast/failed");
const getAllTemplateGroupApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAllTemplateGroupData: build.query<any, void>({
			query: () => ({
				url: "",
				method: "GET",
                body: {
                        jsonrpc: "2.0",
                        method: "templategroup.get",
                        params: {
                            output: "extend",
                            selectTemplates: "count"
                        },
                        id: 1
                    }
			}),
		}),
	}),
});

export const { useGetAllTemplateGroupDataQuery } = getAllTemplateGroupApi;