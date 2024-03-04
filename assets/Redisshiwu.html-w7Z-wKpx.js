import{_ as e,o as i,c as n,d as s}from"./app-JQ9X4zlU.js";const d={},c=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>multi                // 标记一个事务块的开始
……                   // 要写的 事务
exec                 // 执行所有事务块内的命令

discard              // 取消事务

watch key [key1...] // 监视一个(或多个) key ，如果在事务执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断

unwatch             // 取消 watch 命令对所有 key 的监视</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[c];function l(t,r){return i(),n("div",null,a)}const v=e(d,[["render",l],["__file","Redisshiwu.html.vue"]]);export{v as default};
