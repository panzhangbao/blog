import{_ as e,o as a,c as n,d as i}from"./app-JQ9X4zlU.js";const d={},s=i(`<h1 id="jdk1-8-安装" tabindex="-1"><a class="header-anchor" href="#jdk1-8-安装" aria-hidden="true">#</a> JDK1.8 安装</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://prod-read.oss-cn-shanghai.aliyuncs.com/softwares/jdk-8u261-linux-x64.tar.gz &amp;&amp; \\
tar -zxvf jdk-8u261-linux-x64.tar.gz &amp;&amp; \\
sudo mv jdk1.8.0_261/ /usr/local/java/ &amp;&amp; \\
sudo chmod -R 777 /etc/profile &amp;&amp; \\
vim /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Java 配置
export JAVA_HOME=/usr/local/java
export JRE_HOME=\${JAVA_HOME}/jre
export CLASSPATH=.:\${JAVA_HOME}/lib:\${JRE_HOME}/lib
export PATH=$PATH:\${JAVA_HOME}/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source /etc/profile &amp;&amp; \\
sudo chmod -R 644 /etc/profile &amp;&amp; \\
java -version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="maven-安装" tabindex="-1"><a class="header-anchor" href="#maven-安装" aria-hidden="true">#</a> maven 安装</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz &amp;&amp; \\
tar -zxvf apache-maven-3.6.3-bin.tar.gz &amp;&amp; \\
sudo mv apache-maven-3.6.3 /usr/local/maven/ &amp;&amp; \\
sudo chmod -R 777 /etc/profile &amp;&amp; \\
vim /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Maven 配置
export M2_HOME=/usr/local/maven
export PATH=$PATH:$M2_HOME/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source /etc/profile &amp;&amp; \\
sudo chmod -R 644 /etc/profile &amp;&amp; \\
sudo chmod -R 666 /usr/local/maven/conf/settings.xml &amp;&amp; \\
vi /usr/local/maven/conf/settings.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;!--阿里云镜像仓库 --&gt;
    &lt;mirror&gt;
        &lt;id&gt;nexus-aliyun&lt;/id&gt;
        &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
        &lt;name&gt;Nexus aliyun&lt;/name&gt;
        &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public&lt;/url&gt;
    &lt;/mirror&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 打包
mvn clean package -Dmaven.test.skip=true -B -e -U
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[s];function t(r,c){return a(),n("div",null,l)}const m=e(d,[["render",t],["__file","Javaanzhuang.html.vue"]]);export{m as default};
