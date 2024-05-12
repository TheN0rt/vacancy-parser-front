const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: path.resolve(__dirname, '..', './src/index.tsx'),
   resolve: {
      extensions: ['.ts', '.tsx', '.js'],
   },
   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
               }
            ]
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(?:ico|png|jpe?g|gif)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
         }
      ],
   },
   devServer: {
      historyApiFallback: true,
    },
   output: {
      path: path.resolve(__dirname, '..', '/build'),
      filename: 'bundle.js',
      publicPath: '/',
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: path.resolve(__dirname, '..', './src/index.html'),
      })
   ]
}