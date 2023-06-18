import webpack from "webpack";
import path from "path";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {

  const pathToSrc = path.resolve(__dirname, "..", "..", "src");

  config.resolve.modules.push(pathToSrc);

  config.module.rules = config.module.rules.map((rule) => {
    if(typeof rule !== "string" && /svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg/ };
    }
    return rule;
  });
  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildCssLoader(true));

  return config;
};
