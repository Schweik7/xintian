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

      <!-- 左右箭头 -->
      <div class="columns is-centered mt-2 arrows-container">
        <div class="column is-narrow arrow-left is-hidden-mobile">
          <button class="button is-light" @click="prevBlock">
            <span class="icon">
              <i class="fas fa-arrow-left"></i>
            </span>
          </button>
        </div>
        <!-- TODO 允许图片偏移溢出到下面的容器 -->
        <!-- 卡片展示区 -->
        <div class="column card-container">
          <div v-for="(block, index) in currentSection.blocks" :key="index"
            :class="['block-wrapper', { 'is-focused': currentBlock === index }]" :style="getBlockStyle(index)">
            <div class="block-content" @click="currentBlock = index">
              <div class="image-container mb-2">
                <figure>
                  <img :src="block.image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media media-center">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="block.icon" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ block.title }}</p>
                </div>
              </div>
              <div class="content">
                <p class="subtitle is-5">{{ block.description }}</p>
                <div class="button-container">
                  <button class="button is-primary hvr-rectangle-in">
                    {{ block.buttonText }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右箭头 -->
        <div class="column is-narrow arrow-right">
          <button class="button is-light is-hidden-mobile" @click="nextBlock">
            <span class="icon">
              <i class="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
      return this.sections[this.currentSectionIndex];
    }
  },
  methods: {
    nextBlock() {
      this.currentBlock = (this.currentBlock + 1) % this.currentSection.blocks.length;
    },
    prevBlock() {
      this.currentBlock = (this.currentBlock - 1 + this.currentSection.blocks.length) % this.currentSection.blocks.length;
    },
    getBlockStyle(index) {
      const distance = this.currentBlock === index ? 0 : 2;
      return {
        transform: `scale(${1 - 0.1 * distance})`,
        opacity: distance > 1 ? 0.5 : 1,
        zIndex: 10 - distance
      };
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
  /* background-color: hwb(132 91% 7% / 0.883); */
  background-color: rgb(255, 253, 237);
}

.level{

}

/* 卡片容器的样式 */
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* overflow: hidden; */
  overflow: visible; /* 允许内部元素溢出 */
  z-index: 1;
}

/* 每个卡片的基础样式 */
.block-wrapper {
  position: relative;
  transition: all 0.5s ease;
  width: 30%;
  min-width: 250px;
  margin: 0 10px;
  z-index: 1;
}

/* 聚焦的卡片样式 */
.is-focused {
  transform: scale(1.1);
  z-index: 2;
  background-color: #faffa5;
}

/* 左右箭头的样式 */
.arrows-container {
  position: relative;
  z-index: 3;
}

.arrow-left,
.arrow-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}

.arrow-left {
  left: 0;
}

.arrow-right {
  right: 0;
}

/* 调整图片大小，确保图片高度一致 */
.image-container figure {
  height: 170px;
  /* 设置统一的高度 */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  height: 100%;
  /* 保持图片高度一致 */
  width: auto;
  /* 保持图片的纵横比 */
}

/* 居中媒体元素 */
.media-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* 横向排列 */
}

.media-content {
  margin-left: 10px;
  flex-grow: 0;
  /* 自适应宽度 */
  white-space: nowrap;
  /* 防止文字换行 */
}

/* 卡片描述居中 */
.content .subtitle {
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: center;
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

  .arrow-left,
  .arrow-right {
    top: 70%;
  }
}
</style>
