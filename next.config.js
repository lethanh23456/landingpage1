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

    // Handle Less files (for antd)
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

    return config;
  },
};