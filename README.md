# electron-react-template
Electron的React模版，结构如下
```text
electron-react-template
  |__src
     |__main                                          # 主进程代码 
        |__index.ts
        |__other
     |__renderer                                      # 渲染进程代码
        |__index                                      # 一个窗口/页面
           |__index.tsx
           |__index.scss
        |__other   
  |__dist                                             # webpack打包后产物
  |__native                                           # C++代码
  |__release                                          # electron-builder打包后产物
  |__resources                                        # 资源文件
  |__babel.config.js                                  # babel配置
  |__tsconfig.json                                    # typescript配置
  |__webpack.base.config.js                           # 基础webpack配置
  |__webpack.main.dev.js                              # 主进程开发模式webpack配置
  |__webpack.main.prod.js                             # 主进程生产模式webpack配置
  |__webpack.renderer.dev.js                          # 渲染进程开发模式webpack配置
  |__webpack.renderer.prod.js                         # 渲染进程生产模式webpack配置
```
运行命令
+ 开发环境下运行
```bash
npm run dev
```
+ 生产环境下运行
```bash
npm run build && npm run start-main
```
+ 构建打包
```bash
npm run package
```