/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ["**/.*"],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "build/index.js",
	// publicPath: "/build/",
	future: {
		unstable_dev: false,
		v2_meta: true,
		v2_errorBoundary: true,
		v2_routeConvention: true
	}
};