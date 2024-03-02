const webpack = require('@nativescript/webpack');
const NativeScriptHTTPPlugin = require("@klippa/nativescript-http/webpack"); 

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  webpack.chainWebpack(config => {
    config.plugin('NativeScriptHTTPPlugin').use(NativeScriptHTTPPlugin, [
       {
          replaceHTTP: true,
          replaceImageCache: false
       }
    ])
 });

  return webpack.resolveConfig();
};
