export interface MenuItemTypes {
	key: string;
	label: string;
	isTitle?: boolean;
	icon?: string;
	url?: string;
	badge?: {
		variant: string;
		text: string;
	};
	parentKey?: string;
	target?: string;
	children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [
	{
		key: "dashboards",
		label: "Dashboards",
		isTitle: false,
		icon: "home",
		badge: { variant: "success", text: "02" },
		children: [
			{
				key: "ds-ecommerce",
				label: "Ecommerce",
				url: "/dashboard/ecommerce",
				parentKey: "dashboards",
			},
			{
				key: "ds-analytics",
				label: "Analytics",
				url: "/dashboard/analytics",
				parentKey: "dashboards",
			},
		],
	},
	{
		key: "tracking",
		label: "Tracking",
		isTitle: false,
		icon: "briefcase",
		children: [
			{
				key: "tracking-list",
				label: "Tracking List",
				url: "/tracking/list",
				parentKey: "tracking",
			},
			{
				key: "tracking-details",
				label: "Tracking Details",
				url: "/tracking/details",
				parentKey: "tracking",
			},
			{
				key: "tracking-manager",
				label: "Tracking Manager",
				url: "/tracking/manager",
				parentKey: "tracking",
			},
		],
	},
	{
		key: "order",
		label: "Order",
		isTitle: false,
		icon: "truck",
		children: [
			{
				key: "order-list",
				label: "Order List",
				url: "/order/list",
				parentKey: "order",
			},
			{
				key: "order-details",
				label: "Order Details",
				url: "/order/details",
				parentKey: "order",
			},
			{
				key: "order-manager",
				label: "Order Manager",
				url: "/order/manager",
				parentKey: "order",
			},
		],
	},
	{
		key: "awb",
		label: "AWB",
		isTitle: false,
		icon: "send",
		children: [
			{
				key: "awb-list",
				label: "Awb List",
				url: "/awb/list",
				parentKey: "awb",
			},
			{
				key: "awb-details",
				label: "Awb Detail",
				url: "/awb/details",
				parentKey: "awb",
			},
			{
				key: "awb-manager",
				label: "Awb Manager",
				url: "/awb/manager",
				parentKey: "awb",
			},
		],
	},
	{
		key: "customer",
		label: "Customer",
		isTitle: false,
		icon: "clipboard",
		children: [
			{
				key: "customer-list",
				label: "Customer List",
				url: "/customer/list",
				parentKey: "customer",
			},
			{
				key: "customer-details",
				label: "Customer Detail",
				url: "/customer/details",
				parentKey: "customer",
			},
			{
				key: "customer-manager",
				label: "Customer Manager",
				url: "/customer/manager",
				parentKey: "customer",
			},
		],
	},
	{
		key: "transaction",
		label: "Transaction",
		isTitle: false,
		icon: "dollar-sign",
		children: [
			{
				key: "transaction-list",
				label: "Transaction List",
				url: "/transaction/list",
				parentKey: "transaction",
			},
			{
				key: "transaction-details",
				label: "Transaction Detail",
				url: "/transaction/details",
				parentKey: "transaction",
			},
			{
				key: "transaction-manager",
				label: "Transaction Manager",
				url: "/transaction/manager",
				parentKey: "transaction",
			},
		],
	},
	{
		key: "user",
		label: "User",
		isTitle: false,
		icon: "user",
		children: [
			{
				key: "user-list",
				label: "User List",
				url: "/user/list",
				parentKey: "user",
			},
			{
				key: "user-details",
				label: "User Detail",
				url: "/user/details",
				parentKey: "user",
			},
			{
				key: "user-manager",
				label: "User Manager",
				url: "/user/manager",
				parentKey: "user",
			},
		],
	},
	{
		key: "setting",
		label: "Setting",
		isTitle: false,
		icon: "settings",
		children: [
			{
				key: "setting-list",
				label: "Setting List",
				url: "/setting/list",
				parentKey: "setting",
			},
			{
				key: "setting-details",
				label: "Setting Detail",
				url: "/setting/details",
				parentKey: "setting",
			},
			{
				key: "setting-manager",
				label: "Setting Manager",
				url: "/setting/manager",
				parentKey: "setting",
			},
		],
	},
];

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
	{
		key: "monitorings",
		label: "Monitorings",
		isTitle: false,
		icon: "home",
		children: [
			{
				key: "hosts",
				label: "Hosts",
				url: "/monitoring/hosts",
				parentKey: "monitorings",
			},
			{
				key: "latestdata",
				label: "Latestdata",
				url: "/monitoring/latest-data",
				parentKey: "monitorings",
			},
			{
				key: "problem",
				label: "Problem",
				url: "/monitoring/problem",
				parentKey: "monitorings",
			},
		],
	},
	{
		key: "data-collection",
		label: "Data collection",
		isTitle: false,
		icon: "truck",
		children: [
			{
				key: "host groups",
				label: "Host groups",
				url: "/data-collection/host-groups",
				parentKey: "data-collection",
			},
			{
				key: "template-groups",
				label: "Template groups",
				url: "/data-collection/template-groups",
				parentKey: "data-collection",
			},
			{
				key: "hosts",
				label: "Hosts",
				url: "/data-collection/hosts",
				parentKey: "data-collection",
			},
		],
	},
];

export { MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
