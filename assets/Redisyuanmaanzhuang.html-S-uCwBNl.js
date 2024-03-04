import{_ as e,o as i,c as s,d}from"./app-JQ9X4zlU.js";const n={},a=d(`<p>Windows 安装很简单，这里不做赘述，下载地址如下：</p><blockquote><p>链接：https://pan.baidu.com/s/1AX9WtPazap3CVBdu4QcixA</p><p>提取码：<code>5266</code></p></blockquote><h3 id="_1-源码安装-redis" tabindex="-1"><a class="header-anchor" href="#_1-源码安装-redis" aria-hidden="true">#</a> 1. 源码安装 Redis</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install gcc gcc-c++ libstdc++-devel \\
    centos-release-scl \\
    devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils

scl enable devtoolset-9 bash

wget http://download.redis.io/releases/redis-stable.tar.gz &amp;&amp; \\
tar -zxvf redis-stable.tar.gz &amp;&amp; \\
mv redis-stable/ /usr/local/redis/ &amp;&amp; \\
cd /usr/local/redis

# 编译
make

# 安装到指定目录,默认在/usr/local/bin
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-src-目录下有编译好的redis指令" tabindex="-1"><a class="header-anchor" href="#_2-src-目录下有编译好的redis指令" aria-hidden="true">#</a> 2. src/目录下有编译好的redis指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># redis可执行文件
./redis-benchmark     #用于进行redis性能测试的工具
./redis-check-dump   #用于修复出问题的dump.rdb文件
./redis-cli                   #redis的客户端
./redis-server             #redis的服务端
./redis-check-aof       #用于修复出问题的AOF文件
./redis-sentinel          #用于集群管理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-redis-conf" tabindex="-1"><a class="header-anchor" href="#_3-redis-conf" aria-hidden="true">#</a> 3. redis.conf</h3><p>redis.conf 现在默认配置挺好的，如非必要，不用定制化修改的。下面是简单的修改：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># bind 127.0.0.1 默认不注释，注释后，远程可以访问 redis
#bind 127.0.0.1

# requirepass foobared 默认注释，没有密码，后面的foobared为密码
requirepass 521666
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-将-redis-加入服务" tabindex="-1"><a class="header-anchor" href="#_4-将-redis-加入服务" aria-hidden="true">#</a> 4. 将 Redis 加入服务</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /lib/systemd/system/redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=redis
After=network.target

[Service]
ExecStart=/usr/local/redis/src/redis-server /usr/local/redis/redis.conf
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 刷新服务配置
systemctl daemon-reload

# 开机自启动
systemctl enable redis

# 启动
systemctl start redis

# 停止
systemctl stop redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-登录-redis" tabindex="-1"><a class="header-anchor" href="#_5-登录-redis" aria-hidden="true">#</a> 5. 登录 redis</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/local/bin/redis-cli
# 或
/usr/local/bin/redis-cli -h 127.0.0.1 -p 6379

# 输入密码
auth 521666
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[a];function r(c,v){return i(),s("div",null,l)}const u=e(n,[["render",r],["__file","Redisyuanmaanzhuang.html.vue"]]);export{u as default};
