const path = require('path');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck:true,
  },
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) =>
      addStyleResource(config.module.rule('scss').oneOf(type))
    );
  },
};

function addStyleResource(rule) {
  const patterns = [
    '_colors.scss',
    '_fonts.scss',
    '_sizes.scss',
  ].map((filename) => path.resolve(__dirname, `./src/styles/${filename}`));

  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns,
    });
}
