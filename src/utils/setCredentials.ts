import { Cookies } from "react-cookie";

export const setCredentials = (credentials: { access_token: string }) => {
	let cookies = new Cookies();
	if (credentials) {
		cookies.set("access_token", credentials.access_token, { path: "/" });
	} else {
		cookies.remove("access_token");
	}
};
