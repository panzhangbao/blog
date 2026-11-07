import{_ as n,o as a,c as e,a2 as p}from"./chunks/framework.EUByU7Iq.js";const o=JSON.parse('{"title":"Redis 性能测试","description":"","frontmatter":{"title":"Redis 性能测试","date":"2020-11-10T00:00:00.000Z","categories":["数据库","Redis"],"tags":["数据库","Redis"]},"headers":[],"relativePath":"blogs/Redis/Redisxingnenceshi.md","filePath":"blogs/Redis/Redis性能测试.md"}'),l={name:"blogs/Redis/Redisxingnenceshi.md"};function r(i,s,c,t,b,d){return a(),e("div",null,[...s[0]||(s[0]=[p(`<p>语法</p><p>redis 性能测试的基本命令如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>redis-benchmark [option] [option value]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>redis 性能测试工具可选参数如下所示：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>参数    |描述                                     |默认值</span></span>
<span class="line"><span>-------|-----------------------------------------|----------</span></span>
<span class="line"><span>-h     |指定服务器主机名                           |127.0.0.1</span></span>
<span class="line"><span>-p     |指定服务器端口                             |6379</span></span>
<span class="line"><span>-s     |指定服务器 socket                          |</span></span>
<span class="line"><span>-c     |指定并发连接数                             |50</span></span>
<span class="line"><span>-n     |指定请求数                                 |10000</span></span>
<span class="line"><span>-d     |以字节的形式指定 SET/GET 值的数据大小       |2</span></span>
<span class="line"><span>-k     |1=keep alive 0=reconnect                  |1</span></span>
<span class="line"><span>-r     |SET/GET/INCR 使用随机 key, SADD 使用随机值</span></span>
<span class="line"><span>-P     |通过管道传输 &lt;numreq&gt; 请求                 |1</span></span>
<span class="line"><span>-q     |强制退出 redis。仅显示 query/sec 值</span></span>
<span class="line"><span>--csv  |以 CSV 格式输出</span></span>
<span class="line"><span>-l     |生成循环，永久执行测试</span></span>
<span class="line"><span>-t     |仅运行以逗号分隔的测试命令列表。</span></span>
<span class="line"><span>-I     |Idle 模式。仅打开 N 个 idle 连接并等待。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>例子,以下实例同时执行 10000 个请求来检测性能：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span> redis-benchmark -n 100000</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span> PING_INLINE: 141043.72 requests per second</span></span>
<span class="line"><span> PING_BULK: 142857.14 requests per second</span></span>
<span class="line"><span> SET: 141442.72 requests per second</span></span>
<span class="line"><span> GET: 145348.83 requests per second</span></span>
<span class="line"><span> INCR: 137362.64 requests per second</span></span>
<span class="line"><span> LPUSH: 145348.83 requests per second</span></span>
<span class="line"><span> LPOP: 146198.83 requests per second</span></span>
<span class="line"><span> SADD: 146198.83 requests per second</span></span>
<span class="line"><span> SPOP: 149253.73 requests per second</span></span>
<span class="line"><span> LPUSH (needed to benchmark LRANGE): 148588.42 requests per second</span></span>
<span class="line"><span> LRANGE_100 (first 100 elements): 58411.21 requests per second</span></span>
<span class="line"><span> LRANGE_300 (first 300 elements): 21195.42 requests per second</span></span>
<span class="line"><span> LRANGE_500 (first 450 elements): 14539.11 requests per second</span></span>
<span class="line"><span> LRANGE_600 (first 600 elements): 10504.20 requests per second</span></span>
<span class="line"><span> MSET (10 keys): 93283.58 requests per second</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>以下实例我们使用了多个参数来测试 redis 性能：</p><p>redis-benchmark -h 127.0.0.1 -p 6379 -t set,lpush -n 100000 -q           SET: 146198.83 requests per second     LPUSH: 145560.41 requests per second</p><p>以上实例中主机为 127.0.0.1，端口号为 6379，执行的命令为 set,lpush，请求数为 10000，通过 -q 参数让结果只显示每秒执行的请求数。</p>`,10)])])}const m=n(l,[["render",r]]);export{o as __pageData,m as default};
