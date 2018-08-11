const path = require("path")
const htmlwebpackplugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader');

module.exports={
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"./dist"),
    },

    plugins:[
        new htmlwebpackplugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html"
        }),
          // 添加代码2 VueLoaderPlugin
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"] },
            {test:/\.vue$/,use:"vue-loader" },
        ]
    }
}