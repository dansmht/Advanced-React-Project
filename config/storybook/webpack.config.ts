import webpack from "webpack";
import path from "path";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {

  const pathToSrc = path.resolve(__dirname, "..", "..", "src");

  config.resolve.modules.push(pathToSrc);

  config.module.rules = config.module.rules.map((rule: { test: string }) => {
    if(typeof rule !== "string" && /svg/.test(rule.test)) {
      return { ...rule, exclude: /\.svg/ };
    }
    return rule;
  });
  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildCssLoader(true));

  const definePlugin: webpack.DefinePlugin = config.plugins
    .find((plugin) => plugin instanceof webpack.DefinePlugin) as webpack.DefinePlugin;

  if (definePlugin) {
    definePlugin.definitions["__IS_DEV__"] = "\"true\"";
  }

  return config;
};
