import{_ as e,o as n,c as i,d}from"./app-JQ9X4zlU.js";const s={},l=d(`<h3 id="查询-key" tabindex="-1"><a class="header-anchor" href="#查询-key" aria-hidden="true">#</a> 查询 key</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dbsize                      // 返回当前数据库的 key 的数量
keys *                      // 查看所有 key
exists key                  // 检查给定 key 是否存在

ttl key                     // 以秒为单位，返回给定 key 的剩余生存时间
pttl key                    // 以毫秒为单位返回 key 的剩余过期时间

type key                    // 返回 key 所储存的值的类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作-key" tabindex="-1"><a class="header-anchor" href="#操作-key" aria-hidden="true">#</a> 操作 key</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flushall                    // 删除所有 key
del key                     // 删除 key

dump key                    // 序列化给定 key ，并返回被序列化的值

expire key 6                // 为给定 key 设置过期时间（秒）
pexpire key 6               // 为给定 key 设置过期时间（毫秒）
persist key                 // 移除 key 的过期时间

move key db                 // 将当前数据库的 key 移动到给定的数据库 db 当中

rename key newKey           // 修改 Key 的名称
renamenx key newKey         // 仅当 newkey 不存在时，将 key 改名为 newkey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[l];function r(v,c){return n(),i("div",null,a)}const y=e(s,[["render",r],["__file","RedisKeymingling.html.vue"]]);export{y as default};
