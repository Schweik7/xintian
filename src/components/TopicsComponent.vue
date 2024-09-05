<template>
    <section class="section topics-component container">
        <!-- 中间居中的标题和副标题 -->
        <div class="content has-text-centered">
            <h1 class="title topics-title">人生八景“热门话题”</h1>
            <p class="subtitle has-text-grey">我们在一起，用生活之景，探寻人生之路</p>
        </div>

        <!-- 布局行 -->
        <el-row :gutter="globalLayoutConfig.gutter">
            <!-- 左侧菜单 -->
            <el-col :xs="3" :sm="5" :md="5" :lg="5" :xl="5">
                <aside class="menu full-height">
                    <ul class="menu-list flex-column full-height">
                        <li v-for="(topic, index) in topics" :key="index"
                            :class="{ 'is-active': selectedTopic === index }" @click="selectTopic(index)"
                            @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave(index)" class="menu-item">
                            <!-- 图标区域 -->
                            <div class="menu-item-icon">
                                <Icon :icon="topic.icon" :style="{ color: topic.color }" width="24" height="24"
                                    class="icon-animated" :class="{ 'animate-icon': iconInView[index] }"
                                    ref="topicIcons" />
                            </div>
                            <!-- 文字区域 (仅在md及以上设备显示) -->
                            <div class="menu-item-text hidden-sm-and-down">
                                <span style="font-family: PingFang-SC-Bold;">{{ topic.title }}</span>
                            </div>
                            <!-- 热门标志区域 -->
                            <div class="menu-item-hot hidden-sm-and-down">
                                <Icon v-if="topic.hot" icon="mdi:fire" class="hot-icon" width="18" height="18" />
                                <span v-else class="placeholder"></span> <!-- 空的占位符 -->
                            </div>
                        </li>
                    </ul>
                </aside>
            </el-col>

            <!-- 右侧热门话题列表 -->
            <el-col :xs="20" :sm="19" :md="19" :lg="19" :xl="19">
                <div class="content">
                    <el-row :gutter="globalLayoutConfig.gutter" v-for="(item, index) in sortedTopics" :key="index" class="box">
                        <!-- 标签列 -->
                        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="is-flex is-align-items-center">
                            <span class="tag" :style="{ backgroundColor: tagColors[index] }">{{ index + 1 }}</span>
                        </el-col>

                        <!-- 问题描述区域 (简短描述用于移动设备) -->
                        <el-col :xs="20" :sm="19" :md="15" :lg="15" :xl="15" class="is-flex is-align-items-center">
                            <el-text class="question-text" size="large" style="font-family: PingFang-SC-Regular;">
                                <!-- 在小屏幕上显示简短问题描述 -->
                                <span class="hidden-md-and-up">
                                    {{ item.question.length > 17 ? item.question.substring(0, 17) + '...' :
                                        item.question }}
                                </span>
                                <!-- 在中屏及以上显示完整描述 -->
                                <span class="hidden-sm-and-down">
                                    {{ item.question }}
                                </span>
                            </el-text>
                        </el-col>

                        <!-- 图标按钮区域 -->
                        <el-col :xs="2" :sm="3" :md="7" :lg="7" :xl="7" class="icon-button-column">
                            <el-row class="is-flex is-align-items-center">
                                <!-- 点赞图标 -->
                                <el-col :span="8" class="icon-button hidden-xs-only">
                                    <el-button @click="toggleIconColor(index, 'stars')"
                                        :style="{ color: item.filled.stars ? '#ffbf00' : '' }">
                                        <Icon :icon="item.filled.stars ? 'mdi:star' : 'mdi:star-outline'" width="16"
                                            height="16" />
                                        <span class="button-text hidden-xs-only">{{ item.stars > 1000 ? '1000+' :
                                            item.stars }}</span>
                                    </el-button>
                                </el-col>
                                <!-- 评论图标 -->
                                <el-col :span="8" class="icon-button">
                                    <el-button @click="toggleIconColor(index, 'comments')"
                                        :style="{ color: item.filled.comments ? '#00bfff' : '' }">
                                        <Icon :icon="item.filled.comments ? 'mdi:chat' : 'mdi:chat-outline'" width="16"
                                            height="16" />
                                        <span class="button-text hidden-xs-only">{{ item.comments }}</span>
                                    </el-button>
                                </el-col>
                                <!-- 喜欢图标 -->
                                <el-col :span="8" class="icon-button hidden-xs-only">
                                    <el-button @click="toggleIconColor(index, 'likes')"
                                        :style="{ color: item.filled.likes ? '#ff4500' : '' }">
                                        <Icon :icon="item.filled.likes ? 'mdi:thumb-up' : 'mdi:thumb-up-outline'"
                                            width="16" height="16" />
                                        <span class="button-text hidden-xs-only">{{ item.likes }}</span>
                                    </el-button>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <!-- 查看更多按钮 (手机端隐藏) -->
                    <div class="has-text-right mt-4">
                        <el-button type="primary" @click="loadMore">查看更多</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
import { Icon } from '@iconify/vue';
import { inject } from 'vue';
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
                        question: '嘿，最近有没有觉得有点看不透自己？', stars: '3000', comments: '2000', likes: '1002',
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
    setup() {
        const globalLayoutConfig = inject('globalLayoutConfig');
        return {
            globalLayoutConfig,
        };
    },
    computed: {
        selectedTopicItems() {
            return this.hotTopics[this.selectedTopic];
        },
        // 按点赞数量排序后的前5个问题
        sortedTopics() {
            // 注意数据可能为空
            return this.hotTopics[this.selectedTopic] ? this.hotTopics[this.selectedTopic]
                .slice()
                .sort((a, b) => b.stars - a.stars)
                .slice(0, 5)
                .map(item => ({
                    ...item,
                    stars: item.stars > 1000 ? '1000+' : item.stars
                })) : [];
        }
    },
    methods: {
        selectTopic(index) {
            console.log('selectTopic', index);
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
            const animateElements = el.querySelectorAll('animate, set'); // 获取所有 animate 和 set 元素
            animateElements.forEach((animate) => {
            });
        },
        loadMore() {
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

/* 调整 box 的底部间距 */
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
    background: linear-gradient(to right, transparent, hsl(48, 97%, 73%), transparent);
    margin-top: 4px;
}

/* 公共样式 */
.full-height {
    height: 100%;
}

.flex-column {
    display: flex;
    flex-direction: column;
}

.menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}

.menu-item-icon,
.menu-item-text,
.menu-item-hot {
    display: flex;
    align-items: center;
}

.placeholder {
    display: inline-block;
    width: 18px;
    /* 和 hot icon 的宽度相同 */
    height: 18px;
}

.hot-icon {
    color: #ff4500;
}

.question-text {
    margin: 0;
}

/* 图标按钮区域 */
.icon-button-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}

.icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-text {
    display: inline-block;
    width: 40px;
    /* 设置一个固定宽度来对齐 */
    text-align: center;
}

.icon-animated {
    transition: transform 0.3s ease;
}

.icon-animated:hover {
    transform: scale(1.1);
}

/* 移动端响应式 */
@media screen and (max-width: 768px) {
    .el-row.box {
        padding-left: 6px;
    }

    .menu-item {
        margin-left: -7%;
    }

    .icon-button>button.el-button {
        padding: 0 0px;
    }

    .topics-title{
        font-size: 23px;
    }
    .subtitle{
        font-size: 19px;

    }
}
</style>
