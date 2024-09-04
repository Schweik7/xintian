<template>
  <section class="section topics-component container">
    <!-- 中间居中的标题和副标题 -->
    <div class="content has-text-centered">
      <h1 class="title topics-title">人生八景“热门话题”</h1>
      <p class="subtitle has-text-grey">我们在一起，用生活之景，探寻人生之路</p>
    </div>

    <div class="columns">
      <!-- 左侧菜单 -->
      <div class="column is-3 is-fullheight">
        <aside class="menu is-fullheight">
          <ul class="menu-list is-flex is-flex-direction-column is-justify-content-space-between" style="height: 100%;">
            <li v-for="(topic, index) in topics" :key="index" :class="{ 'is-active': selectedTopic === index }"
              @click="selectTopic(index)" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave(index)"
              class="is-flex is-align-items-center is-justify-content-center py-3">
              <a class="is-flex is-align-items-center is-justify-content-center">
                <!-- 使用Iconify图标，并指定颜色和动画控制类 -->
                <Icon :icon="topic.icon" :style="{ color: topic.color }" width="24" height="24"
                  class="mr-2 icon-animated" :class="{ 'animate-icon': iconInView[index] }" ref="topicIcons" />
                <span>{{ topic.title }}</span>
                <!-- 如果是热门，显示火的图标 -->
                <Icon v-if="topic.hot" icon="mdi:fire" class="ml-1" style="color: #ff4500;" width="18" height="18" />
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <!-- 右侧热门话题列表 -->
      <div class="column">
        <div class="content">
          <div class="box" v-for="(item, index) in selectedTopicItems" :key="index">
            <div class="columns is-vcentered">
              <!-- 左侧标签和问题区域 -->
              <div class="column is-narrow is-flex is-align-items-center">
                <!-- 设置不同颜色的标签 -->
                <span class="tag" :style="{ backgroundColor: tagColors[index] }">{{ index + 1 }}</span>
              </div>
              <div class="column is-7 is-flex is-align-items-center">
                <h3 class="is-size-6">{{ item.question }}</h3>
              </div>

              <!-- 右侧三个图标区域 -->
              <div class="column is-2 is-flex is-align-items-center is-justify-content-space-around">
                <!-- 使用Iconify的空心图标，点击后填充颜色 -->
                <el-button @click="toggleIconColor(index, 'stars')"
                  :style="{ color: item.filled.stars ? '#ffbf00' : '' }">
                  <Icon :icon="item.filled.stars ? 'mdi:star' : 'mdi:star-outline'" width="16" height="16" /> {{
                    item.stars }}
                </el-button>
                <el-button @click="toggleIconColor(index, 'comments')"
                  :style="{ color: item.filled.comments ? '#00bfff' : '' }">
                  <Icon :icon="item.filled.comments ? 'mdi:chat' : 'mdi:chat-outline'" width="16" height="16" /> {{
                    item.comments }}
                </el-button>
                <el-button @click="toggleIconColor(index, 'likes')"
                  :style="{ color: item.filled.likes ? '#ff4500' : '' }">
                  <Icon :icon="item.filled.likes ? 'mdi:thumb-up' : 'mdi:thumb-up-outline'" width="16" height="16" /> {{
                    item.likes }}
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      selectedTopic: 0,
      iconInView: Array(8).fill(false), // 新增，用于控制图标动画
      observer: null, // 新增，Intersection Observer
      isAnimating: Array(8).fill(false), // 新增，用于跟踪动画播放状态
      topics: [
        { title: '三省吾身（自我）', icon: 'line-md:account', color: '#4682b4', hot: true },
        { title: '书山有路（校园）', icon: 'line-md:compass', color: '#9EB446' },
        { title: '桃源秘境（家庭）', icon: 'line-md:home', color: '#8DBEF4' },
        { title: '海内知己（同伴）', icon: 'line-md:person-add', color: '#9EB446' },
        { title: '职场风云（职业）', icon: 'line-md:folder-check', color: '#EDC54A', hot: true },
        { title: '虚实相生（网络）', icon: 'line-md:cloud-alt', color: '#F69B97' },
        { title: '怡情养性（健康）', icon: 'line-md:heart', color: '#9CC6F5' },
        { title: '生生不息（耕耘）', icon: 'line-md:moon-to-sunny-outline-loop-transition', color: '#F6908C', hot: true },
      ],
      hotTopics: [
        [
          {
            question: '嘿，最近有没有觉得有点看不透自己？', stars: '1000+', comments: '1000+', likes: '1000+',
            filled: { stars: false, comments: false, likes: false }
          },
          {
            question: '成长路上，你遇到过哪些坎坷？一起来分享下自我突破的小秘诀？', stars: '850', comments: '888', likes: '113',
            filled: { stars: false, comments: false, likes: false }
          },
          {
            question: '价值观这东西，是先天的还是后天造就的？你的价值观经历过哪些变化？', stars: '780', comments: '777', likes: '888',
            filled: { stars: false, comments: false, likes: false }
          },
          {
            question: '有时候对自己太苛刻可不好，学会自同情如何？分享下你的心得？', stars: '626', comments: '666', likes: '666',
            filled: { stars: false, comments: false, likes: false }
          },
          {
            question: '人生目标是个大话题，你找到属于自己的使命了吗？还是在探索中？', stars: '555', comments: '555', likes: '555',
            filled: { stars: false, comments: false, likes: false }
          },
        ],
        [
          { question: '书山有路', stars: '800+', comments: '900+', likes: '600+', filled: { stars: false, comments: false, likes: false } },
        ],
        // Add more topics for other sections here
      ],
      tagColors: ['#FFED7E', '#D9D9D9', '#FCC47C', '#EEEEEE', '#EEEEEE'] // 使用不同颜色
    };
  },
  computed: {
    selectedTopicItems() {
      return this.hotTopics[this.selectedTopic];
    }
  },
  methods: {
    selectTopic(index) {
      this.selectedTopic = index;
    },
    toggleIconColor(index, type) {
      this.selectedTopicItems[index].filled[type] = !this.selectedTopicItems[index].filled[type];
    },
    setupObserver() {
      this.observer = new IntersectionObserver(this.handleIntersect, {
        root: null, // viewport as root
        threshold: 0.1, // 当至少10%的图标在视口中时触发
      });
      this.$refs.topicIcons.forEach((icon) => {
        this.observer.observe(icon.$el); // 观察每个图标
      });
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        const index = this.$refs.topicIcons.findIndex((icon) => icon.$el === entry.target);
        if (entry.isIntersecting) {
          this.iconInView[index] = true; // 动画开始
          setTimeout(() => this.restartIconAnimation(entry.target, index), 1000); // 延迟1秒播放动画
        } else {
          this.iconInView[index] = false; // 动画停止
          this.isAnimating[index] = false; // 重置动画状态
        }
      });
    },
    handleMouseOver(index) {
      const iconElement = this.$refs.topicIcons[index].$el;
      this.iconInView[index] = true; // hover时动画开始
      setTimeout(() => this.restartIconAnimation(iconElement, index), 100); // 延迟0.1秒播放动画
    },
    handleMouseLeave(index) {
      const iconElement = this.$refs.topicIcons[index].$el;
      this.iconInView[index] = false; // 离开时停止动画
      setTimeout(() => this.resetIconAnimation(iconElement), 100); // 延迟0.1秒停止动画
    },
    restartIconAnimation(el, index) {
      if (this.isAnimating[index]) return; // 如果动画正在播放，则不重新开始
      this.isAnimating[index] = true; // 标记动画正在播放

      // 查找元素中的 <animate> 和 <set> 元素并调用 beginElement 方法重新播放动画
      const animateElements = el.querySelectorAll('animate, set'); // 获取所有 animate 和 set 元素
      animateElements.forEach((animate) => {
        animate.beginElement(); // 手动触发动画
      });

      // 动画结束时重置状态
      setTimeout(() => {
        this.isAnimating[index] = false; // 动画结束，重置状态
      }, 1000); // 假设动画最长为 1 秒，调整此值以适应实际动画持续时间
    },
    resetIconAnimation(el) {
      // 查找元素中的 <animate> 和 <set> 元素并结束动画
      const animateElements = el.querySelectorAll('animate, set'); // 获取所有 animate 和 set 元素
      animateElements.forEach((animate) => {
        // 可以考虑通过修改属性来实现视觉上停止动画的效果
      });
    }
  },
  mounted() {
    this.setupObserver(); // 初始化观察者
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>

<style scoped>
.topics-component {
  padding: 1rem 0vw;
}

/* 设置左侧菜单的选中状态样式 */
.menu-list .is-active>a {
  color: #ff7e00;
  font-weight: bold;
}

/* 调整box的底部间距 */
.box {
  margin-bottom: 10px;
}

/* 标题和副标题居中 */
.content.has-text-centered {
  margin-bottom: 1rem;
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
  height: 14px;
  /* 下划线的厚度 */
  background: linear-gradient(to right, transparent, hsl(48, 97%, 73%), transparent);
  /* 渐变效果 */
  margin-top: 4px;
  /* 下划线与标题的距离 */
}

.icon-animated {
  transition: transform 0.3s ease;
  /* 添加过渡效果 */
}

.icon-animated:hover {
  transform: scale(1.1);
  /* hover时放大图标 */
}

.animate-icon {
  /* animation: fadeIn 1s forwards; */
  /* 图标进入时的动画 */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
