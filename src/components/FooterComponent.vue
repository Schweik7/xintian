<template>
  <footer class="footer has-background-light">
    <div class="container">
      <div class="columns is-mobile">
        <!-- 导航 -->
        <div class="column">
          <p class="title is-6">导航</p>
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">心灵探索馆</a></li>
            <li><a href="#">心理研究室</a></li>
            <li><a href="#">心理蜕变驿站</a></li>
          </ul>
        </div>
        <!-- 社交媒体 -->
        <div class="column">
          <p class="title is-6">社交媒体</p>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Youtube</a></li>
          </ul>
        </div>
        <!-- 联系我们 -->
         <!-- TODO 添加icons -->
        <div class="column">
          <p class="title is-6">联系我们</p>
          <ul>
            <li>Email<a href="mailto:example@example.com" class="is-hidden-mobile">:example@example.com</a></li>
            <li>Phone<a class="is-hidden-mobile">:XXX-XXXX-XXXX</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content has-text-centered mt-5 ">
        <hr>
        <p class="">&#64; 2024 心田网站。专注于心理健康和个人成长。</p>
        <a class="has-text-grey-light" href="https://beian.miit.gov.cn/" target="_blank"
          rel="external nofollow">京ICP备2024070904号-1</a> · <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42018502002747" target="_blank"
          rel="external nofollow" class="has-text-grey-light">京公网安备42018502002747号</a>
        <br><a href="#" class="has-text-grey-light">心田举报入口</a> · <a class="has-text-grey-light" target="_blank"
          href="https://www.12377.cn/">网信办违法和不良信息举报中心</a> · <a target="_blank" class="has-text-grey-light"
          href="https://www.12377.cn/jbxzxq/64d38691937611ebb858c9da04cf59d3_web.html?spm=zm1033-001.0.0.1.SOXBdI&smallHarmType=64d38691937611ebb858c9da04cf59d3">涉历史虚无主义有害信息举报专区</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  padding: 2rem 1.5rem;
  background-color: rgb(236, 241, 209);
}

.columns .column {
  text-align: left;
}

.columns .column ul {
  list-style-type: none;
  padding-left: 0;
}

.columns .column ul li {
  margin-bottom: 0.5rem;
}

.columns .column ul li a {
  color: #363636;
  text-decoration: none;
}

.columns .column ul li a:hover {
  text-decoration: underline;
}

.content p {
  margin: 0.5rem 0;
  font-size: 0.875rem;
  color: #666666;
}

hr {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 1.5rem 0;
}
</style>
