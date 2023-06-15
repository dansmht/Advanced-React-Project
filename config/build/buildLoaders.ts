import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

  const cssLoader = {
    test: /\.scss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev ? '[local]_[hash:base64:3]_[name]' : '[hash:base64:8]',
          },
        }
      },
      "sass-loader",
    ],
  };

  const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{ loader: 'file-loader'}],
    };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    cssLoader,
    fileLoader,
    svgLoader,
    typescriptLoader,
  ];
};
