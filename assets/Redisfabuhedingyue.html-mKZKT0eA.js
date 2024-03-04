import{_ as e,o as n,c as i,d as s}from"./app-JQ9X4zlU.js";const l={},a=s(`<ul><li><p>Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。</p></li><li><p>Redis 客户端可以订阅任意数量的频道。</p></li></ul><p>下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系： 当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端： pubsub2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*******************  主要会用下面 3 个  ****************/
subscribe channel [channer2]    // 订阅给定的一个或多个频道的信息。

unsubscribe channel [channel2]    // 取消订阅给定的一个或多个频道的信息。

publish channel message         // 将信息发送到指定的频道

/***************/

psubscribe pattern [pattern]    // 订阅一个或多个符合给定模式的频道

punsubscribe pattern [pattern]    // 退订一个或多个符合给定模式的频道

pubsub subcommand [argument [argument...]] // 查看订阅与发布系统状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[a];function c(u,r){return n(),i("div",null,d)}const b=e(l,[["render",c],["__file","Redisfabuhedingyue.html.vue"]]);export{b as default};
