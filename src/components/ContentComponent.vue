<template>
    <div class="section_4 flex-col">
      <div class="group_9 flex-row justify-between">
        <span class="text_10">心灵蜕变驿站</span>
        <div class="box_14 flex-col">
          <div class="box_5 flex-col"></div>
          <span class="text_11">心灵探索馆</span>
        </div>
        <span class="text_12">身心研究所</span>
      </div>
      <div class="group_10 flex-row justify-end">
        <!-- 包含心理学堂、量表测试、VR测试的子组件 -->
        <Block2Component />
        <Block3Component />
        <Block4Component />
      </div>
      <div class="image-wrapper_4 flex-row justify-between">
        <img class="image_5" referrerpolicy="no-referrer" src="@/images/2c255bd8a37885d892156609de8bc6cd.png" />
        <img class="image_6" referrerpolicy="no-referrer" src="@/images/7a15b93dca0b0ab792b7a38a4af5147a.png" />
      </div>
    </div>
  </template>
  
  <script>
  import Block2Component from './Block2Component.vue';
  import Block3Component from './Block3Component.vue';
  import Block4Component from './Block4Component.vue';
  
  export default {
    name: 'ContentComponent',
    components: {
      Block2Component,
      Block3Component,
      Block4Component,
    },
  };
  </script>
  