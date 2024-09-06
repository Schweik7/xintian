<template>
    <section class="section">
      <div class="container">
        <!-- 标题 -->
        <div class="content has-text-centered">
          <h1 class="title topics-title">友情链接</h1>
        </div>
  
        <!-- 栅格布局 -->
        <el-row :gutter="20">
          <!-- 专业机构 -->
          <el-col :span="8">
            <div class="link-card">
              <div class="link-card-content has-text-centered">
                <h2 class="link-title">专业机构</h2>
                <p>公益心理组织、协会、企业</p>
                <p>心理咨询中心</p>
                <p>心理研究机构</p>
              </div>
              <img src="@/images/专业机构.png" class="link-card-background" alt="Professional Background">
            </div>
          </el-col>
  
          <!-- 服务热线 -->
          <el-col :span="8">
            <div class="link-card link-card-pink  has-text-centered">
              <div class="link-card-content">
                <h2 class="link-title">服务热线</h2>
                <p>心理危机干预热线</p>
                <p>青少年热线</p>
                <p>家庭与婚姻热线</p>
                <p>心理咨询热线</p>
              </div>
              <img src="@/images/服务热线.png" class="link-card-background" alt="Service Background">
            </div>
          </el-col>
  
          <!-- 辅助工具 -->
          <el-col :span="8">
            <div class="link-card">
              <div class="link-card-content  has-text-centered">
                <h2 class="link-title">辅助工具</h2>
                <p>心理健康资源库</p>
                <p>冥想与放松工具</p>
                <p>情绪管理应用</p>
                <p>时间管理与规划工具</p>
              </div>
              <img src="@/images/辅助工具.png" class="link-card-background" alt="Tool Background">
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FriendshipLinksComponent',
  };
  </script>
  
  <style scoped>
  .section {
    padding: 2rem 0;
  }
  
  .topics-title {
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
  }
  
  /* 样式 */
  .link-card {
    background-color: #fdfbee;
    padding: 1.5rem;
    border-radius: 12px;
    position: relative; /* 使背景图片相对定位 */
    overflow: hidden; /* 确保图片不会超出容器 */
  }
  
  .link-card-pink {
    background-color: #fff5f5; /* 服务热线的背景颜色 */
  }
  
  .link-title {
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    position: relative;
  }
  
  .link-title::after {
    content: '';
    display: block;
    width: 80%;
    height: 2px;
    background-color: #f0c040;
    margin-top: 0.5rem;
    margin-left: 0;
  }
  
  /* 背景图片 */
  .link-card-background {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 60px; /* 调整图片大小 */
    height: auto;
    opacity: 0.2; /* 透明度设置为0.2 */
  }

  /* 调整标题部分的样式 */
.topics-title {
    margin-bottom: 0.5rem;
    position: relative;
    display: inline-block;
}

/* 标题下划线的样式 */
.topics-title::after {
    content: '';
    display: block;
    height: 12px;
    background: linear-gradient(to right, transparent, hsl(48, 97%, 73%), transparent);
    margin-top: 4px;
}
  </style>
  