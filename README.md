### 安装
`npm init vite@latest`

### 安装vscode插件
Tailwind CSS IntelliSense

### 安装 tailwindcss
`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
###初始化tailwind.config.js
`npx tailwindcss init`
### tailwind.config.js文件配置
```
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

```
### 新建tailwind.css，然后在main.ts导入
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 在postcss导入tailwind,根目录新建.postcssrc.js文件
```
module.exports = {
  plugins: [
      require('tailwindcss'),
      require('autoprefixer')
  ]
}

```
