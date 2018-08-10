//配置webpack的属性

const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")

//向webpack暴露对象
module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
    },
    //第二种自动部署方式，不过不推荐，很麻烦，可以在pageage.json里面配置
    devServer: {
        open: true,
        port: 2888,
        contentBase: "src",
        hot: true  //启动热更新，需要引入webpack模块，以及配置plugins插件
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //这里引用 html-webpack-plugin 插件，因此可以除去加载页面引用的样式和脚本
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //limit(单位：byte)):代表文件大小大于这个数字，就会base64转换
            //name: 生成的文件名跟自己的文件名一样
            { test: /\.(png|jpg|gif|jpeg|bpm)$/, use: "url-loader?limit=27118&name=[hash:8]-[name].[ext]" },
            //匹配字体文件
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: "url-loader?name=fonts/[hash:8]-[name].[ext]" },
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }
        ]
    }



} 