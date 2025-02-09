# App.vue
<template>
  <div class="page flex-col" @wheel.prevent="handleWheel">
    <HeaderComponent />
    <section class="section anchor" id="section1"></section>
    <MainSectionComponent />
    <section class="section is-medium"></section>
    <ContentComponent />
    <FriendshipLinksComponent />
    <FooterComponent />

    <!-- 页面指示器 -->
    <div class="page-indicator">
      <div 
        v-for="(_, index) in sections" 
        :key="index"
        :class="['indicator-dot', { 'is-active': currentSection === index }]"
        @click="scrollToSection(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import MainSectionComponent from './components/MainSectionComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import FriendshipLinksComponent from './components/FriendshipLinksComponent.vue'
import ContentComponent from './components/Content2Component.vue'
import 'element-plus/theme-chalk/display.css'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainSectionComponent,
    ContentComponent,
    FooterComponent,
    FriendshipLinksComponent,
  },
  setup() {
    const currentSection = ref(0)
    const sections = ref([])
    const isScrolling = ref(false)
    let observer = null
    
    // 初始化 Intersection Observer 用于更新指示器
    const initObserver = () => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sections.value.findIndex(section => 
              section.id === entry.target.id
            )
            if (index !== -1) {
              currentSection.value = index
            }
          }
        })
      }, {
        threshold: 0.5, // 当目标元素50%可见时触发
        rootMargin: '-50px 0px' // 添加一些边距，使检测更准确
      })

      sections.value.forEach(section => {
        observer.observe(section)
      })
    }
    
    // 处理滚轮事件
    const handleWheel = (e) => {
      if (isScrolling.value) return
      
      isScrolling.value = true
      const direction = e.deltaY > 0 ? 1 : -1
      
      const newIndex = Math.min(
        Math.max(0, currentSection.value + direction),
        sections.value.length - 1
      )
      
      if (newIndex !== currentSection.value) {
        scrollToSection(newIndex)
      }
      
      setTimeout(() => {
        isScrolling.value = false
      }, 800) // 减少滚动冷却时间
    }

    // 滚动到指定区域
    const scrollToSection = (index) => {
      if (sections.value[index]) {
        sections.value[index].scrollIntoView({
          behavior: 'smooth',
          block: 'center' // 滚动到元素中心位置
        })
      }
    }

    onMounted(() => {
      document.title = "心田"
      // 获取所有带 anchor 类的元素
      sections.value = Array.from(document.querySelectorAll('.anchor'))
      initObserver()
      
      // 添加触摸事件支持
      let touchStartY = 0
      document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY
      })
      
      document.addEventListener('touchmove', (e) => {
        if (isScrolling.value) return
        
        const touchEndY = e.touches[0].clientY
        const difference = touchStartY - touchEndY
        
        // 只有当滑动距离超过阈值时才触发
        if (Math.abs(difference) > 50) {
          const direction = difference > 0 ? 1 : -1
          const newIndex = Math.min(
            Math.max(0, currentSection.value + direction),
            sections.value.length - 1
          )
          
          if (newIndex !== currentSection.value) {
            scrollToSection(newIndex)
            isScrolling.value = true
            setTimeout(() => {
              isScrolling.value = false
            }, 800)
          }
        }
      })
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      currentSection,
      sections,
      scrollToSection,
      handleWheel
    }
  }
}
</script>

<style>
.page-indicator {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator-dot.is-active {
  background-color: #000;
  transform: scale(1.2);
}

.anchor {
  scroll-margin: 50px; /* 为锚点添加滚动边距 */
}

/* 允许页面滚动，但保持平滑效果 */
html {
  scroll-behavior: smooth;
}
</style>