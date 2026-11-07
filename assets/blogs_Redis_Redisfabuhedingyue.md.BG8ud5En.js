import{_ as n,o as a,c as e,a2 as p}from"./chunks/framework.EUByU7Iq.js";const m=JSON.parse('{"title":"Redis 发布和订阅","description":"","frontmatter":{"title":"Redis 发布和订阅","date":"2020-11-07T00:00:00.000Z","categories":["数据库","Redis"],"tags":["数据库","Redis"]},"headers":[],"relativePath":"blogs/Redis/Redisfabuhedingyue.md","filePath":"blogs/Redis/Redis发布和订阅.md"}'),l={name:"blogs/Redis/Redisfabuhedingyue.md"};function i(r,s,c,t,b,u){return a(),e("div",null,[...s[0]||(s[0]=[p(`<ul><li><p>Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。</p></li><li><p>Redis 客户端可以订阅任意数量的频道。</p></li></ul><p>下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系： 当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端： pubsub2</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/*******************  主要会用下面 3 个  ****************/</span></span>
<span class="line"><span>subscribe channel [channer2]    // 订阅给定的一个或多个频道的信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsubscribe channel [channel2]    // 取消订阅给定的一个或多个频道的信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>publish channel message         // 将信息发送到指定的频道</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/***************/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>psubscribe pattern [pattern]    // 订阅一个或多个符合给定模式的频道</span></span>
<span class="line"><span></span></span>
<span class="line"><span>punsubscribe pattern [pattern]    // 退订一个或多个符合给定模式的频道</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pubsub subcommand [argument [argument...]] // 查看订阅与发布系统状态</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,3)])])}const o=n(l,[["render",i]]);export{m as __pageData,o as default};
