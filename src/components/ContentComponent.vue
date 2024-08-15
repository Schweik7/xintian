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
        <img class="image_5"   src="@/images/心理学堂.png" />
        <img class="image_6"   src="@/images/VR测试.png" />
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
  