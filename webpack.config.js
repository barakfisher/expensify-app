
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) =>{
    console.log(env)
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry : './src/app.js', //starting point
        output : {
            path :path.join(__dirname,'public'), //absolute path 
            filename:'bundle.js'
        },
        module : {
            rules: [{
                loader :'babel-loader',
                test: /.\js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/ ,  /// look for all files that ends with .scss or .css
                // use : [  // for an array of loaders
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader'
                // ]
                use: CSSExtract.extract({
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins:[
            CSSExtract
        ],
        // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devtool: isProduction ? 'source-map' : 'inline-source-map',

        devServer: {
            contentBase : path.join(__dirname,'public'),
            historyApiFallback: true // telling the web-server for all 404 pages show the index.html file
        }
    };
};

// console.log(path.join(__dirname,'public')); //current location

