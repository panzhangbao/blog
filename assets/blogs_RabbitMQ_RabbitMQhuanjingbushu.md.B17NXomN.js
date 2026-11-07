import{_ as a,o as n,c as p,a2 as e}from"./chunks/framework.EUByU7Iq.js";const o=JSON.parse('{"title":"RabbitMQ 环境部署","description":"","frontmatter":{"title":"RabbitMQ 环境部署","date":"2020-11-19T00:00:00.000Z","categories":["MQ","RabbitMQ"],"tags":["MQ","RabbitMQ"]},"headers":[],"relativePath":"blogs/RabbitMQ/RabbitMQhuanjingbushu.md","filePath":"blogs/RabbitMQ/RabbitMQ环境部署.md"}'),l={name:"blogs/RabbitMQ/RabbitMQhuanjingbushu.md"};function i(r,s,b,t,c,m){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h3 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-label="Permalink to &quot;CentOS&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum -y install rabbitmq-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看已安装的插件</span></span>
<span class="line"><span>rabbitmq-plugins list</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动管理服务</span></span>
<span class="line"><span>rabbitmq-plugins enable rabbitmq_management</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 支持 mqtt，需要开启 1883 端口</span></span>
<span class="line"><span>rabbitmq-plugins enable rabbitmq_mqtt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动 rabbitmq 服务</span></span>
<span class="line"><span>systemctl start rabbitmq-server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>网页登录 访问网站：<a href="http://ip:15672" target="_blank" rel="noreferrer">http://ip:15672</a></p><p>用户密码：guest</p><hr><p>RabbitMQ相关命令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 启动</span></span>
<span class="line"><span>systemctl restart rabbitmq-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止</span></span>
<span class="line"><span>systemctl stop rabbitmq-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建用户密码</span></span>
<span class="line"><span>rabbitmqctl add_user admin 521666</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 赋予角色  Tag可以为 administrator,monitoring, management</span></span>
<span class="line"><span>rabbitmqctl set_user_tags admin administrator</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看所有用户</span></span>
<span class="line"><span>rabbitmqctl list_users</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看所有用户权限</span></span>
<span class="line"><span>rabbitmqctl list_permissions -p /</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置用户权限</span></span>
<span class="line"><span>rabbitmqctl set_permissions -p / admin &quot;.&quot; &quot;.&quot; &quot;.*&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><hr><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><h5 id="安装-erlang-环境" tabindex="-1">安装 <code>Erlang</code> 环境 <a class="header-anchor" href="#安装-erlang-环境" aria-label="Permalink to &quot;安装 \`\`\`Erlang\`\`\` 环境&quot;">​</a></h5><p>下载：<code>http://erlang.org/download/otp_win64_23.0.exe</code></p><p>添加环境变量：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ERLANG_HOME=C:\\ProgramFiles\\erl-23.0</span></span>
<span class="line"><span>PATH=%ERLANG_HOME%\\bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="安装-rabbitmq" tabindex="-1">安装 <code>RabbitMQ</code> <a class="header-anchor" href="#安装-rabbitmq" aria-label="Permalink to &quot;安装 \`\`\`RabbitMQ\`\`\`&quot;">​</a></h5><p>下载地址：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.8.5/rabbitmq-server-3.8.5.exe</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加环境变量：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>RABBITMQ_SERVER=C:\\ProgramFiles\\RabbitMQ\\rabbitmq_server-3.8.5</span></span>
<span class="line"><span>PATH=%RABBITMQ_SERVER%\\sbin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h5><p>rabbitmq用户角色可分为五类：超级管理员, 监控者, 策略制定者, 普通管理者以及其他。</p><ul><li>超级管理员(administrator)：可登陆管理控制台(启用management plugin的情况下)，可查看所有的信息，并且可以对用户，策略(policy)进行操作。</li><li>监控者(monitoring)：可登陆管理控制台(启用management plugin的情况下)，同时可以查看rabbitmq节点的相关信息(进程数，内存使用情况，磁盘使用情况等)</li><li>策略制定者(policymaker)：可登陆管理控制台(启用management plugin的情况下), 同时可以对policy进行管理。</li><li>普通管理者(management)：仅可登陆管理控制台(启用management plugin的情况下)，无法看到节点信息，也无法对策略进行管理。</li><li>其他的：无法登陆管理控制台，通常就是普通的生产者和消费者。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 激活RabbitMQ管理插件</span></span>
<span class="line"><span>rabbitmq-plugins.bat  enable  rabbitmq_management</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装完成之后以管理员身份启动 rabbitmq-service.bat</span></span>
<span class="line"><span>rabbitmq-service.bat stop</span></span>
<span class="line"><span>rabbitmq-service.bat install</span></span>
<span class="line"><span>rabbitmq-service.bat start</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 新增 pan 用户</span></span>
<span class="line"><span>rabbitmqctl.bat add_user pan 666666</span></span>
<span class="line"><span></span></span>
<span class="line"><span># rabbitmq用户角色可分为五类：超级管理员, 监控者, 策略制定者, 普通管理者以及其他</span></span>
<span class="line"><span># 超级管理员(administrator)：可登陆管理控制台(启用management plugin的情况下)，可查看所有的信息，并且可以对用户，策略(policy)进行操作</span></span>
<span class="line"><span># </span></span>
<span class="line"><span># 赋予 pan 用户超级管理员权限</span></span>
<span class="line"><span>rabbitmqctl.bat set_user_tags pan administrator</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 同时赋予多个角色</span></span>
<span class="line"><span># rabbitmqctl.bat  set_user_tags  pan administrator  monitoring policymaker management</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 修改密码</span></span>
<span class="line"><span>rabbitmqctl.bat change_password pan 555555</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 删除用户</span></span>
<span class="line"><span>rabbitmqctl.bat delete_user pan</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>使用浏览器打开 <a href="http://localhost:15672" target="_blank" rel="noreferrer">http://localhost:15672</a> 访问Rabbit Mq的管理控制台</p><hr>`,24)])])}const d=a(l,[["render",i]]);export{o as __pageData,d as default};
