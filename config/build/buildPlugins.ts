import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BuildOptions } from "./types/config";

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean);
};
