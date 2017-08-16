module.exports = {
	entry: './src/app.js',
	output: {
		filename: './dist/bundle.js',
		
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}]
			}
		]
	}
}