<template>
  <section class="section">
    <div class="container">
      <!-- Section 标题展示，使用v-for -->
      <div class="level is-mobile">
        <div class="level-item section-header is-mobile" v-for="(section, index) in sections" :key="index">
          <!-- 如果index是0则放大一点，否则是3 -->
          <p v-if="index === 0" class="title is-4 has-text-black-bis">{{ section.title }}</p>
          <p v-else class="title is-6 has-text-grey-light">{{ section.title }}</p>
        </div>
      </div>

      <!-- 使用 ElementUI 的走马灯组件 -->
      <el-carousel
        :interval="4000"
        indicator-position="outside"
        arrow="always"
        height="500"
        type="card"
        :motion-blur="false"
        :cardScale="0.4"
        @change="handleCarouselChange"
      >
        <!-- 卡片展示区 -->
        <el-carousel-item
          v-for="(block, index) in currentSection.blocks"
          :key="index"
          :name="index.toString()"
        >
          <div class="block-content">
            <div class="image-container mb-2">
              <figure>
                <img :src="block.image" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media media-center">
              <div class="media-left">
                <figure class="image is-32x32">
                  <img :src="block.icon" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ block.title }}</p>
              </div>
            </div>
            <div class="content">
              <p class="subtitle is-5 card-description">{{ block.description }}</p>
              <div class="button-container">
                <button class="button is-primary hvr-rectangle-in card-button">
                  {{ block.buttonText }}
                </button>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>

<script>
import { ElCarousel, ElCarouselItem } from 'element-plus';
// import 'element-ui/lib/theme-chalk/index.css';
// import { ElMessage } from "element-plus";
// 导入图片资源
import image1 from '@/images/心理学堂.png';
import image2 from '@/images/量表测试.png';
import image3 from '@/images/VR测试.png';
import image1_1 from '@/images/心理学堂图标.png';
import image2_1 from '@/images/量表测试图标.png';
import image3_1 from '@/images/VR测试图标.png';
export default {
  data() {
    return {
      currentSectionIndex: 0, // 当前展示的 section 索引
      currentBlock: 0, // 当前聚焦的 block 索引
      sections: [
        {
          title: '心灵探索馆',
          blocks: [
            {
              title: '心理学堂',
              description: '轻松掌握心理小贴士',
              buttonText: '立即体验',
              image: image1,
              icon: image1_1
            },
            {
              title: '心理量表',
              description: '认真探索“我是谁”',
              buttonText: '立即体验',
              image: image2,
              icon: image2_1
            },
            {
              title: 'VR心理游戏',
              description: '沉浸倾听“心声世界”',
              buttonText: '立即体验',
              image: image3,
              icon: image3_1
            },
          ]
        },
        {
          title: '身心研究所',
          blocks: [
            // Add blocks for 身心研究所 here
          ]
        },
        {
          title: '心灵加油站',
          blocks: [
            // Add blocks for 心灵加油站 here
          ]
        }
      ]
    };
  },
  computed: {
    currentSection() {
      let curSection=this.sections[this.currentSectionIndex]
      // console.log(curSection.blocks[0].title);
      return curSection;
    }
  },
  methods: {
    handleCarouselChange(newIndex, oldIndex) {
      // console.log(`newIndex: ${newIndex}, oldIndex: ${oldIndex}`);
      this.currentBlock = newIndex;
    }
  },
  mounted() {
    window.vm = this;
  },
};
</script>

<style scoped>
/* Section 标题的样式 */
.section-header {
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

.section {
  background-color: rgb(255, 253, 237);
}

/* 卡片容器的样式 */
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible;
  z-index: 1;
}

/* 每个卡片的基础样式 */
.block-wrapper {
  position: relative;
  transition: all 0.5s ease;
  width: 30%;
  min-width: 250px;
  margin: 0 0px;
  z-index: 1;
}

/* 调整图片大小，确保图片高度一致 */
.image-container figure {
  height: 170px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  height: 100%;
  width: auto;
}

/* 居中媒体元素 */
.media-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.media-content {
  margin-left: 10px;
  flex-grow: 0;
  white-space: nowrap;
}

/* 卡片描述居中 */
.card-description {
  text-align: center;
  margin-top: -10px;
}

.button-container {
  display: flex;
  justify-content: center;
}

.card-button {
  margin-top: -10px;
  /* margin-bottom: 50%; */
}


/* 在小屏幕上调整卡片的宽度 */
@media (max-width: 768px) {
  .block-wrapper {
    width: 100%;
    margin: 0 auto;
  }

  .card-container {
    flex-direction: column;
  }
}
</style>
