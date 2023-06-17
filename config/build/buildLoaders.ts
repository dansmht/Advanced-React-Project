import webpack from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [{ loader: "file-loader"}],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = {
    test: /\.(?:js|mjs|cjs|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env", { targets: "defaults" }]
        ]
      }
    }
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    cssLoader,
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
  ];
};
