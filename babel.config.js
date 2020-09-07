module.exports = function (api) {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [
    ['styled-components'],
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],
  ];

  return {
    presets,
    plugins,
    babelrcRoots: ['.']
  };
};
