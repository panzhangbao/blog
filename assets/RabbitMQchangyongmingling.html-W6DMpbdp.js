import{_ as a,r as s,o as d,c as l,a as e,b as i,e as t,d as r}from"./app-JQ9X4zlU.js";const c={},m=r(`<h3 id="服务启动-关闭" tabindex="-1"><a class="header-anchor" href="#服务启动-关闭" aria-hidden="true">#</a> 服务启动/关闭</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动 rabbitmq 服务
systemctl start rabbitmq-server

# 停止 rabbitmq 服务
systemctl stop rabbitmq-server

# 开机启动 rabbitmq 服务
systemctl enable rabbitmq-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件管理" tabindex="-1"><a class="header-anchor" href="#插件管理" aria-hidden="true">#</a> 插件管理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看已安装的插件
rabbitmq-plugins list

# 启动管理服务
rabbitmq-plugins enable rabbitmq_management

# 停止管理服务
rabbitmq-plugins disable rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="virtual-host-管理" tabindex="-1"><a class="header-anchor" href="#virtual-host-管理" aria-hidden="true">#</a> virtual_host 管理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 新建virtual_host:
rabbitmqctladd_vhost  xxx

# 撤销virtual_host
rabbitmqctl  delete_vhost xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看所有用户
rabbitmqctl list_users

# 新建用户
rabbitmqctl add_user admin 521666

# 删除用户
rabbitmqctl delete_user admin

# 更改密码
rabbimqctlchange_password admin 666666
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="角色-权限" tabindex="-1"><a class="header-anchor" href="#角色-权限" aria-hidden="true">#</a> 角色/权限</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 权限设置：set_permissions [-pvhostpath] {user} {conf} {write} {read}

# 查看所有用户权限
rabbitmqctl list_permissions -p /

# 赋予角色  Tag可以为 administrator,monitoring, management
rabbitmqctl set_user_tags admin administrator

# 设置用户权限
rabbitmqctl set_permissions -p / admin &quot;.&quot; &quot;.&quot; &quot;.*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取服务器状态信息" tabindex="-1"><a class="header-anchor" href="#获取服务器状态信息" aria-hidden="true">#</a> 获取服务器状态信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>服务器状态：rabbitmqctl status
       队列信息：rabbitmqctl list_queues[-p vhostpath] [queueinfoitem ...]
                Queueinfoitem可以为：name，durable，auto_delete，arguments，messages_ready，
                messages_unacknowledged，messages，consumers，memory

       Exchange信息：rabbitmqctllist_exchanges[-p vhostpath] [exchangeinfoitem ...]
                 Exchangeinfoitem有：name，type，durable，auto_delete，internal，arguments.

       Binding信息：rabbitmqctllist_bindings[-p vhostpath] [bindinginfoitem ...]       
                 Bindinginfoitem有：source_name，source_kind，destination_name，destination_kind，routing_key，arguments

       Connection信息：rabbitmqctllist_connections [connectioninfoitem ...]

       Connectioninfoitem有：recv_oct，recv_cnt，send_oct，send_cnt，send_pend等。

       Channel信息：rabbitmqctl  list_channels[channelinfoitem ...]

      Channelinfoitem有consumer_count，messages_unacknowledged，messages_uncommitted，acks_uncommitted，messages_unconfirmed，prefetch_count，client_flow_blocked
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查询所有队列信息
rabbitmqctl list_queues

# 清除所有队列
rabbitmqctl reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>`,15),v={href:"https://blog.csdn.net/qq_28513801/article/details/90641238",target:"_blank",rel:"noopener noreferrer"};function u(b,o){const n=s("ExternalLinkIcon");return d(),l("div",null,[m,e("ul",null,[e("li",null,[i("抛物线的博客："),e("a",v,[i("rabbitmq基本原理以及常用命令rabbitmqctl"),t(n)])])])])}const g=a(c,[["render",u],["__file","RabbitMQchangyongmingling.html.vue"]]);export{g as default};
