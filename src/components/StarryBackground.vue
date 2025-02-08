<!-- StarryBackground.vue -->
<template>
    <div class="starry-wrap">
      <canvas ref="canvas">
        canvas not supported
      </canvas>
    </div>
  </template>
  
  <script>
  /**
   * 工具函数：生成指定范围内的随机整数
   * @param {number} min - 最小值
   * @param {number} max - 最大值
   * @returns {number} - 生成的随机整数
   */
  const randomIntFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  /**
   * 工具函数：从颜色数组中随机选择一个颜色
   * @param {string[]} colors - 颜色数组
   * @returns {string} - 随机选择的颜色
   */
  const randomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  
  /**
   * 粒子类：用于创建和管理单个星星
   */
  class Particle {
    /**
     * 创建一个新的粒子实例
     * @param {number} x - 初始 x 坐标
     * @param {number} y - 初始 y 坐标
     * @param {number} radius - 粒子半径
     * @param {string} color - 粒子颜色
     * @param {HTMLCanvasElement} canvas - Canvas 元素
     * @param {number} orbitScale - 轨道缩放比例
     * @param {number} speed - 运动速度
     */
    constructor(x, y, radius, color, canvas, orbitScale, speed) {
      this.x = x
      this.y = y
      this.radius = radius
      this.color = color
      this.canvas = canvas
      // 初始角度（随机值使星星分布在轨道的不同位置）
      this.radians = Math.random() * Math.PI * 2
      // 运动速度
      this.velocity = speed
      // 到中心的距离（轨道半径）
      this.distanceFromCenter = randomIntFromRange(10, canvas.width / 2 * orbitScale)
      // 初始不透明度（随机值产生闪烁效果）
      this.opacity = Math.random() * 0.5 + 0.3
      // 不透明度变化方向
      this.opacityDelta = Math.random() < 0.5 ? 0.002 : -0.002
    }
  
    /**
     * 更新粒子状态
     * @param {CanvasRenderingContext2D} ctx - Canvas 上下文
     */
    update(ctx) {
      // 更新角度，实现旋转运动
      this.radians += this.velocity
  
      // 圆周运动 - 计算新的坐标
      this.x = Math.cos(this.radians) * this.distanceFromCenter + this.canvas.width / 2
      this.y = Math.sin(this.radians) * this.distanceFromCenter + this.canvas.height / 2
  
      // 更新不透明度，实现闪烁效果
      this.opacity += this.opacityDelta
      if (this.opacity <= 0.3 || this.opacity >= 0.8) {
        this.opacityDelta *= -1
      }
  
      this.draw(ctx)
    }
  
    /**
     * 绘制粒子
     * @param {CanvasRenderingContext2D} ctx - Canvas 上下文
     */
    draw(ctx) {
      ctx.beginPath()
      ctx.fillStyle = this.color
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      ctx.globalAlpha = this.opacity
      ctx.fill()
      ctx.closePath()
    }
  }
  
  export default {
    name: 'StarryBackground',
    props: {
      // 星星数量
      starCount: {
        type: Number,
        default: 1200
      },
      // 轨道缩放比例（影响星星分布范围）
      orbitScale: {
        type: Number,
        default: 0.8
      },
      // 旋转速度
      rotationSpeed: {
        type: Number,
        default: 0.001
      }
    },
    data() {
      return {
        animationFrameId: null,
        particles: [],
        // 星星可能的颜色
        colors: [
          '#E6E6FA', // 淡紫色
          '#87CEEB', // 天蓝色
          '#4169E1', // 皇家蓝
          '#1E90FF', // 道奇蓝
          '#00BFFF', // 深天蓝
          '#4682B4', // 钢青色
          '#B0C4DE', // 亮钢蓝
          '#ADD8E6', // 亮蓝色
          '#87CEFA', // 亮天蓝
          '#F0F8FF', // 爱丽丝蓝
          '#FFFFFF', // 纯白
          '#E6E6FA'  // 薰衣草色
        ]
      }
    },
    mounted() {
      // 确保 DOM 加载完成后初始化
      this.$nextTick(() => {
        this.initCanvas()
        window.addEventListener('resize', this.handleResize)
      })
    },
    beforeUnmount() {
      // 组件卸载前清理
      window.removeEventListener('resize', this.handleResize)
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId)
      }
    },
    methods: {
      /**
       * 初始化 Canvas 和星空效果
       */
      initCanvas() {
        const canvas = this.$refs.canvas
        if (!canvas) return
  
        const ctx = canvas.getContext('2d')
        if (!ctx) return
  
        // 设置初始画布尺寸
        this.handleResize()
  
        // 初始化星星
        this.particles = []
        for (let i = 0; i < this.starCount; i++) {
          const radius = Math.random() * 0.5 + 0.5 // 随机星星大小
          this.particles.push(
            new Particle(
              canvas.width / 2,
              canvas.height / 2,
              radius,
              randomColor(this.colors),
              canvas,
              this.orbitScale,
              this.rotationSpeed
            )
          )
        }
  
        // 开始动画循环
        const animate = () => {
          this.animationFrameId = requestAnimationFrame(animate)
          
          // 创建渐变背景
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
          gradient.addColorStop(0, 'rgba(19,27,35,.05)')
          gradient.addColorStop(1, 'rgba(10,20,67,.05)')
          
          // 填充背景
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
  
          // 更新所有星星
          this.particles.forEach(particle => particle.update(ctx))
        }
  
        animate()
      },
  
      /**
       * 处理窗口大小变化
       */
      handleResize() {
        const canvas = this.$refs.canvas
        if (!canvas) return
  
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
  
        // 重新调整所有星星的轨道
        if (this.particles.length > 0) {
          this.particles.forEach(particle => {
            particle.canvas = canvas
            particle.distanceFromCenter = randomIntFromRange(
              10, 
              canvas.width / 2 * this.orbitScale
            )
          })
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .starry-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(to bottom, #131b23, #0a1443);
  }
  
  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
  </style>