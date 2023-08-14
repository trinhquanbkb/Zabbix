const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: any) {
	app.use(
		"/api", // Đổi thành đường dẫn API của bạn
		createProxyMiddleware({
			target: "http://192.168.1.5", // Thay thế bằng địa chỉ máy chủ Zabbix
			changeOrigin: true,
		})
	);
};
