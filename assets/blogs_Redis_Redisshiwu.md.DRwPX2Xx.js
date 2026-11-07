import{_ as a,o as n,c as e,a2 as p}from"./chunks/framework.EUByU7Iq.js";const u=JSON.parse('{"title":"Redis 事务","description":"","frontmatter":{"title":"Redis 事务","date":"2020-11-08T00:00:00.000Z","categories":["数据库","Redis"],"tags":["数据库","Redis"]},"headers":[],"relativePath":"blogs/Redis/Redisshiwu.md","filePath":"blogs/Redis/Redis事务.md"}'),i={name:"blogs/Redis/Redisshiwu.md"};function l(t,s,r,c,d,o){return n(),e("div",null,[...s[0]||(s[0]=[p(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>multi                // 标记一个事务块的开始</span></span>
<span class="line"><span>……                   // 要写的 事务</span></span>
<span class="line"><span>exec                 // 执行所有事务块内的命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>discard              // 取消事务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch key [key1...] // 监视一个(或多个) key ，如果在事务执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unwatch             // 取消 watch 命令对所有 key 的监视</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,1)])])}const m=a(i,[["render",l]]);export{u as __pageData,m as default};
