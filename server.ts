import { createRequestHandler } from "@remix-run/express";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import path from "path";
import config from "./app/components/config/config";

const app = express();

app.disable("x-powered-by");

app.use(compression());
app.use(express.static("public", { maxAge: "1d" }));
app.use(
	morgan(":req[x-forwarded-for] :method :url :status | :response-time ms")
);
app.use(
	"/build",
	express.static("public/build", { immutable: true, maxAge: "1y" })
);

const BUILD_DIR = path.join(process.cwd(), "build");
const MODE = process.env.NODE_ENV;
app.all(
	"*",
	MODE === "production"
		? createRequestHandler({ build: require(BUILD_DIR), mode: MODE })
		: (...args) => {
				purgeRequireCache();

				return createRequestHandler({
					build: require(BUILD_DIR),
					mode: MODE
				})(...args);
		  }
);

const port = config?.port ? config.port : process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`✅ Express server listening on http://localhost:${port}`);
});

function purgeRequireCache() {
	for (const key in require.cache) {
		if (key.startsWith(BUILD_DIR)) {
			delete require.cache[key];
		}
	}
}
