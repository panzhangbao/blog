import{_ as n,o as a,c as e,a2 as p}from"./chunks/framework.EUByU7Iq.js";const u=JSON.parse('{"title":"Redis 备份还原","description":"","frontmatter":{"title":"Redis 备份还原","date":"2020-11-03T00:00:00.000Z","categories":["数据库","Redis"],"tags":["数据库","Redis"]},"headers":[],"relativePath":"blogs/Redis/Redisbeifenhuaiyuan.md","filePath":"blogs/Redis/Redis备份还原.md"}'),l={name:"blogs/Redis/Redisbeifenhuaiyuan.md"};function i(r,s,c,d,t,o){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h3 id="_1-备份" tabindex="-1">1. 备份 <a class="header-anchor" href="#_1-备份" aria-label="Permalink to &quot;1. 备份&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 登录</span></span>
<span class="line"><span>redis-cli</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输入密码</span></span>
<span class="line"><span>auth 521666</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询安装目录</span></span>
<span class="line"><span>config get dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看目前 redis 的存储状态</span></span>
<span class="line"><span>info</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 备份，一般在安装目录下生成 dump.rdb 文件</span></span>
<span class="line"><span>save</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_2-还原" tabindex="-1">2. 还原 <a class="header-anchor" href="#_2-还原" aria-label="Permalink to &quot;2. 还原&quot;">​</a></h3><p>将 <code>redis.conf</code> 中 <code>appendonly</code> 改为 <code>no</code></p><p>将 <code>dump.rdb</code> 复制到其他 redis 安装目录，重启 redis 即可</p>`,5)])])}const m=n(l,[["render",i]]);export{u as __pageData,m as default};
