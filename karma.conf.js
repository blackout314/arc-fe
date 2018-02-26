var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*Spec.js'
    ],
    preprocessors: {
      'test/**/*Spec.js': ['webpack']
    },
    webpack: webpackConfig, 
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
