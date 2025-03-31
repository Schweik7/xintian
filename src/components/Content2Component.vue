<template>
    <section class="section">
        <div class="container">
            <!-- Section 标题展示 -->
            <div class="level is-mobile">
                <div class="level-item section-header is-mobile" v-for="(section, index) in sections" :key="index">
                    <p v-if="index === 0" class="title is-5 has-text-black-bis focusing-title">{{ section.title }}</p>
                    <p v-else class="title is-6 has-text-grey-light">{{ section.title }}</p>
                </div>
            </div>
            
            <!-- 走马灯组件 -->
            <el-carousel :interval="4000" :indicator-position="globalLayoutConfig.carouselIndicatorPosition"
                arrow="always" :height="globalLayoutConfig.responsiveHeight" type="card" :motion-blur="false"
                :cardScale="0.25" @change="handleCarouselChange" class="anchor">
                <el-carousel-item v-for="(block, index) in currentSection.blocks" :key="index" :name="index.toString()">
                    <div class="block-content">
                        <div class="columns content-wrapper">
                            <!-- 全景图列 -->
                            <div class="column image-column">
                                <div class="panorama-container">
                                    <a-scene embedded 
                                        :id="'aframe-scene-' + index" 
                                        class="panorama-scene"
                                        vr-mode-ui="enabled: false"
                                        device-orientation-permission-ui="enabled: false" >
                                        <a-assets>
                                            <img :id="'sky-' + index" 
                                                 :src="block.image" 
                                                 crossorigin="anonymous">
                                        </a-assets>
                                        <a-sky :src="'#sky-' + index" animation__rotate="property: rotation; to: 0 360000 0; loop: true; dur: 100000000; easing: linear"></a-sky>
                                        <a-entity position="0 1.6 0">
                                            <a-camera :look-controls="false" wasd-controls="enabled: false">
                                            </a-camera>
                                        </a-entity>
                                    </a-scene>
                                </div>
                            </div>
                            <!-- 文字列 -->
                            <div class="column text-column">
                                <div class="text-box">
                                    <p class="card-description">{{ block.text }}</p>
                                </div>
                                <div class="button-container">
                                    <button class="button hvr-rectangle-in card-button is-warning">
                                        {{ block.buttonText }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </section>
</template>

<script>
// import 'aframe';
// import 'aframe/dist/aframe-v1.6.0';
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { inject, onMounted, onBeforeUnmount } from 'vue';
// 导入图片资源
import image1_1 from '@/images/心理学堂图标.png';
import image2_1 from '@/images/量表测试图标.png';
import image3_1 from '@/images/VR测试图标.png';
import imageSky from '@/images/skybox/yard2_compressed.jpg';

export default {
    data() {
        return {
            currentSectionIndex: 0,
            currentBlock: 0,
            skyRotation: { x: 0, y: 0, z: 0 },
            rotationInterval: null,
            sections: [
                {
                    title: '心灵絮语',
                    blocks: [
                        {
                            title: '场景名称',
                            description: '轻松掌握心理小贴士',
                            text: "嘿，最近有没有觉得有点看不透自己？来聊聊如何更好的认识自己吧！嘿，最近有没有觉得有点看不透自己？来聊聊如何更好地认识自己吧",
                            buttonText: '立即体验',
                            image: imageSky,
                            icon: image1_1
                        },
                        // {
                        //     title: '心理量表',
                        //     text: '嘿，最近有没有觉得有点看不透自己？来聊聊如何更好的认识自己吧！嘿，最近有没有觉得有点看不透自己？来聊聊如何更好地认识自己吧',
                        //     buttonText: '立即体验',
                        //     image: imageSky,
                        //     icon: image2_1
                        // },
                        // {
                        //     title: 'VR心理游戏',
                        //     text: '嘿，最近有没有觉得有点看不透自己？来聊聊如何更好的认识自己吧！嘿，最近有没有觉得有点看不透自己？来聊聊如何更好地认识自己吧',
                        //     buttonText: '立即体验',
                        //     image: imageSky,
                        //     icon: image3_1
                        // },
                    ]
                },
                // {
                //   title: '身心研究所',
                //   blocks: [
                //     // Add blocks for 身心研究所 here
                //   ]
                // },
                // {
                //   title: '心灵加油站',
                //   blocks: [
                //   ]
                // }
            ]
        };
    },
    setup() {
        const globalLayoutConfig = inject('globalLayoutConfig');
        return {
            globalLayoutConfig,
        };
    },
    computed: {
        currentSection() {
            return this.sections[this.currentSectionIndex];
        }
    },
    methods: {
        handleCarouselChange(newIndex, oldIndex) {
            this.currentBlock = newIndex;
        },
        startRotation() {
            // 每50毫秒旋转一次，实现平滑旋转效果
            this.rotationInterval = setInterval(() => {
                this.skyRotation.y = (this.skyRotation.y + 0.1) % 360;
            }, 50);
        },
        stopRotation() {
            if (this.rotationInterval) {
                clearInterval(this.rotationInterval);
            }
        }
    },
    mounted() {
        setTimeout(() => {
            const scenes = document.querySelectorAll('a-scene');
            scenes.forEach(scene => {
                if (scene) {
                    // scene.components.screenshot.capture('perspective');
                    this.startRotation();
                }
            });
        }, 1000);

    },
    beforeUnmount() {
        this.stopRotation();
    }
};
</script>

<style scoped>
.section {
    background-color: rgb(255, 253, 237);
    padding: 3rem 1.5rem;
    /* 增加内边距使整体空间更高 */
}

/* 添加全景图相关样式 */
.panorama-container {
    width: 40vw;
    height: 40vh;
    /* position: relative; */
    /* overflow: hidden; */
    border-radius: 8px;
    z-index: 100;
}

.panorama-scene {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    z-index: 80;
}

.content-wrapper {
    margin-top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    /* 移除列间距 */
}

.image-column {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* 防止图片溢出 */
}

.image-column img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* 保持比例完整显示 */
    /* 或者使用 cover 来填满容器 */
}

/* 文字列样式 */
.text-column {
    width: 50%;
    /* 占据一半宽度 */
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(255, 253, 237);
    margin-right: -10%;
    z-index: 100;
}

.text-box {
    height: 80%;
    border-radius: 16px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    z-index: 100;
}

.card-description {
    text-indent: 2em;
    line-height: 200%;
    margin: 0;
    width: 100%;
    background-color: #fefade;
    font-size: 1.2rem;
}

.button-container {
    display: flex;
    justify-content: center;
}

.card-button {
    justify-content: center;
}

/* 走马灯样式 */
:deep(.el-carousel__container) {
    height: 40vh;
    justify-content: center;
}

:deep(.el-carousel__container) {
    .el-carousel__item--card {
        width: 60vw !important;
        height: 40vh !important;
    }

    .el-carousel__item {
        width: 60vw !important;
        height: 40vh !important;
    }

    .el-carousel__item--card.is-active {
        z-index: 2;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0px) !important;
    }
}


/* 响应式调整 */
@media screen and (max-width: 768px) {
    .content-wrapper {
        flex-direction: column;
        height: auto;
    }

    .image-column,
    .text-column {
        width: 100%;
        height: 300px;
    }

    .text-column {
        padding: 1rem;
    }
}


/* 响应式调整 */
@media screen and (max-width: 768px) {
    .content-wrapper {
        flex-direction: column;
        align-items: center;
    }

    .image-column,
    .text-column {
        width: 100%;
        max-width: 400px;
    }

    .image-column {
        height: 250px;
    }

    .text-box {
        min-height: auto;
    }
}

/* 其他样式保持不变 */
.section-header {
    text-align: center;
    margin-bottom: 1.25rem;
    font-weight: bold;
}

.focusing-title::after {
    content: '';
    display: block;
    height: 8px;
    background: linear-gradient(to right, transparent, hwb(48 44% 10%), transparent);
    margin-top: -4px;
}
</style>
<style scoped>
/* Rectangle In */
.hvr-rectangle-in {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    background: #f5ab00;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-rectangle-in:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #e1e1e1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-rectangle-in:hover,
.hvr-rectangle-in:focus,
.hvr-rectangle-in:active {
    color: black;
}

.hvr-rectangle-in:hover:before,
.hvr-rectangle-in:focus:before,
.hvr-rectangle-in:active:before {
    -webkit-transform: scale(0);
    transform: scale(0);
}

.focusing-title::after {
    content: '';
    display: block;
    height: 8px;
    /* 下划线的厚度 */
    background: linear-gradient(to right, transparent, hwb(48 44% 10%), transparent);
    /* 渐变效果 */
    margin-top: -4px;
    /* 下划线与标题的距离 */
}
</style>