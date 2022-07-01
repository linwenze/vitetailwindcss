### 安装
`npm init vite@latest`

### 安装vscode插件
[image:CAFF8486-9070-417C-9DAB-14611A03846F-46050-000053400F6E558E/95C7336C-0479-47D7-B6A8-5686C4B3D73B.png]

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