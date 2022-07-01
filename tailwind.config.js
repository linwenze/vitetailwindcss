module.exports = {
  purge: [
  ...process.env.NODE_ENV === 'production'
	// 只在production环境使用，节省dev环境时间
   ? ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx']
   : [],
 ], // 只保留在这类文件夹使用过的css样式（一般在开发环境都会使用完整css）
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
