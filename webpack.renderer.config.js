const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

rules.push({
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
})

rules.push({
  test: /\.(png|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
