module.exports = {
  options: {
    basePath: '',
    files: [
      'spec/**/*.js',
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    frameworks: ['jasmine'],
    preprocessors: {
      'app/**/*.js': ['webpack'],
      'spec/**/*.js': ['webpack']
    },
    webpack: {
      devtool: 'inline-source-map',
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015','airbnb'],
            plugins: ['transform-react-jsx']
          }
        }]
      }
    }
  },
  unit: {}
}
