import{_ as e,o as i,c as a,d}from"./app-JQ9X4zlU.js";const n={},t=d(`<h3 id="类注释" tabindex="-1"><a class="header-anchor" href="#类注释" aria-hidden="true">#</a> 类注释</h3><p><code>Settings</code> --&gt; <code>Editot</code> --&gt; <code>File and Code Templates</code> --&gt; <code>Class</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 
 *
 * @author JasonPan
 * @date \${YEAR}/\${MONTH}/\${DAY}
 * Copyright © \${YEAR} JasonPan. All rights reserved.
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法注释" tabindex="-1"><a class="header-anchor" href="#方法注释" aria-hidden="true">#</a> 方法注释</h3><ul><li><code>Settings</code> --&gt; <code>Editot</code> --&gt; <code>File and Code Template</code> --&gt; <code>Live Templates</code></li><li>--&gt; 新增<code>2.Template Group</code>，随便命名 --&gt; 新增<code>1.Live Template</code>，随便命名</li><li>快捷键为<code>*</code>，描述为<code>快捷方法注释</code>，有效范围，点下面的<code>Define</code> 或 <code>Change</code>，<code>Java</code>打勾</li><li>具体注释为</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*
 * 
 * 
$params$
 * @return $return$
 * @author JasonPan
 * @date $date$
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/panzhangbao/blog/master/2020102001.png" alt=""></p><ul><li><p>生效方式为 <code>Enter</code><img src="https://raw.githubusercontent.com/panzhangbao/blog/master/2020102002.png" alt=""></p></li><li><p>点击 <code>Edit variables</code>，具体配置如图所示： <img src="https://raw.githubusercontent.com/panzhangbao/blog/master/2020102003.png" alt=""></p></li><li><p><code>params</code> 默认值为</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>groovyScript(&quot;def result=&#39;&#39;; def params=\\&quot;\${_1}\\&quot;.replaceAll(&#39;[\\\\\\\\[|\\\\\\\\]|\\\\\\\\s]&#39;, &#39;&#39;).split(&#39;,&#39;).toList(); for(i = 0; i &lt; params.size(); i++) {result+=&#39; * @param &#39; + params[i] + ((i &lt; params.size() - 1) ? &#39;\\\\n&#39;:&#39;&#39;)}; return result&quot;, methodParameters())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>点击 OK 保存</li><li>在方法上输入<code>/**</code>，点击 <code>Enter</code>键 即可</li></ul>`,10),s=[t];function l(c,r){return i(),a("div",null,s)}const u=e(n,[["render",l],["__file","IDEAleizhushihefangfazhushi.html.vue"]]);export{u as default};
