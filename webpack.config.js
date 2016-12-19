var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');

module.exports = {
	entry: {
		style: './src/*/main.less'
	},
	output: {
        path: __dirname+'/public',
        filename: '[name].js'
    },

    resolve:{
        extensions: ['','.js','.less']
    },

	watch: true,

	devtool: 'cheap-inline-module-source-map',

	module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css-loader!autoprefixer-loader!less-loader")
            }
        ]
    },

    plugins:[
    	new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};