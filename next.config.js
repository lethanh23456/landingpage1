const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve('./public/assets/antd-custom.less'), 'utf8')
);

module.exports = {
  distDir: './.next',
  trailingSlash: true,
  images: {
    disableStaticImages: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    // Alias paths
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, 'public/assets'),
      components: path.resolve(__dirname, 'components'),
      common: path.resolve(__dirname, 'common'),
    };

    config.module.rules.push({
      test: /\.css$/,
      use: [isServer ? 'null-loader' : 'style-loader', 'css-loader'],
    });

    config.module.rules.push({
      test: /\.less$/,
      use: [
        isServer ? 'null-loader' : 'style-loader',
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

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
    });

    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      type: 'asset/resource',
    });

    return config;
  },
};