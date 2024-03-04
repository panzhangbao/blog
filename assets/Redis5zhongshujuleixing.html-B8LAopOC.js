import{_ as e,o as n,c as i,d}from"./app-JQ9X4zlU.js";const s={},l=d(`<blockquote><p>Redis支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)。</p></blockquote><h3 id="_1-string-字符串" tabindex="-1"><a class="header-anchor" href="#_1-string-字符串" aria-hidden="true">#</a> 1. String（字符串）</h3><ul><li><p>string是redis最基本的类型，你可以理解成与Memcached一模一样的类型，一个key对应一个value。</p></li><li><p>string类型是二进制安全的。意思是redis的string可以包含任何数据。比如jpg图片或者序列化的对象 。</p></li><li><p>string类型是Redis最基本的数据类型，一个键最大能存储512MB。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/************  set  ******************/
set name pan            // 设置 k/v
setex name 66 ming      // 设置 k/v 66s 过期
setnx name pan          // 当 k/v 都不存在时设置 k/v
mset name1 1 name2 2    // 设置多个 k/v
psetex name 66 pan      // 设置 k/v 66ms 过期
msetnx name1 1 name2 2  // 当 k/v 都不存在时设置多个 k/v
setbit name 6           // 对 name，设置或清除指定偏移量 6 上的位(bit)
setrange name 3 niuniu       // 从下标 3 开始复写 串

/**********  数字型  ******************/
incr age                // 将 age 数字值 +1，如果为非数字型，则直接为 1
incrby age 66           // 将 age + 66
incrbyfloat age 20      // 将 age 转为 float 并 +20，非 float 型直接赋值为 20
decr age                // age -1
decrby age 10             // age -10

/*************  get  ***************/
get name                // 获取 k
getrange name 0 1       // 获取 k （0~1）
getset name li          // 设置 k newV，返回 oldV
mget name name2         // 获取多个 k
strlen name             // 返回 串长
getbit name 6           // 对 name，获取指定偏移量 6 上的位(bit)

/************  del  **************/
del name                // 删除 k
del name1 name2         // 删除多个 k

append name zhangbao    // 追加字符串 name 后缀
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-hash-哈希" tabindex="-1"><a class="header-anchor" href="#_2-hash-哈希" aria-hidden="true">#</a> 2. Hash（哈希）</h3><ul><li><p>Redis hash 是一个键值对集合。</p></li><li><p>Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/***************  set  *******************/
hset user uname pan         // 单 field 设置

hsetnx user uname haha      // 若存在 k、f ，则 set

hmset user username pan password 123456 points 200   // 设置 user 里面有 field(username, password, points)

hincrby user age 10         // 为 field 添加 增量

hincrbyfloat user score 40.3 // 为 field 添加 float 增量

hexists user uname          // 查看 k 中 指定 的 field 是否存在

/*********************  get  ***************/
hget user username          // 获取 field(username)

hgetall user                // 获取所有 field

hmget user uname age        // 获取 指定几个 field v

hkeys user                  // 获取所有的 key 字段

hvals user

hlen user                   // length

// HSCAN key cursor [MATCH pattern] [COUNT count] 迭代哈希表中的键值对。
scan 2 match *e* count 4    // 从 返回游标为 2 处 匹配 *e* ，返回个数为 4

/***********************  del  ******************/
hdel user username          // 删除 field(username)
hdel user password points   // 删除多个 field
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-list-列表" tabindex="-1"><a class="header-anchor" href="#_3-list-列表" aria-hidden="true">#</a> 3. List（列表）</h3><ul><li><p>Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素导列表的头部（左边）或者尾部（右边）。</p></li><li><p>列表最多可存储 232 - 1 元素 (4294967295, 每个列表可存储40多亿)。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**************  push  *********************/
lpush/rpush uname pan // uname 标记名，pan 下标值

lpush uname kong liu wang

linsert uname before/after wo pan // 在 wo 之前/后 插入 pan

lset uname 2 zhaozilong         // 在下标为2 的位置插入元素 zhaozilong

lpushx/rpushx uname pan        // 为已存在的列表添加值

/************** get  *************/
lrange uname 0 2 // 输出 下标 0 ~ 2 的元素值
lindex uname 1  // 通过索引获取列表中的元素
llen key        // length

/*************  del  *****************/
lpop uname
rpop uname          // 移除并获取最后一个元素
lrem uname 2 pan    // 删除 key 为 uname 值为 pan 的 2 个元素值（顺序查找）
blpop uname age 10      // 移除并获取列表中的第一个元素，如果列表没有元素会阻塞列表直到等待超时(10s)或发现可弹出元素为止。

brpop uname age 10      // 移出并获取列表的最后一个元素

rpoplpush uname uname2      // 移除列表的最后一个元素，并将该元素添加到另一个列表并返回
brpoplpush uname uname2 10  // 从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止

ltrim uname 1 3     // 截取下标 1 ~ 3 的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-set-集合" tabindex="-1"><a class="header-anchor" href="#_4-set-集合" aria-hidden="true">#</a> 4. Set（集合）</h3><ul><li><p>Redis的Set是string类型的无序集合。</p></li><li><p>集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
sadd uname a b c d a    // 向 set 插入 一个或多个 member

/*************  return  *********************/
scard uname             // return member&#39;s count
smembers key
srandmember key [count] // 返回集合中一个或多个随机数

// 差集
sdiff uname age         // return all set&#39;s 差集
sdiffstore storename uname age  // 将 差集存储在 storename set 中

// 交集
sinter uname username   // set 交集
sinterstore user uname username // set 交集存在 user 中

// 并集
sunion key1 [key2] // 并集
sunionstore destination key1 [key2]

/**************  del  *****************/
spop key        // 移除并返回集合中的一个随机元素

srem key member1 [member2] 

/////////////////////////////
sismember uname li      // 判断 li 是否为 uname set 的 member

smove source destination member

sscan cursor [MATCH pattern] [COUNT count]  // 迭代集合中的元素
sscan uname 2 match *a* count 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-zset-sorted-set-有序集合" tabindex="-1"><a class="header-anchor" href="#_5-zset-sorted-set-有序集合" aria-hidden="true">#</a> 5. zset(sorted set：有序集合)</h3><ul><li><p>Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。</p></li><li><p>不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。</p></li><li><p>zset的成员是唯一的,但分数(score)却可以重复。</p></li></ul><table><thead><tr><th>序号</th><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>1</td><td>ZADD key score1 member1 [score2 member2]</td><td>向有序集合添加一个或多个成员，或者更新已存在成员的分数</td></tr><tr><td>2</td><td>ZCARD key</td><td>获取有序集合的成员数</td></tr><tr><td>3</td><td>ZCOUNT key min max</td><td>计算在有序集合中指定区间分数的成员数</td></tr><tr><td>4</td><td>ZINCRBY key increment member</td><td>有序集合中对指定成员的分数加上增量 increment</td></tr><tr><td>5</td><td>ZINTERSTORE destination numkeys key [key ...]</td><td>计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中</td></tr><tr><td>6</td><td>ZLEXCOUNT key min max</td><td>在有序集合中计算指定字典区间内成员数量</td></tr><tr><td>7</td><td>ZRANGE key start stop [WITHSCORES]</td><td>通过索引区间返回有序集合成指定区间内的成员</td></tr><tr><td>8</td><td>ZRANGEBYLEX key min max [LIMIT offset count]</td><td>通过字典区间返回有序集合的成员</td></tr><tr><td>9</td><td>ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT]</td><td>通过分数返回有序集合指定区间内的成员</td></tr><tr><td>10</td><td>ZRANK key member</td><td>返回有序集合中指定成员的索引</td></tr><tr><td>11</td><td>ZREM key member [member ...]</td><td>移除有序集合中的一个或多个成员</td></tr><tr><td>12</td><td>ZREMRANGEBYLEX key min max</td><td>移除有序集合中给定的字典区间的所有成员</td></tr><tr><td>13</td><td>ZREMRANGEBYRANK key start stop</td><td>移除有序集合中给定的排名区间的所有成员</td></tr><tr><td>14</td><td>ZREMRANGEBYSCORE key min max</td><td>移除有序集合中给定的分数区间的所有成员</td></tr><tr><td>15</td><td>ZREVRANGE key start stop [WITHSCORES]</td><td>返回有序集中指定区间内的成员，通过索引，分数从高到底</td></tr><tr><td>16</td><td>ZREVRANGEBYSCORE key max min [WITHSCORES]</td><td>返回有序集中指定分数区间内的成员，分数从高到低排序</td></tr><tr><td>17</td><td>ZREVRANK key member</td><td>返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序</td></tr><tr><td>18</td><td>ZSCORE key member</td><td>返回有序集中，成员的分数值</td></tr><tr><td>19</td><td>ZUNIONSTORE destination numkeys key [key ...]</td><td>计算给定的一个或多个有序集的并集，并存储在新的 key 中</td></tr><tr><td>20</td><td>ZSCAN key cursor [MATCH pattern] [COUNT count]</td><td>迭代有序集合中的元素（包括元素成员和元素分值）</td></tr></tbody></table>`,16),a=[l];function t(r,v){return n(),i("div",null,a)}const u=e(s,[["render",t],["__file","Redis5zhongshujuleixing.html.vue"]]);export{u as default};
