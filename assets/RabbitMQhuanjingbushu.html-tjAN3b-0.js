import{_ as i,o as e,c as n,d as a}from"./app-JQ9X4zlU.js";const s={},d=a(`<h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> CentOS</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install rabbitmq-server

# 查看已安装的插件
rabbitmq-plugins list

# 启动管理服务
rabbitmq-plugins enable rabbitmq_management

# 支持 mqtt，需要开启 1883 端口
rabbitmq-plugins enable rabbitmq_mqtt

# 启动 rabbitmq 服务
systemctl start rabbitmq-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网页登录 访问网站：http://ip:15672</p><p>用户密码：guest</p><hr><p>RabbitMQ相关命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动
systemctl restart rabbitmq-server

# 停止
systemctl stop rabbitmq-server

# 创建用户密码
rabbitmqctl add_user admin 521666

# 赋予角色  Tag可以为 administrator,monitoring, management
rabbitmqctl set_user_tags admin administrator

# 查看所有用户
rabbitmqctl list_users

# 查看所有用户权限
rabbitmqctl list_permissions -p /

# 设置用户权限
rabbitmqctl set_permissions -p / admin &quot;.&quot; &quot;.&quot; &quot;.*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><h5 id="安装-erlang-环境" tabindex="-1"><a class="header-anchor" href="#安装-erlang-环境" aria-hidden="true">#</a> 安装 <code>Erlang</code> 环境</h5><p>下载：<code>http://erlang.org/download/otp_win64_23.0.exe</code></p><p>添加环境变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ERLANG_HOME=C:\\ProgramFiles\\erl-23.0
PATH=%ERLANG_HOME%\\bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="安装-rabbitmq" tabindex="-1"><a class="header-anchor" href="#安装-rabbitmq" aria-hidden="true">#</a> 安装 <code>RabbitMQ</code></h5><p>下载地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.8.5/rabbitmq-server-3.8.5.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加环境变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RABBITMQ_SERVER=C:\\ProgramFiles\\RabbitMQ\\rabbitmq_server-3.8.5
PATH=%RABBITMQ_SERVER%\\sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h5><p>rabbitmq用户角色可分为五类：超级管理员, 监控者, 策略制定者, 普通管理者以及其他。</p><ul><li>超级管理员(administrator)：可登陆管理控制台(启用management plugin的情况下)，可查看所有的信息，并且可以对用户，策略(policy)进行操作。</li><li>监控者(monitoring)：可登陆管理控制台(启用management plugin的情况下)，同时可以查看rabbitmq节点的相关信息(进程数，内存使用情况，磁盘使用情况等)</li><li>策略制定者(policymaker)：可登陆管理控制台(启用management plugin的情况下), 同时可以对policy进行管理。</li><li>普通管理者(management)：仅可登陆管理控制台(启用management plugin的情况下)，无法看到节点信息，也无法对策略进行管理。</li><li>其他的：无法登陆管理控制台，通常就是普通的生产者和消费者。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 激活RabbitMQ管理插件
rabbitmq-plugins.bat  enable  rabbitmq_management

# 安装完成之后以管理员身份启动 rabbitmq-service.bat
rabbitmq-service.bat stop
rabbitmq-service.bat install
rabbitmq-service.bat start

# 新增 pan 用户
rabbitmqctl.bat add_user pan 666666

# rabbitmq用户角色可分为五类：超级管理员, 监控者, 策略制定者, 普通管理者以及其他
# 超级管理员(administrator)：可登陆管理控制台(启用management plugin的情况下)，可查看所有的信息，并且可以对用户，策略(policy)进行操作
# 
# 赋予 pan 用户超级管理员权限
rabbitmqctl.bat set_user_tags pan administrator

# 同时赋予多个角色
# rabbitmqctl.bat  set_user_tags  pan administrator  monitoring policymaker management

# 修改密码
rabbitmqctl.bat change_password pan 555555

# 删除用户
rabbitmqctl.bat delete_user pan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用浏览器打开 http://localhost:15672 访问Rabbit Mq的管理控制台</p><hr>`,24),l=[d];function r(t,b){return e(),n("div",null,l)}const v=i(s,[["render",r],["__file","RabbitMQhuanjingbushu.html.vue"]]);export{v as default};
