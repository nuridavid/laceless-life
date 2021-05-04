module.exports = {
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: {
          loader: "babel-loader",
          ignore: ["./node_modules/react-map-gl/dist/react-map-gl.js"],
        },
      },
    ],
  },
};
