const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", 
  entry: {
      page1: "./src/page1/script.js",
      page2: "./src/page2/scriptCallRadio.js",
      page3: "./src/page3/boring.js",
      page4: "./src/page4/scriptGoToLibrary.js",
      page5: "./src/page5/magsOptions.js",
      page6: "./src/page6/nope.js",
      page7: "./src/page7/selectDate.js",
      page8: "./src/page8/nope2.js",
      page9: "./src/page9/seeBooks.js",
      page10: "./src/page10/selectTime.js",
      page11: "./src/page11/done.js",
      page12: "./src/page12/welcomeToNYC.js",
  },
  
  
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "bundle_sin_babel"), 
  },
  
  plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),  

      new HtmlWebpackPlugin({
        template: "./src/page1/index.html",
        filename: "index.html",
        chunks: ['page1']
      }),

      
      new HtmlWebpackPlugin({
        template: "./src/page2/callRadio.html",
        filename: "page2.html",
        chunks: ['page2']
      }),
      
      new HtmlWebpackPlugin({
        template: "./src/page3/boring.html",
        filename: "page3.html",
        chunks: ['page3']
      }),

      new HtmlWebpackPlugin({
        template: "./src/page4/goToLibrary.html",
        filename: "page4.html",
        chunks: ['page4']
      }),

      new HtmlWebpackPlugin({
        template: "./src/page5/magsOptions.html",
        filename: "page5.html",
        chunks: ['page5']
      }),

      new HtmlWebpackPlugin({
        template: "./src/page6/nope.html",
        filename: "page6.html",
        chunks: ['page6']
      }),

      new HtmlWebpackPlugin({
        template: "./src/page7/selectDate.html",
        filename: "page7.html",
        chunks: ['page7']
      }),

      new HtmlWebpackPlugin({
        template: "./src/page8/nope2.html",
        filename: "page8.html",
        chunks: ['page8']
      }),

      new HtmlWebpackPlugin({
        template: "./src/page9/seeBooks.html",
        filename: "page9.html",
        chunks: ['page9']
      }),

      new HtmlWebpackPlugin({
        template: "./src/page10/selectTime.html",
        filename: "page10.html",
        chunks: ['page10']
      }),
      new HtmlWebpackPlugin({
        template: "./src/page11/done.html",
        filename: "page11.html",
        chunks: ['page11']
      }),
      new HtmlWebpackPlugin({
        template: "./src/page12/welcomeToNYC.html",
        filename: "page12.html",
        chunks: ['page12']
      }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          ],
        },
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: "file-loader",
            options: { 
              outputPath: "images"
            }
          }
        },
        //{
          //test: /\.m?js$/,
          //exclude: /(node_modules)/,
          //use: {
            //loader: 'babel-loader',
            //options: {
              //presets: ['@babel/preset-env'],
              //plugins: ['babel-plugin-hash-resolve'],
            //}
          //}
        //}
    ],
  },
};