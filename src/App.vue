<!-- App.vue -->
<template>
    <div id="app">
      <Header />
      <MainSection />
      <YourTroubles />
      <OurTeam />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import MainSection from './components/MainSection.vue';
  import YourTroubles from './components/YourTroubles.vue';
  import OurTeam from './components/OurTeam.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    components: {
      Header,
      MainSection,
      YourTroubles,
      OurTeam,
      Footer,
    },
  };
  </script>
  