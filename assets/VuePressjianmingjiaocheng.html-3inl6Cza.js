import{_ as e,o as i,c as d,d as n}from"./app-JQ9X4zlU.js";const a={},s=n(`<h3 id="_1-github-建库" tabindex="-1"><a class="header-anchor" href="#_1-github-建库" aria-hidden="true">#</a> 1. github 建库</h3><p>github 上新建仓库 <code>MyBlog</code>，选 private，作为代码库</p><p>github 上新建仓库 <code>blog</code>，选 public，作为部署库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/panzhangbao/MyBlog.git &amp;&amp; \\
git clone https://github.com/panzhangbao/blog.git &amp;&amp; \\
cd MyBlog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-本地项目配置" tabindex="-1"><a class="header-anchor" href="#_2-本地项目配置" aria-hidden="true">#</a> 2. 本地项目配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add -D @vuepress-reco/theme-cli &amp;&amp; \\
theme-cli init
yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>yarn dev</code> 等待编译完成，就能看到本地运行的url地址，</p><p>打开 <code>http://localhost:8080/</code> 即可看到页面了</p><h3 id="_3-github-pages-部署" tabindex="-1"><a class="header-anchor" href="#_3-github-pages-部署" aria-hidden="true">#</a> 3. GitHub Pages 部署</h3><p>根目录 <code>.vuepress</code> 下的 <code>config.js</code> 文件中 <code>dest项</code> 修改为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;dest&#39;: &#39;../blog&#39;,
&#39;base&#39;: &#39;/blog/&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 <code>deploy.sh</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 确保脚本抛出遇到的错误
set -e

yarn build

cd ../blog

git init

git add .

git commit  -m &#39;deploy&#39;

git remote add origin git@github.com:panzhangbao/blog.git

git push --set-upstream origin master

cd ..

rm -rf blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add . &amp;&amp; \\
git commit -m &#39;deploy.sh&#39;
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>yarn deploy</code> 脚本，部署到 <code>blog</code> 仓库上去</p><p>github 上进入 <code>Settings --&gt; GitHub Pages --&gt; Source</code>，<code>Branch</code> 选择 <code>master</code> 分支，点击 <code>Save</code> 按钮，</p><p>打开 <code>https://panzhangbao.github.io/blog/</code> 链接即可看到部署的项目</p>`,17),l=[s];function c(t,r){return i(),d("div",null,l)}const u=e(a,[["render",c],["__file","VuePressjianmingjiaocheng.html.vue"]]);export{u as default};
