import{_ as n,o as a,c as e,a2 as p}from"./chunks/framework.EUByU7Iq.js";const o=JSON.parse('{"title":"RabbitMQ 常用命令","description":"","frontmatter":{"title":"RabbitMQ 常用命令","date":"2020-11-19T00:00:00.000Z","categories":["MQ","RabbitMQ"],"tags":["MQ","RabbitMQ"]},"headers":[],"relativePath":"blogs/RabbitMQ/RabbitMQchangyongmingling.md","filePath":"blogs/RabbitMQ/RabbitMQ常用命令.md"}'),l={name:"blogs/RabbitMQ/RabbitMQchangyongmingling.md"};function i(r,s,t,b,c,m){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h3 id="服务启动-关闭" tabindex="-1">服务启动/关闭 <a class="header-anchor" href="#服务启动-关闭" aria-label="Permalink to &quot;服务启动/关闭&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 启动 rabbitmq 服务</span></span>
<span class="line"><span>systemctl start rabbitmq-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止 rabbitmq 服务</span></span>
<span class="line"><span>systemctl stop rabbitmq-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开机启动 rabbitmq 服务</span></span>
<span class="line"><span>systemctl enable rabbitmq-server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="插件管理" tabindex="-1">插件管理 <a class="header-anchor" href="#插件管理" aria-label="Permalink to &quot;插件管理&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看已安装的插件</span></span>
<span class="line"><span>rabbitmq-plugins list</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动管理服务</span></span>
<span class="line"><span>rabbitmq-plugins enable rabbitmq_management</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止管理服务</span></span>
<span class="line"><span>rabbitmq-plugins disable rabbitmq_management</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="virtual-host-管理" tabindex="-1">virtual_host 管理 <a class="header-anchor" href="#virtual-host-管理" aria-label="Permalink to &quot;virtual_host 管理&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 新建virtual_host:</span></span>
<span class="line"><span>rabbitmqctladd_vhost  xxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 撤销virtual_host</span></span>
<span class="line"><span>rabbitmqctl  delete_vhost xxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to &quot;用户管理&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看所有用户</span></span>
<span class="line"><span>rabbitmqctl list_users</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 新建用户</span></span>
<span class="line"><span>rabbitmqctl add_user admin 521666</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除用户</span></span>
<span class="line"><span>rabbitmqctl delete_user admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更改密码</span></span>
<span class="line"><span>rabbimqctlchange_password admin 666666</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="角色-权限" tabindex="-1">角色/权限 <a class="header-anchor" href="#角色-权限" aria-label="Permalink to &quot;角色/权限&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 权限设置：set_permissions [-pvhostpath] {user} {conf} {write} {read}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看所有用户权限</span></span>
<span class="line"><span>rabbitmqctl list_permissions -p /</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 赋予角色  Tag可以为 administrator,monitoring, management</span></span>
<span class="line"><span>rabbitmqctl set_user_tags admin administrator</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置用户权限</span></span>
<span class="line"><span>rabbitmqctl set_permissions -p / admin &quot;.&quot; &quot;.&quot; &quot;.*&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="获取服务器状态信息" tabindex="-1">获取服务器状态信息 <a class="header-anchor" href="#获取服务器状态信息" aria-label="Permalink to &quot;获取服务器状态信息&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>服务器状态：rabbitmqctl status</span></span>
<span class="line"><span>       队列信息：rabbitmqctl list_queues[-p vhostpath] [queueinfoitem ...]</span></span>
<span class="line"><span>                Queueinfoitem可以为：name，durable，auto_delete，arguments，messages_ready，</span></span>
<span class="line"><span>                messages_unacknowledged，messages，consumers，memory</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       Exchange信息：rabbitmqctllist_exchanges[-p vhostpath] [exchangeinfoitem ...]</span></span>
<span class="line"><span>                 Exchangeinfoitem有：name，type，durable，auto_delete，internal，arguments.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       Binding信息：rabbitmqctllist_bindings[-p vhostpath] [bindinginfoitem ...]       </span></span>
<span class="line"><span>                 Bindinginfoitem有：source_name，source_kind，destination_name，destination_kind，routing_key，arguments</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       Connection信息：rabbitmqctllist_connections [connectioninfoitem ...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       Connectioninfoitem有：recv_oct，recv_cnt，send_oct，send_cnt，send_pend等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       Channel信息：rabbitmqctl  list_channels[channelinfoitem ...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Channelinfoitem有consumer_count，messages_unacknowledged，messages_uncommitted，acks_uncommitted，messages_unconfirmed，prefetch_count，client_flow_blocked</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="队列" tabindex="-1">队列 <a class="header-anchor" href="#队列" aria-label="Permalink to &quot;队列&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查询所有队列信息</span></span>
<span class="line"><span>rabbitmqctl list_queues</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 清除所有队列</span></span>
<span class="line"><span>rabbitmqctl reset</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><ul><li>抛物线的博客：<a href="https://blog.csdn.net/qq_28513801/article/details/90641238" target="_blank" rel="noreferrer">rabbitmq基本原理以及常用命令rabbitmqctl</a></li></ul>`,16)])])}const d=n(l,[["render",i]]);export{o as __pageData,d as default};
