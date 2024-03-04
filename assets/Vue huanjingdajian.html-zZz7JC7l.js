import{_ as e,o as n,c as i,d}from"./app-JQ9X4zlU.js";const s={},a=d(`<h3 id="windows-下安装-node-js" tabindex="-1"><a class="header-anchor" href="#windows-下安装-node-js" aria-hidden="true">#</a> Windows 下安装 Node.js</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 1. 下载 Node.js
curl https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi

# 检查是否安装成功
node -v

# npm 清理缓存命令
npm cache clean --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm-设置淘宝源" tabindex="-1"><a class="header-anchor" href="#npm-设置淘宝源" aria-hidden="true">#</a> npm 设置淘宝源</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看设置
npm config get registry

# 设置taobao源
npm config set registry https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-安装" tabindex="-1"><a class="header-anchor" href="#vue-安装" aria-hidden="true">#</a> vue 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># yarn 工具
npm -g install yarn

# 安装vue
yarn -g add vue

# 安装vue-cli脚手架：
yarn -g add vue-cli

# 安装 webpack
yarn -g add webpak

# 安装路由
yarn -g add vue-router

# VUE状态管理
yarn -g add vuex

# mockjs 模拟后端数据结构输出
yarn -g add mockjs
# 异步编程框架 axios
yarn -g add axios
# mock 可监听 api 请求是否可用，如不可用则返回 mock 测试数据
yarn -g add axios-mock-adapter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack-项目" tabindex="-1"><a class="header-anchor" href="#webpack-项目" aria-hidden="true">#</a> webpack 项目</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建项目 vueTest
vue init webpack vueTest

# 安装依赖
cd vueTest
npm install

# 启动项目
npm run dev

# 打包
npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-cli-项目目录解析" tabindex="-1"><a class="header-anchor" href="#vue-cli-项目目录解析" aria-hidden="true">#</a> Vue-cli 项目目录解析</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- assets                       // 资源目录 
|   |-- components                   // vue公共组件
|   |-- store                        // vuex的状态管理
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                         // 数据
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|   |-- .postcssrc.js                // 通过JS插件装换样式的工具 
|-- README.md                        // 项目说明
|-- favicon.ico 
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[a];function v(r,c){return n(),i("div",null,l)}const m=e(s,[["render",v],["__file","Vue huanjingdajian.html.vue"]]);export{m as default};
