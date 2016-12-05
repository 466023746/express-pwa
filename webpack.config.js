/**
 * Created by loutao on 2016/12/5.
 */

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            }
        ]
    }
};