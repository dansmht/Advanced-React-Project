import webpack from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {

  const pathToSrc = path.resolve(__dirname, "..", "..", "src");

  config.resolve.modules.push(pathToSrc);

  config.module.rules.push(buildCssLoader(true));

  return config;
};
