module.exports = {
  outputDir: 'docs',
  filenameHashing: false,
  assetsDir: './',
  publicPath: process.env.NODE_ENV === 'production'
  ? '/project_sd4/'
  : '/'
}