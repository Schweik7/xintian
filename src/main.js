import './assets/common.css';
import './assets/index.css';
import 'bulma/css/bulma.css';
import 'hover.css/css/hover.css';
// import 'animate.css/animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp, reactive, provide } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 创建全局响应式布局配置对象
const globalLayoutConfig = reactive({
    gutter: 20,  // 默认的 gutter 值
    carouselHeight: 400,  // 轮播图默认高度
    carouselIndicatorPosition:'outside',
    updateResonsiveData() {  // 方法，用于根据窗口大小调整 gutter
        const width = window.innerWidth;
        if (width < 768) {
            this.gutter = 10;  // 移动端 gutter 较小
            this.carouselHeight = 140;  // 移动端轮播图高度较小
            this.carouselIndicatorPosition = '';  // 移动端轮播图指示器位置
        } else {
            this.gutter = 20;  // 桌面端 gutter
            this.carouselHeight = 400;  // 桌面端轮播图高度较大
            this.carouselIndicatorPosition = 'outside';  // 桌面端轮播图指示器位置
        }
    }
});
// 初始化 相应 值
globalLayoutConfig.updateResonsiveData();
// 监听窗口变化，动态更新 响应式值
window.addEventListener('resize', globalLayoutConfig.updateResonsiveData.bind(globalLayoutConfig));
// 全局提供 layout 配置
app.provide('globalLayoutConfig', globalLayoutConfig);

app.use(ElementPlus);
app.mount('#app');
