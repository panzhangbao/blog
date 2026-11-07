import{_ as n,o as a,c as e,a2 as p}from"./chunks/framework.EUByU7Iq.js";const o=JSON.parse('{"title":"Redis源码安装","description":"","frontmatter":{"title":"Redis源码安装","date":"2020-11-02T00:00:00.000Z","tags":["数据库","Redis"],"publish":false},"headers":[],"relativePath":"blogs/Redis/Redisyuanmaanzhuang.md","filePath":"blogs/Redis/Redis源码安装.md"}'),l={name:"blogs/Redis/Redisyuanmaanzhuang.md"};function i(r,s,c,t,d,b){return a(),e("div",null,[...s[0]||(s[0]=[p(`<p>Windows 安装很简单，这里不做赘述，下载地址如下：</p><blockquote><p>链接：<a href="https://pan.baidu.com/s/1AX9WtPazap3CVBdu4QcixA" target="_blank" rel="noreferrer">https://pan.baidu.com/s/1AX9WtPazap3CVBdu4QcixA</a></p><p>提取码：<code>5266</code></p></blockquote><h3 id="_1-源码安装-redis" tabindex="-1">1. 源码安装 Redis <a class="header-anchor" href="#_1-源码安装-redis" aria-label="Permalink to &quot;1. 源码安装 Redis&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum -y install gcc gcc-c++ libstdc++-devel \\</span></span>
<span class="line"><span>    centos-release-scl \\</span></span>
<span class="line"><span>    devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scl enable devtoolset-9 bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wget http://download.redis.io/releases/redis-stable.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span>tar -zxvf redis-stable.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span>mv redis-stable/ /usr/local/redis/ &amp;&amp; \\</span></span>
<span class="line"><span>cd /usr/local/redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 编译</span></span>
<span class="line"><span>make</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装到指定目录,默认在/usr/local/bin</span></span>
<span class="line"><span>make install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_2-src-目录下有编译好的redis指令" tabindex="-1">2. src/目录下有编译好的redis指令 <a class="header-anchor" href="#_2-src-目录下有编译好的redis指令" aria-label="Permalink to &quot;2. src/目录下有编译好的redis指令&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># redis可执行文件</span></span>
<span class="line"><span>./redis-benchmark     #用于进行redis性能测试的工具</span></span>
<span class="line"><span>./redis-check-dump   #用于修复出问题的dump.rdb文件</span></span>
<span class="line"><span>./redis-cli                   #redis的客户端</span></span>
<span class="line"><span>./redis-server             #redis的服务端</span></span>
<span class="line"><span>./redis-check-aof       #用于修复出问题的AOF文件</span></span>
<span class="line"><span>./redis-sentinel          #用于集群管理</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-redis-conf" tabindex="-1">3. redis.conf <a class="header-anchor" href="#_3-redis-conf" aria-label="Permalink to &quot;3. redis.conf&quot;">​</a></h3><p>redis.conf 现在默认配置挺好的，如非必要，不用定制化修改的。下面是简单的修改：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># bind 127.0.0.1 默认不注释，注释后，远程可以访问 redis</span></span>
<span class="line"><span>#bind 127.0.0.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># requirepass foobared 默认注释，没有密码，后面的foobared为密码</span></span>
<span class="line"><span>requirepass 521666</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-将-redis-加入服务" tabindex="-1">4. 将 Redis 加入服务 <a class="header-anchor" href="#_4-将-redis-加入服务" aria-label="Permalink to &quot;4. 将 Redis 加入服务&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vim /lib/systemd/system/redis.service</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=redis</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>ExecStart=/usr/local/redis/src/redis-server /usr/local/redis/redis.conf</span></span>
<span class="line"><span>ExecReload=/bin/kill -s HUP $MAINPID</span></span>
<span class="line"><span>ExecStop=/bin/kill -s QUIT $MAINPID</span></span>
<span class="line"><span>PrivateTmp=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 刷新服务配置</span></span>
<span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开机自启动</span></span>
<span class="line"><span>systemctl enable redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动</span></span>
<span class="line"><span>systemctl start redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止</span></span>
<span class="line"><span>systemctl stop redis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_5-登录-redis" tabindex="-1">5. 登录 redis <a class="header-anchor" href="#_5-登录-redis" aria-label="Permalink to &quot;5. 登录 redis&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/usr/local/bin/redis-cli</span></span>
<span class="line"><span># 或</span></span>
<span class="line"><span>/usr/local/bin/redis-cli -h 127.0.0.1 -p 6379</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输入密码</span></span>
<span class="line"><span>auth 521666</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,15)])])}const m=n(l,[["render",i]]);export{o as __pageData,m as default};
