var path=require("path");
const webpack=require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    devtool:"eval-source-map",
    entry:path.resolve(__dirname+"/app/main.js"),
    output:{
        path:path.resolve(__dirname+"/public"),
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"./public",
        historyApiFallback:true,
        inline:true,
        port:8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
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
            template:__dirname+"/app/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]  
}