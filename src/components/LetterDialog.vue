<!-- LetterDialog.vue -->
<template>
    <div class="letter-dialog" v-if="visible" @click="closeDialog">
      <div class="letter-container" :class="{ 'is-open': isOpen }" @click.stop>
        <div class="envelope" :class="{ 'is-open': isOpen }">
          <div class="envelope-flap"></div>
          <div class="envelope-content">
            <div class="letter" v-show="isOpen">
              <div class="letter-content">
                <h2>亲爱的访客：</h2>
                <p>欢迎来到我们的心田，这里是一个充满温暖和希望的地方。</p>
                <p>在这里，我们相信每一颗心都是一片待耕耘的沃土，每一个故事都值得被倾听，每一份感动都应该被珍藏。</p>
                <p>让我们一起在这片心田上播种希望，收获快乐。</p>
                <p class="signature">心田团队</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LetterDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    watch: {
      visible(newVal) {
        if (newVal) {
          setTimeout(() => {
            this.isOpen = true;
          }, 500);
        } else {
          this.isOpen = false;
        }
      }
    },
    methods: {
      closeDialog() {
        this.isOpen = false;
        setTimeout(() => {
          this.$emit('update:visible', false);
        }, 500);
      }
    }
  }
  </script>
  
  <style scoped>
  .letter-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .letter-container {
    position: relative;
    width: 400px;
    height: 300px;
    perspective: 1000px;
  }
  
  .envelope {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    border-radius: 5px;
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }
  
  .envelope.is-open {
    transform: rotateX(180deg);
  }
  
  .envelope-flap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    clip-path: polygon(0 0, 50% 50%, 100% 0);
    transform-origin: top;
    transition: transform 0.5s;
  }
  
  .envelope.is-open .envelope-flap {
    transform: rotateX(-180deg);
  }
  
  .envelope-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    transform: rotateX(180deg);
    backface-visibility: hidden;
  }
  
  .letter {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
    overflow-y: auto;
  }
  
  .letter-content {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s forwards;
    animation-delay: 0.5s;
  }
  
  .letter h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #333;
  }
  
  .letter p {
    margin-bottom: 15px;
    line-height: 1.6;
    color: #666;
  }
  
  .signature {
    text-align: right;
    font-style: italic;
    margin-top: 30px;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .letter-container {
      width: 90%;
      height: 400px;
      margin: 20px;
    }
  }
  </style>