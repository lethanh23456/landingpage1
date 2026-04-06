const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withFonts = require('next-fonts');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve('./assets/antd-custom.less'), 'utf8')
);

module.exports = withPlugins(
  [
    [withTM, { transpileModules: ['reusecore', 'common'] }],
    withFonts,
  ],
  {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
        };
      }

      // Handle Less/Antd
      config.module.rules.push({
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
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
    distDir: './.next',
    trailingSlash: true,
  }
);