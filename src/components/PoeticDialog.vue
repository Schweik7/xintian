<!-- PoeticDialog.vue -->
<template>
    <div v-if="visible" class="poetic-dialog">
        <StarryBackground :star-count="800" :orbit-scale="1.5" :rotation-speed="0.0008" />
        <div class="poem-container">
            <div v-show="showPoem" class="poem" :class="{ 'fade-in': poemVisible }">
                <!-- 关闭按钮 -->
                <div class="close-icon" @click="closeDialog" title="关闭">×</div>

                <div class="poem-content">
                    <div v-for="(line, lineIndex) in poem" :key="lineIndex" class="poem-line">
                        <span v-for="(char, charIndex) in line" :key="charIndex" class="poem-char"
                            :class="{ 'visible': isCharVisible(lineIndex, charIndex) }">{{ char }}</span>
                    </div>
                </div>

                <!-- 返回按钮 -->
                <div v-show="showReturnButton" class="return-button" @click="closeDialog">
                    <span>返回心田</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarryBackground from './StarryBackground.vue'

export default {
    name: 'PoeticDialog',
    components: {
        StarryBackground
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // 诗歌内容，每行一个数组元素
            poem: [
                "亲爱的探险者",
                "在这片心田",
                "每一颗星辰",
                "都闪烁着好奇",
                "轻声问你",
                "『什么是生命』",
                "我们期待",
                "和你一起",
                "慢慢拆解谜底",
                "—— 在未来",
                "轻轻回应的『我』"
            ],
            visibleChars: 0, // 当前可见的字符数
            typewriterInterval: null,
            charDisplayInterval: 150, // 每个字显示的间隔时间（毫秒）
            showPoem: false, // 控制整个诗容器的显示
            poemVisible: false, // 控制诗的透明度动画
            showReturnButton: false // 控制返回按钮的显示
        }
    },
    methods: {
        isCharVisible(lineIndex, charIndex) {
            let totalCharsBeforeLine = 0
            for (let i = 0; i < lineIndex; i++) {
                totalCharsBeforeLine += this.poem[i].length
            }
            return totalCharsBeforeLine + charIndex < this.visibleChars
        },

        startTypewriter() {
            console.log('开始打字机效果')
            this.resetTypewriter()

            const totalChars = this.poem.reduce((sum, line) => sum + line.length, 0)

            const typeNextChar = () => {
                if (this.visibleChars < totalChars) {
                    // 计算当前正在显示哪一行的哪个字符
                    let currentLineIndex = 0
                    let charCount = 0
                    let currentCharPos = this.visibleChars

                    // 找到当前行
                    while (charCount + this.poem[currentLineIndex].length <= currentCharPos) {
                        charCount += this.poem[currentLineIndex].length
                        currentLineIndex++
                    }

                    // 确定当前字符在当前行的位置
                    const charInLine = currentCharPos - charCount

                    // 根据不同位置设置不同的延迟
                    let delay = 150 // 默认延迟

                    // 如果是破折号后面的内容
                    if (currentLineIndex >= 9) { // "—— 在未来" 这一行开始
                        delay = 300 // 加倍延迟

                        // 最后一行的特殊处理
                        if (currentLineIndex === 10) {
                            if (this.poem[currentLineIndex][charInLine] === '『') {
                                delay = 800 // 引号前停顿
                            } else if (this.poem[currentLineIndex][charInLine] === '我') {
                                delay = 1200 // "我"字特别停顿
                            } else if (this.poem[currentLineIndex][charInLine] === '』') {
                                delay = 800 // 引号后停顿
                            }
                        }
                    }

                    setTimeout(() => {
                        this.visibleChars++
                        if (this.visibleChars < totalChars) {
                            typeNextChar()
                        } else {
                            console.log('打字机效果完成')
                            this.showReturnButton = true
                            console.log('显示返回按钮')
                        }
                    }, delay)
                }
            }

            typeNextChar()
        },


        resetTypewriter() {
            console.log('重置打字机效果')
            if (this.typewriterInterval) {
                clearInterval(this.typewriterInterval)
            }
            this.visibleChars = 0
            this.showReturnButton = false
        },

        closeDialog() {
            console.log('关闭对话框')
            this.$emit('update:visible', false)
        },

        initializeAnimation() {
            // 首先只显示星空
            console.log('初始化动画：仅显示星空')
            this.showPoem = false
            this.poemVisible = false

            // 1秒后显示诗的容器，但保持透明
            setTimeout(() => {
                console.log('显示诗的容器')
                this.showPoem = true

                // 稍微延迟后开始淡入动画
                setTimeout(() => {
                    console.log('开始诗的淡入动画')
                    this.poemVisible = true

                    // 等待淡入动画完成后开始打字机效果
                    setTimeout(() => {
                        this.startTypewriter()
                    }, 1000)
                }, 100)
            }, 1000)
        }
    },
    watch: {
        visible(newVal) {
            if (newVal) {
                console.log('对话框被打开')
                this.initializeAnimation()
            } else {
                console.log('对话框被关闭')
                this.resetTypewriter()
                this.showPoem = false
                this.poemVisible = false
            }
        }
    },
    beforeUnmount() {
        this.resetTypewriter()
    }
}
</script>

<style scoped>
.poetic-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 1s ease-out;
}

.poem-container {
    position: relative;
    padding: 2rem;
    color: white;
    text-align: center;
    max-width: 800px;
    width: 90%;
}

.poem {
    font-family: "楷体", "KaiTi", serif;
    opacity: 0;
    margin: 0 auto;
    display: inline-block;
    text-align: left;
    background: rgba(0, 0, 0, 0.2);
    padding: 2rem 3rem;
    border-radius: 1rem;
    backdrop-filter: blur(5px);
    transform: scale(0.95);
    position: relative;
}

.poem.fade-in {
    opacity: 0.8;
    transform: scale(1);
    transition: opacity 1s ease-in-out, transform 1s ease-out;
}

.poem-content {
    opacity: 1;
}

.poem-line {
    font-size: 1.8rem;
    line-height: 1.8;
    margin: 0.2rem 0;
    white-space: nowrap;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.poem-line:hover {
    opacity: 1;
    cursor: default;
}

.poem-char {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.poem-char.visible {
    opacity: 1;
    transform: translateY(0);
}

.close-icon {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
}

.close-icon:hover {
    opacity: 1;
}

.return-button {
    position: absolute;
    bottom: 1.5rem;
    left: 2rem;
    padding: 0.6rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    opacity: 0.7;
}

.return-button:hover {
    opacity: 1;
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.2);
}

/* 缩进样式 */
.poem-line:nth-child(2) {
    margin-left: 2em;
}

.poem-line:nth-child(3) {
    margin-left: 4em;
}

.poem-line:nth-child(4) {
    margin-left: 4em;
}

.poem-line:nth-child(5) {
    margin-left: 2em;
}

.poem-line:nth-child(6) {
    margin-left: 3em;
}

.poem-line:nth-child(7) {
    margin-left: 2em;
}

.poem-line:nth-child(8) {
    margin-left: 3em;
}

.poem-line:nth-child(9) {
    margin-left: 4em;
}

.poem-line:nth-child(10) {
    margin-left: 5em;
}

.poem-line:nth-child(11) {
    margin-left: 6em;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .poem-line {
        font-size: 1.4rem;
    }

    .poem {
        padding: 1.5rem;
    }
}
</style>