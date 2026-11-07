import{_ as n,o as a,c as e,a2 as p}from"./chunks/framework.EUByU7Iq.js";const k=JSON.parse('{"title":"Redis key 命令","description":"","frontmatter":{"title":"Redis key 命令","date":"2020-11-04T00:00:00.000Z","categories":["数据库","Redis"],"tags":["数据库","Redis"]},"headers":[],"relativePath":"blogs/Redis/RedisKeymingling.md","filePath":"blogs/Redis/RedisKey命令.md"}'),l={name:"blogs/Redis/RedisKeymingling.md"};function i(r,s,c,t,b,d){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h3 id="查询-key" tabindex="-1">查询 key <a class="header-anchor" href="#查询-key" aria-label="Permalink to &quot;查询 key&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dbsize                      // 返回当前数据库的 key 的数量</span></span>
<span class="line"><span>keys *                      // 查看所有 key</span></span>
<span class="line"><span>exists key                  // 检查给定 key 是否存在</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ttl key                     // 以秒为单位，返回给定 key 的剩余生存时间</span></span>
<span class="line"><span>pttl key                    // 以毫秒为单位返回 key 的剩余过期时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type key                    // 返回 key 所储存的值的类型</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="操作-key" tabindex="-1">操作 key <a class="header-anchor" href="#操作-key" aria-label="Permalink to &quot;操作 key&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>flushall                    // 删除所有 key</span></span>
<span class="line"><span>del key                     // 删除 key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dump key                    // 序列化给定 key ，并返回被序列化的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>expire key 6                // 为给定 key 设置过期时间（秒）</span></span>
<span class="line"><span>pexpire key 6               // 为给定 key 设置过期时间（毫秒）</span></span>
<span class="line"><span>persist key                 // 移除 key 的过期时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>move key db                 // 将当前数据库的 key 移动到给定的数据库 db 当中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rename key newKey           // 修改 Key 的名称</span></span>
<span class="line"><span>renamenx key newKey         // 仅当 newkey 不存在时，将 key 改名为 newkey</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,4)])])}const o=n(l,[["render",i]]);export{k as __pageData,o as default};
