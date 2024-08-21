<template>
  <section class="section">
    <div class="container">
      <!-- 卡片展示区 -->
      <div class="card-container">
        <div v-for="(block, index) in blocks" :key="index" :class="['block-wrapper', { 'is-focused': currentBlock === index }]" :style="getCardStyle(index)">
          <div class="block-content">
            <div class="block-header">
              <div class="block-title">
                <span class="is-size-5">{{ block.headerTitle }}</span>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img :src="block.image" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img :src="block.icon" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{ block.title }}</p>
                  </div>
                </div>
                <div class="content">
                  {{ block.description }}
                  <br>
                  <button class="button is-primary mt-4">{{ block.buttonText }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 左右箭头 -->
      <div class="columns is-mobile is-centered mt-5">
        <div class="column is-narrow">
          <button class="button is-light" @click="prevBlock">
            <span class="icon">
              <i class="fas fa-arrow-left"></i>
            </span>
          </button>
        </div>
        <div class="column is-narrow">
          <button class="button is-light" @click="nextBlock">
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
      // 当前聚焦的 block 索引
      currentBlock: 0,
      // 定义 blocks 数组，每个 block 表示一个独立的内容块
      blocks: [
        {
          headerTitle: '心灵蜕变驿站',
          title: '心理学堂',
          description: '在这里，用户可以接触到丰富的心理学知识，包括心理发展的基础知识、常见心理问题的原因、症状以及对应策略。',
          buttonText: '立即体验',
          image: image1,
          icon: image1_1
        },
        {
          headerTitle: '心灵探索馆',
          title: '量表测试',
          description: '提供经典心理测评问卷，如：抑郁症、焦虑症、强迫症等，帮助用户了解自身心理状况。',
          buttonText: '立即体验',
          image: image2,
          icon: image2_1
        },
        {
          headerTitle: '身心研究所',
          title: 'VR测试',
          description: '自主研发VR评估场景（如情景测验）等，提高测评的信效度，减轻心理老师等相关工作者的工作压力。',
          buttonText: '立即体验',
          image: image3,
          icon: image3_1
        }
      ]
    };
  },
  methods: {
    // 切换到下一个 block
    nextBlock() {
      console.log("下一内容块");  // 日志记录
      this.currentBlock = (this.currentBlock + 1) % this.blocks.length;
    },
    // 切换到上一个 block
    prevBlock() {
      console.log("上一内容块");  // 日志记录
      this.currentBlock = (this.currentBlock - 1 + this.blocks.length) % this.blocks.length;
    },
    // 根据索引计算卡片的样式
    getCardStyle(index) {
      const distance = Math.abs(this.currentBlock - index);
      return {
        transform: `scale(${1 - 0.1 * distance})`,
        opacity: distance > 1 ? 0.5 : 1,
        zIndex: 10 - distance
      };
    }
  }
};
</script>

<style scoped>
/* 卡片容器的样式 */
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* 每个卡片的基础样式 */
.block-wrapper {
  position: relative;
  transition: all 0.5s ease;
  width: 30%;
  min-width: 250px;
  margin: 0 10px;
}

/* 聚焦的卡片样式 */
.is-focused {
  transform: scale(1.1);
  z-index: 20;
}

/* 卡片内容的样式调整 */
.card-content {
  position: relative;
  top: -20px;
  z-index: 1;
  background-color: white;
  padding-top: 40px;
}

/* 调整卡片图片的位置，使其部分溢出卡片内容的容器 */
.card-image figure {
  margin-top: -40px;
}

.block-header {
  text-align: center;
  margin-bottom: 1rem;
}

/* 在小屏幕上调整卡片的宽度 */
@media (max-width: 768px) {
  .block-wrapper {
    width: 80%;
    margin: 0 auto;
  }

  .card-container {
    flex-direction: column;
  }
}
</style>
