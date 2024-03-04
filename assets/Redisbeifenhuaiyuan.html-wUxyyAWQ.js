import{_ as e,o as i,c as n,d}from"./app-JQ9X4zlU.js";const s={},a=d(`<h3 id="_1-备份" tabindex="-1"><a class="header-anchor" href="#_1-备份" aria-hidden="true">#</a> 1. 备份</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 登录
redis-cli

# 输入密码
auth 521666

# 查询安装目录
config get dir

# 查看目前 redis 的存储状态
info

# 备份，一般在安装目录下生成 dump.rdb 文件
save

exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-还原" tabindex="-1"><a class="header-anchor" href="#_2-还原" aria-hidden="true">#</a> 2. 还原</h3><p>将 <code>redis.conf</code> 中 <code>appendonly</code> 改为 <code>no</code></p><p>将 <code>dump.rdb</code> 复制到其他 redis 安装目录，重启 redis 即可</p>`,5),c=[a];function l(r,v){return i(),n("div",null,c)}const u=e(s,[["render",l],["__file","Redisbeifenhuaiyuan.html.vue"]]);export{u as default};
