<!-- src/components/Header.vue -->

<template>
  <header class="header">
    <div class="header-container">
      <img class="logo" src="../images/f8041d2cbf13399592077834bc083483.png" alt="Logo" />
      <div class="search-box">
        <input type="text" placeholder="请输入搜索关键词" />
        <img src="../images/4c1360ec6cb043bb5fcd6ff4f5faf82b.png" alt="Search" />
      </div>
      <div class="header-actions">
        <div class="header-action">
          <img src="../images/c0a51bcf32621e352243a0d7f22b176c.png" alt="Help" />
          <span>帮助</span>
        </div>
        <div class="header-action">
          <img src="../images/e8eaae0dfcb172501d4660c699e24765.png" alt="Login" />
          <span>登录</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
