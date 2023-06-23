import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => {
  return {
    test: /\.scss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => !resourcePath.includes("\\styles\\"),
            localIdentName: isDev ? "[local]_[hash:base64:3]_[name]" : "[hash:base64:8]",
          }
        }
      },
      "sass-loader",
    ],
  };
};
