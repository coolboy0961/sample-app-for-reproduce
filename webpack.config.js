const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack
	webpack.chainWebpack((config) => {
    config.externals(
      // make sure to keep pre-defined externals
      config.get("externals").concat([
        // add your own externals
        "~/licenses.json",
      ])
    );
  });

	return webpack.resolveConfig();
};


