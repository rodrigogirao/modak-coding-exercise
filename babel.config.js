module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['./src'],
        alias: {
          api: './src/api',
          components: './src/ui/components',
          constants: './src/constants',
          hooks: './src/hooks',
          mappers: './src/mappers',
          modules: './src/modules',
          screens: '.src/ui/screens',
        },
      },
    ],
  ],
}
