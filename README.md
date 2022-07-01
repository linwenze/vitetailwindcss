### 安装
`npm init vite@latest`

### 安装vscode插件
Tailwind CSS IntelliSense

### 安装 tailwindcss
`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
`npx tailwindcss init`

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