const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader", options: {
                            /* 設置欲定義的環境 */
                            presets: [
                                ["@babel/preset-env", {
                                    /* 配置要兼容的目標瀏覽器版本 */
                                    targets: {
                                        "chrome": "100",
                                    },
                                    "corejs": "3",
                                    /* 使用corejs的方式 usage 按需加載 */
                                    "useBuiltIns": "usage"
                                }
                                ]]
                        }
                    }, "ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.less/,
                use: ["style-loader","css-loader", {
loader:"postcss-loader",options:{
postcssOptions:{
plugins:[
["postcss-preset-env",{
browsers: "last 2 versions"
}]

]


}



}



                }, "less-loader"]

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "貪食蛇",
            template: "./src/index.html"

        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: [".ts", ".js"]

    }



}