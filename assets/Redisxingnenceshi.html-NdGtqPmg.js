import{_ as e,o as s,c as n,d as i}from"./app-JQ9X4zlU.js";const d={},r=i(`<p>语法</p><p>redis 性能测试的基本命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-benchmark [option] [option value]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>redis 性能测试工具可选参数如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>参数    |描述                                     |默认值
-------|-----------------------------------------|----------
-h     |指定服务器主机名                           |127.0.0.1
-p     |指定服务器端口                             |6379
-s     |指定服务器 socket                          |
-c     |指定并发连接数                             |50
-n     |指定请求数                                 |10000
-d     |以字节的形式指定 SET/GET 值的数据大小       |2
-k     |1=keep alive 0=reconnect                  |1
-r     |SET/GET/INCR 使用随机 key, SADD 使用随机值
-P     |通过管道传输 &lt;numreq&gt; 请求                 |1
-q     |强制退出 redis。仅显示 query/sec 值
--csv  |以 CSV 格式输出
-l     |生成循环，永久执行测试
-t     |仅运行以逗号分隔的测试命令列表。
-I     |Idle 模式。仅打开 N 个 idle 连接并等待。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子,以下实例同时执行 10000 个请求来检测性能：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
 redis-benchmark -n 100000
  
 PING_INLINE: 141043.72 requests per second
 PING_BULK: 142857.14 requests per second
 SET: 141442.72 requests per second
 GET: 145348.83 requests per second
 INCR: 137362.64 requests per second
 LPUSH: 145348.83 requests per second
 LPOP: 146198.83 requests per second
 SADD: 146198.83 requests per second
 SPOP: 149253.73 requests per second
 LPUSH (needed to benchmark LRANGE): 148588.42 requests per second
 LRANGE_100 (first 100 elements): 58411.21 requests per second
 LRANGE_300 (first 300 elements): 21195.42 requests per second
 LRANGE_500 (first 450 elements): 14539.11 requests per second
 LRANGE_600 (first 600 elements): 10504.20 requests per second
 MSET (10 keys): 93283.58 requests per second
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下实例我们使用了多个参数来测试 redis 性能：</p><p>redis-benchmark -h 127.0.0.1 -p 6379 -t set,lpush -n 100000 -q           SET: 146198.83 requests per second     LPUSH: 145560.41 requests per second</p><p>以上实例中主机为 127.0.0.1，端口号为 6379，执行的命令为 set,lpush，请求数为 10000，通过 -q 参数让结果只显示每秒执行的请求数。</p>`,10),l=[r];function c(v,a){return s(),n("div",null,l)}const u=e(d,[["render",c],["__file","Redisxingnenceshi.html.vue"]]);export{u as default};
