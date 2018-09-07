/* eslint-disable no-undef */

const path = require('path');

const alias = {
  jquery: path.resolve('./node_modules/jquery'),
  'lodash-es': path.resolve('./node_modules/lodash-es'),
  foundation: path.resolve('./node_modules/foundation-sites'),
};

module.exports = {
  slateCssVarLoader: {
    cssVarLoaderLiquidPath: ['src/snippets/css-variables.liquid'],
  },
  slateTools: {
    extends: {
      dev: {
        resolve: {alias},
        module: {
          rules: [{
            test: /\.scss$/,
            use: [{
              loader: 'sass-loader',
              options: {
                includePaths: [
                  './node_modules/foundation-sites/scss',
                  './node_modules/motion-ui/src',
                  './node_modules/font-awesome/scss',
                ],
              },
            }],
          }],
        },
      },
      prod: {resolve: {alias}},
    },
  },
};
