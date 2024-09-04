<template>
    <div class="topics-component">
      <div class="columns">
        <!-- 左侧菜单 -->
        <div class="column is-one-quarter">
          <aside class="menu">
            <ul class="menu-list">
              <li v-for="(topic, index) in topics" :key="index" :class="{'is-active': selectedTopic === index}" @click="selectTopic(index)">
                <a>
                  <Icon :icon="topic.icon" width="24" height="24" class="mr-2"/>
                  <span>{{ topic.title }}</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
  
        <!-- 右侧热门话题列表 -->
        <div class="column">
          <div class="content">
            <h1 class="title">人生八景“热门话题”</h1>
            <p class="subtitle">我们在一起，用生活之景，启迪生活之人</p>
            <div class="box" v-for="(item, index) in selectedTopicItems" :key="index">
              <div class="columns is-vcentered">
                <div class="column is-narrow">
                  <span class="tag is-info is-medium">{{ index + 1 }}</span>
                </div>
                <div class="column">
                  <h3 class="is-size-5">{{ item.question }}</h3>
                </div>
                <div class="column is-narrow">
                  <el-button icon="el-icon-star-on">{{ item.stars }}</el-button>
                  <el-button icon="el-icon-chat-line-round">{{ item.comments }}</el-button>
                  <el-button icon="el-icon-thumb"></el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        topics: [
          { title: '三省吾身', icon: 'mdi:account-circle' },
          { title: '书山有路', icon: 'mdi:book-open-page-variant' },
          { title: '桃源秘境', icon: 'mdi:home' },
          { title: '海内知己', icon: 'mdi:account-group' },
          { title: '职场风云', icon: 'mdi:briefcase' },
          { title: '虚实相生', icon: 'mdi:web' },
          { title: '怡情养性', icon: 'mdi:heart-pulse' },
          { title: '人生百态', icon: 'healthicons:agriculture' },
        ],
        hotTopics: [
          [
            { question: '嘿，最近有没有觉得有点看不透自己？', stars: '10000+', comments: '10000+', likes: '10000+' },
            { question: '成长路上，你遇到过哪些坎坷？', stars: '8560', comments: '8888', likes: '1123' },
          ],
          [
            { question: '书山有路', stars: '8000+', comments: '9000+', likes: '6000+' },
          ],
          // Add more topics for other sections here
        ],
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
      }
    }
  };
  </script>
  
  <style scoped>
  .topics-component {
    padding: 20px;
  }
  .menu-list .is-active > a {
    color: #ff7e00;
    font-weight: bold;
  }
  .box {
    margin-bottom: 10px;
  }
  </style>
  