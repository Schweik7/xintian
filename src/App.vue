<template>
  <div class="page flex-col">
    <HeaderComponent />
    <MainSectionComponent />
    <ContentComponent />
    <TopicsComponent />

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainSectionComponent from './components/MainSectionComponent.vue';
import ContentComponent from './components/ContentComponent.vue';

import FooterComponent from './components/FooterComponent.vue';
import TopicsComponent from './components/TopicsComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainSectionComponent,
    ContentComponent,
    TopicsComponent,
    FooterComponent,
  },
  mounted() {
    document.title = "心田"; // 在这里设置网站标题
  }
};
</script>