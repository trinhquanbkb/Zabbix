import React from "react";
import { Route, RouteProps } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";

// lazy load all the views

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm"));
const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));

// data collection
const HostGroup = React.lazy(() => import("../pages/tracking copy/index"));
const TemplateGroup = React.lazy(
	() => import("../pages/tracking copy/TemplateGroup")
);
const Hosts = React.lazy(() => import("../pages/tracking copy/Hosts"));

// dashboard
const EcommerceDashboard = React.lazy(
	() => import("../pages/dashboard/Ecommerce")
);
const AnalyticsDashboard = React.lazy(
	() => import("../pages/dashboard/Analytics")
);

// apps
// awb
const AwbDetail = React.lazy(() => import("../pages/awb/Detail/index"));
const AwbList = React.lazy(() => import("../pages/awb/index"));
const AwbManager = React.lazy(() => import("../pages/awb/Manager"));
// tracking
const TrackingDetail = React.lazy(
	() => import("../pages/tracking/Detail/index")
);
const TrackingList = React.lazy(() => import("../pages/tracking/index"));
const TrackingManager = React.lazy(() => import("../pages/tracking/Manager"));
const LatestData = React.lazy(() => import("../pages/tracking/LatestData"));
const Problem = React.lazy(() => import("../pages/tracking/Problem"));

// customer
const CustomerDetail = React.lazy(
	() => import("../pages/customers/Detail/index")
);
const CustomerList = React.lazy(() => import("../pages/customers/index"));
const CustomerManager = React.lazy(() => import("../pages/customers/Manager"));
// user
const UserDetail = React.lazy(() => import("../pages/user/Detail/index"));
const UserList = React.lazy(() => import("../pages/user/index"));
const UserManager = React.lazy(() => import("../pages/user/Manager"));
// transaction
const TransactionDetail = React.lazy(
	() => import("../pages/transaction/Detail/index")
);
const TransactionList = React.lazy(() => import("../pages/transaction/index"));
const TransactionManager = React.lazy(
	() => import("../pages/transaction/Manager")
);
// setting
const SettingDetail = React.lazy(() => import("../pages/setting/Detail/index"));
const SettingList = React.lazy(() => import("../pages/setting/index"));
const SettingManager = React.lazy(() => import("../pages/setting/Manager"));

// extra pages
const Error404 = React.lazy(() => import("../pages/error/Error404"));
const Error500 = React.lazy(() => import("../pages/error/Error500"));

export interface RoutesProps {
	path: RouteProps["path"];
	name?: string;
	component?: RouteProps["component"];
	route?: any;
	exact?: RouteProps["exact"];
	icon?: string;
	header?: string;
	roles?: string[];
	children?: RoutesProps[];
}

// root routes
const rootRoute: RoutesProps = {
	path: "/",
	exact: true,
	component: () => <Root />,
	route: Route,
};

// dashboards
const dashboardRoutes: RoutesProps = {
	path: "/dashboard",
	name: "Dashboards",
	icon: "airplay",
	header: "Navigation",
	children: [
		{
			path: "/dashboard/ecommerce",
			name: "Ecommerce",
			component: EcommerceDashboard,
			route: PrivateRoute,
		},
		{
			path: "/dashboard/analytics",
			name: "Analytics",
			component: AnalyticsDashboard,
			route: PrivateRoute,
		},
	],
};

// app
const projectAppRoutes: RoutesProps[] = [
	{
		path: "/awb",
		name: "Awb",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",

		children: [
			{
				path: "/awb/list",
				name: "Awb List",
				component: AwbList,
				route: PrivateRoute,
			},
			{
				path: "/awb/details",
				name: "Awb Detail",
				component: AwbDetail,
				route: PrivateRoute,
			},
			{
				path: "/awb/manager",
				name: "Awb Detail",
				component: AwbManager,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/tracking",
		name: "Tracking",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",

		children: [
			{
				path: "/monitoring/hosts",
				name: "Tracking List",
				component: TrackingList,
				route: PrivateRoute,
			},
			{
				path: "/monitoring/latest-data",
				name: "Tracking Detail",
				component: LatestData,
				route: PrivateRoute,
			},
			{
				path: "/monitoring/problem",
				name: "Tracking Detail",
				component: Problem,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/data-collection",
		name: "Data collection",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",

		children: [
			{
				path: "/data-collection/host-groups",
				name: "Host groups",
				component: HostGroup,
				route: PrivateRoute,
			},
			{
				path: "/data-collection/hosts",
				name: "Hosts",
				component: Hosts,
				route: PrivateRoute,
			},
			{
				path: "/data-collection/template-groups",
				name: "Template groups",
				component: TemplateGroup,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/customer",
		name: "Customer",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",

		children: [
			{
				path: "/customer/list",
				name: "Customer List",
				component: CustomerList,
				route: PrivateRoute,
			},
			{
				path: "/customer/details",
				name: "Customer Detail",
				component: CustomerDetail,
				route: PrivateRoute,
			},
			{
				path: "/customer/manager",
				name: "Customer Detail",
				component: CustomerManager,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/user",
		name: "User",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",

		children: [
			{
				path: "/user/list",
				name: "User List",
				component: UserList,
				route: PrivateRoute,
			},
			{
				path: "/user/details",
				name: "User Detail",
				component: UserDetail,
				route: PrivateRoute,
			},
			{
				path: "/user/manager",
				name: "User Detail",
				component: UserManager,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/transaction",
		name: "Transaction",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",

		children: [
			{
				path: "/transaction/list",
				name: "Transaction List",
				component: TransactionList,
				route: PrivateRoute,
			},
			{
				path: "/transaction/details",
				name: "Transaction Detail",
				component: TransactionDetail,
				route: PrivateRoute,
			},
			{
				path: "/transaction/manager",
				name: "Transaction Detail",
				component: TransactionManager,
				route: PrivateRoute,
			},
		],
	},
	{
		path: "/setting",
		name: "Setting",
		route: PrivateRoute,
		roles: ["Admin"],
		icon: "uil-briefcase",

		children: [
			{
				path: "/setting/list",
				name: "Setting List",
				component: SettingList,
				route: PrivateRoute,
			},
			{
				path: "/setting/details",
				name: "Setting Detail",
				component: SettingDetail,
				route: PrivateRoute,
			},
			{
				path: "/setting/manager",
				name: "Setting Detail",
				component: SettingManager,
				route: PrivateRoute,
			},
		],
	},
];

// auth
const authRoutes: RoutesProps[] = [
	{
		path: "/auth/login",
		exact: true,
		name: "Login",
		component: Login,
		route: Route,
	},
	{
		path: "/auth/confirm",
		name: "Confirm",
		component: Confirm,
		route: Route,
	},
	{
		path: "/auth/forget-password",
		name: "Forget Password",
		component: ForgetPassword,
		route: Route,
	},
	{
		path: "/auth/lock-screen",
		name: "Lock Screen",
		component: LockScreen,
		route: Route,
	},
	{
		path: "/auth/logout",
		name: "Logout",
		component: Logout,
		route: Route,
	},
];

// public routes
const otherPublicRoutes: RoutesProps[] = [
	{
		path: "/error-404",
		name: "Error - 404",
		component: Error404,
		route: Route,
	},
	{
		path: "/error-500",
		name: "Error - 500",
		component: Error500,
		route: Route,
	},
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
	let flatRoutes: RoutesProps[] = [];

	routes = routes || [];
	routes.forEach((item: RoutesProps) => {
		flatRoutes.push(item);

		if (typeof item.children !== "undefined") {
			flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
		}
	});
	return flatRoutes;
};

// All routes
const authProtectedRoutes = [rootRoute, dashboardRoutes, ...projectAppRoutes];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
	publicRoutes,
	authProtectedRoutes,
	authProtectedFlattenRoutes,
	publicProtectedFlattenRoutes,
};
