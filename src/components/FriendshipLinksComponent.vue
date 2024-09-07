<template>
  <section class="section">
    <div class="container">
      <!-- 标题 -->
      <div class="content has-text-centered">
        <h1 class="title topics-title">友 情 链 接</h1>
      </div>

      <!-- 栅格布局 -->
      <el-row :gutter="globalLayoutConfig.friendshipLinksGutter">
        <el-col :span="8" v-for="(section, sectionIndex) in sections" :key="sectionIndex">
          <div class="link-card" :class="section.class">
            <div class="link-title">{{ section.title }}</div>
            <div class="link-items">
              <p v-for="(item, index) in section.items" :key="index">{{ item }}</p>
            </div>
            <img :src="section.image" class="link-card-background" alt="Section Background">
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>


<script>
import image1 from "@/images/专业机构.png";
import image2 from "@/images/服务热线.png";
import image3 from "@/images/辅助工具.png";

export default {
  name: 'FriendshipLinksComponent',
  inject: ['globalLayoutConfig'],  // 注入全局配置
  data() {
    return {
      sections: [
        {
          title: '专业机构',
          items: ['公益心理组织', '心理咨询中心', '心理研究机构'],
          image: image1,
          class: 'link-card-yellow',
        },
        {
          title: '服务热线',
          items: ['心理危机干预热线', '青少年热线', '家庭与婚姻热线', '心理咨询热线'],
          image: image2,
          class: 'link-card-pink',
        },
        {
          title: '辅助工具',
          items: ['心理健康资源库', '冥想与放松工具', '情绪管理应用', '时间管理/规划工具'],
          image: image3,
          class: 'link-card-green',
        },
      ],
    };
  },
};
</script>
<style scoped>
.section {
  padding: 2rem 0;
}

.topics-title {
  position: relative;
  display: inline-block;
  font-size: 1.8rem;
}

/* 样式 */
.link-card {
  background-color: #fdfbee;
  padding: 1.5rem;
  border-radius: 12px;
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  transition: padding 0.3s;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.link-card-yellow {
  background-color: #fffef6;
}

.link-card-pink {
  background-color: #fffcf9;
}

.link-card-green {
  background-color: #fdfff6;
  /* 调淡的绿色背景 */
}

.link-title {
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  width: 100%;
  border-bottom: 2px solid #f0c040;
  /* 分割线 */
  padding-bottom: 0.5rem;
  text-align: center;
}

.link-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  justify-content: space-between;
  flex-grow: 1;
  text-align: center;
}

/* 背景图片 */
.link-card-background {
  position: absolute;
  bottom: 1.3rem;
  left:20%;
  width: 35%;
  height: auto;
  opacity: 1;
  z-index: 3000;
  /* 显示在容器上层 */
  transform: translate(-50%, 20%);
  /* 调整显示位置 */
  object-fit: contain;
  /* 保持比例 */
}

/* 标题下划线的样式 */
.topics-title::after {
  content: '';
  display: block;
  height: 12px;
  background: linear-gradient(to right, transparent, hsl(48, 97%, 73%), transparent);
  margin-top: 4px;
}

/* 样式调整 */
@media (max-width: 768px) {
  .link-card {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    /* 移动端减少内边距 */
    min-height: 220px;
    /* 移动端调整高度 */
  }
}
</style>
