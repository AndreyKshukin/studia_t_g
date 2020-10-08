module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          // root: ['./'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.json',
            'ts',
            'tsx',
            '.webp',
          ],
          alias: {
            '@actions': './src/redux/actions',
            '@components': './src/components',
            '@images': './assets/images/',
            '@redux': './src/redux',
            '@services': './src/services',
            '@types': './src/types',
          },
        },
      ],
    ],
  };
};
