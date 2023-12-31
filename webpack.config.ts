import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv): webpack.Configuration => {

  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";
  const apiUrl = env.apiUrl || "http://localhost:8000";

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  return buildWebpackConfig({
    mode,
    isDev,
    port,
    apiUrl,
    paths,
  });
};
