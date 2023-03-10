var path=require("path");
const webpack=require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    devtool:"eval-source-map",
    entry:path.resolve(__dirname+"/src/index.js"),
    output:{
        path:path.resolve(__dirname+"/public"),
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"./public",
        historyApiFallback:true,
        inline:true,
        port:9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options:{
                            module:true
                        }
                    },{
                        loader:"postcss-loader"
                    }
                ]
            }       
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname+"/src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]  
}