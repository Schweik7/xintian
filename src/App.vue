<template>
    <div class="page flex-col">
      <HeaderComponent />
      <MainSectionComponent />
      <ContentComponent />
      <TroubleCategoriesComponent />
      <ResearchTeamsComponent />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainSectionComponent from './components/MainSectionComponent.vue';
  import ContentComponent from './components/ContentComponent.vue';
  import TroubleCategoriesComponent from './components/TroubleCategoriesComponent.vue';
  import ResearchTeamsComponent from './components/ResearchTeamsComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainSectionComponent,
      ContentComponent,
      ResearchTeamsComponent,
      TroubleCategoriesComponent,
      FooterComponent,
    },
  };
  </script>
  