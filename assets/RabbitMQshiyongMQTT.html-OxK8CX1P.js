import{_ as e,o as t,c as s,d as i}from"./app-JQ9X4zlU.js";const n={},a=i(`<h3 id="安装-mqtt" tabindex="-1"><a class="header-anchor" href="#安装-mqtt" aria-hidden="true">#</a> 安装 MQTT</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 支持 mqtt，需要开启 1883 端口
rabbitmq-plugins enable rabbitmq_mqtt

# 重启 rabbitmq 服务
systemctl restart rabbitmq-server

# 添加一个用户名和密码都是 &quot;mqtt-test&quot;的用户
rabbitmqctl add_user mqtt-test mqtt-test

# 设置用户 mqtt-test对虚拟主机（/）具有配置，写，读的权限。用户标记为管理者
rabbitmqctl set_permissions -p / mqtt-test &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;
rabbitmqctl set_user_tags mqtt-test management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装可视化工具-mqttbox" tabindex="-1"><a class="header-anchor" href="#安装可视化工具-mqttbox" aria-hidden="true">#</a> 安装可视化工具 MQTTBOX</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl https://s3-us-west-2.amazonaws.com/workswithweb/mqttbox/latest/windows/MQTTBox-win.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),d=[a];function r(l,m){return t(),s("div",null,d)}const o=e(n,[["render",r],["__file","RabbitMQshiyongMQTT.html.vue"]]);export{o as default};
