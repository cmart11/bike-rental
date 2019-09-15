const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './client/main.js'),
    output: {
        path: path.resolve(__dirname, './views'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};


// module.exports = {
//     entry: [
//         '@babel/polyfill',
//         './client/main.js'
//     ], // assumes your entry point is the index.js in the root of your project folder
//     mode: 'development',
//     output: {
//         path: path.resolve(__dirname, "./views"), // assumes your bundle.js will also be in the root of your project folder
//         filename: 'bundle.js'
//     },
//     devtool: 'source-maps',
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//         ]
//     }
// };
