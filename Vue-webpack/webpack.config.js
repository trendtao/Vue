//配置webpack的属性

const path = require("path")

//向webpack暴露对象
module.exports={
    entry: path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js",
    },
} 