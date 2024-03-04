import{_ as e,o as i,c as d,d as s}from"./app-JQ9X4zlU.js";const n={},a=s(`<p>Windows 安装很简单，这里不做赘述，下载地址如下：</p><blockquote><p>链接：https://pan.baidu.com/s/1AX9WtPazap3CVBdu4QcixA</p><p>提取码：<code>5266</code></p></blockquote><h3 id="_1-yum安装-redis" tabindex="-1"><a class="header-anchor" href="#_1-yum安装-redis" aria-hidden="true">#</a> 1. yum安装 Redis</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install http://rpms.famillecollet.com/enterprise/remi-release-7.rpm -y &amp;&amp; \\
yum --enablerepo=remi install redis -y &amp;&amp; \\
systemctl enable redis &amp;&amp; \\
systemctl start redis &amp;&amp; \\
rpm -ql redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://images2015.cnblogs.com/blog/946553/201702/946553-20170223161957320-1424572697.png" alt=""></p><h3 id="_2-usr-bin-目录下有编译好的redis指令" tabindex="-1"><a class="header-anchor" href="#_2-usr-bin-目录下有编译好的redis指令" aria-hidden="true">#</a> 2. <code>/usr/bin</code> 目录下有编译好的redis指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-benchmark     # 用于进行redis性能测试的工具
redis-check-aof     # 用于修复出问题的AOF文件
redis-rdb           # 用于修复出问题的rdb文件
redis-check-dump    # 用于修复出问题的dump.rdb文件
redis-cli           # redis的客户端
redis-server        # redis的服务端
redis-sentinel      # 用于集群管理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-etc-redis-conf" tabindex="-1"><a class="header-anchor" href="#_3-etc-redis-conf" aria-hidden="true">#</a> 3. /etc/redis.conf</h3><p>redis.conf 现在默认配置挺好的，如非必要，不用定制化修改。下面是简单的修改：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># bind 127.0.0.1 默认不注释，注释后，远程可以访问 redis
#bind 127.0.0.1

# requirepass foobared 默认注释，没有密码，后面的foobared为密码
requirepass 521666

# 开启 AOF 持久化功能
appendonly yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-登录-redis" tabindex="-1"><a class="header-anchor" href="#_4-登录-redis" aria-hidden="true">#</a> 4. 登录 redis</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli
# 或
redis-cli -h 127.0.0.1 -p 6379

# 输入密码
auth 521666
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[a];function l(c,t){return i(),d("div",null,r)}const m=e(n,[["render",l],["__file","RedisYUManzhuang.html.vue"]]);export{m as default};
