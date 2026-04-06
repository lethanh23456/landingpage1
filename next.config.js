const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve('./assets/antd-custom.less'), 'utf8')
);

module.exports = {
  distDir: './.next',
  trailingSlash: true,
  transpilePackages: ['reusecore', 'common'],

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    // Handle CSS files
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    // Handle Less files (antd)
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
              modifyVars: themeVariables,
            },
          },
        },
      ],
    });

    // Handle fonts
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
    });

    // Handle images
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      type: 'asset/resource',
    });

    return config;
  },
};