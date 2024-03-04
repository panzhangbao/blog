import{_ as e,o as n,c as a,d as i}from"./app-JQ9X4zlU.js";const r={},s=i(`<h3 id="安装-yarn" tabindex="-1"><a class="header-anchor" href="#安装-yarn" aria-hidden="true">#</a> 安装 yarn</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm -g install yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="yarn-命令简介" tabindex="-1"><a class="header-anchor" href="#yarn-命令简介" aria-hidden="true">#</a> yarn 命令简介</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始化新项目：yarn init

安装包：yarn [global] add [package]@[version]

安装所有的依赖包：yarn 或 yarn install

更新包：yarn upgrade [package | package@tag | package@version | @scope/]... [--ignore-engines] [--pattern]

删除包：yarn remove &lt;package...&gt;

列出所有包和它们的依赖：yarn list [--depth] [--pattern] 

运行脚本：yarn run [script] [&lt;args&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yarn-换源" tabindex="-1"><a class="header-anchor" href="#yarn-换源" aria-hidden="true">#</a> yarn 换源</h3><p>Yarn 源仓库包下载不稳定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看 yarn 配置
yarn config get registry
# 或者
yarn config list

&gt; registry: &#39;https://registry.yarnpkg.com&#39;

# 安装淘宝镜像
yarn config set registry https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[s];function l(t,c){return n(),a("div",null,d)}const u=e(r,[["render",l],["__file","yarn.html.vue"]]);export{u as default};
