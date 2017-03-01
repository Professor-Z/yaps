/* eslint-disable*/
var path = require('path')
var webpack = require('webpack')
var isProduction =  process.env.NODE_ENV == "production";

var plugins = [];
if (isProduction) {
    console.log("生产环境")
} else {
    console.log("开发环境")
    plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    )
}
module.exports = {
    devtool: isProduction?false:'inline-source-map',
    // devtool: 'inline-source-map',
    entry: isProduction? {
        VRPuzzle: __dirname + '/src/index.js',
    }:{
        VRPuzzle: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            __dirname + '/src/index.js'
        ]
    },
    output: {
        path: __dirname + '/public',
        publicPath: isProduction ? '/VRPuzzle/public/' : '/public/',
        filename: isProduction ?"[name].bundle.[chunkhash].js":"[name].bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: ['babel'],
            include: path.join(__dirname, 'src'),
            exclude: path.join(__dirname, 'node_modules'),
            query: {
                presets: ['es2015', 'es2017']
            }
        }, {
            test: /\.s?css$/,
            loader: 'style!css!sass'
        }, {
            test: /\.(png|jpg|bmp)$/,
            loader: 'url?limit=3000&name=images/[name].[ext]'
        }]
    },
    plugins: plugins,
    externals: {
        'babel-polyfill': 'true',
        "sweetalert": "swal"
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/khaleesi/pintu/*': {
                target: 'http://flowdev.neoap.com',
                secure: false,
                changeOrigin: true
            }
        }
    }
}