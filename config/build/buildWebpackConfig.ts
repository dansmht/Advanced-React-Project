import webpack from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => ({
  mode: 'development',
  entry: options.paths.entry,
  output: {
    filename: '[name].[contenthash].js',
    path: options.paths.build,
    clean: true,
  },
  plugins: buildPlugins(options),
  module: {
    rules: buildLoaders(),
  },
  resolve: buildResolvers(),
});
