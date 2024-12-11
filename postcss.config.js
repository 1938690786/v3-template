export default {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: ({ file }) => {
        return file.includes('vant') ? 37.5 : 75
      },
      propList: ['*'],
    },
  },
}
