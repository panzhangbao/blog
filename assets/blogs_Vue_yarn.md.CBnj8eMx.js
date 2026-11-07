import{_ as n,o as s,c as e,a2 as p}from"./chunks/framework.EUByU7Iq.js";const u=JSON.parse('{"title":"yarn","description":"","frontmatter":{"title":"yarn","date":"2020-10-03T00:00:00.000Z","categories":["Vue"],"tags":["Vue"]},"headers":[],"relativePath":"blogs/Vue/yarn.md","filePath":"blogs/Vue/yarn.md"}'),r={name:"blogs/Vue/yarn.md"};function l(i,a,t,c,b,o){return s(),e("div",null,[...a[0]||(a[0]=[p(`<h3 id="安装-yarn" tabindex="-1">安装 yarn <a class="header-anchor" href="#安装-yarn" aria-label="Permalink to &quot;安装 yarn&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm -g install yarn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="yarn-命令简介" tabindex="-1">yarn 命令简介 <a class="header-anchor" href="#yarn-命令简介" aria-label="Permalink to &quot;yarn 命令简介&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>初始化新项目：yarn init</span></span>
<span class="line"><span></span></span>
<span class="line"><span>安装包：yarn [global] add [package]@[version]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>安装所有的依赖包：yarn 或 yarn install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新包：yarn upgrade [package | package@tag | package@version | @scope/]... [--ignore-engines] [--pattern]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除包：yarn remove &lt;package...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>列出所有包和它们的依赖：yarn list [--depth] [--pattern] </span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行脚本：yarn run [script] [&lt;args&gt;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="yarn-换源" tabindex="-1">yarn 换源 <a class="header-anchor" href="#yarn-换源" aria-label="Permalink to &quot;yarn 换源&quot;">​</a></h3><p>Yarn 源仓库包下载不稳定</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看 yarn 配置</span></span>
<span class="line"><span>yarn config get registry</span></span>
<span class="line"><span># 或者</span></span>
<span class="line"><span>yarn config list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; registry: &#39;https://registry.yarnpkg.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装淘宝镜像</span></span>
<span class="line"><span>yarn config set registry https://registry.npmmirror.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,7)])])}const m=n(r,[["render",l]]);export{u as __pageData,m as default};
