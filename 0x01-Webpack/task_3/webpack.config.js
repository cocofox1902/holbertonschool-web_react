const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
  },
  output: {
		path: path.resolve(__dirname, './public'),
		filename: '[name].bundle.js',
	},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: 'inline-source-map',
	devServer: {
		contentBase: './public',
		port: 8564,
	},
	mode: 'development',
  plugins: [
		new CleanWebpackPlugin(),
  ],
};