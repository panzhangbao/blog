import{_ as e,o as i,c as n,d as s}from"./app-JQ9X4zlU.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config get *            // 获取所有配置信息
config set loglevel &quot;notice&quot;    // 设置日志级别
config set requirepass &quot;密码&quot;   // 设置登录密码
config get requirepass          // 获取密码
auth 666666                   // 验证密码是否正确
config get parameter            // 获取指定配置参数的值
config set parameter value          // 修改 redis 配置参数，无需重启

/***************  服务器  *****************/
redis-cli -h host -p port -a password   // 远程连接 redis 数据库
time            // 返回服务器的时间
echo message                    // 打印字符串
ping                            // 查看服务是否运行
quit                            // 关闭当前连接
select index                    // 切换到指定的数据库


/****************  备份与恢复   ****************/
save            // 异步保存数据到硬盘
bgsave          // 后台备份
config get dir  // 如果需要恢复数据，只需将备份文件 (dump.rdb) 移动到 redis 安装目录并启动服务即可。获取 redis 目录可以使用 CONFIG 命令


/******************  客户端  ****************/
client list         // 返回连接到 redis 服务的客户端列表
client setname      // 设置当前连接的名称
client getname      // 获取通过 CLIENT SETNAME 命令设置的服务名称    
client pause        // 挂起客户端连接，指定挂起的时间以毫秒计
client kill         // 关闭客户端连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[d];function c(v,r){return i(),n("div",null,a)}const u=e(l,[["render",c],["__file","Redischangyongmingling.html.vue"]]);export{u as default};
