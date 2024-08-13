<template>
    <div class="section_16 flex-row justify-between">
      <div
        v-for="(category, index) in troubleCategories"
        :key="index"
        :class="'flex-col block_'+(index+5)"
      >
        <div :class="'flex-row justify-between image-text_'+(index+9)">
          <img :class="'label_' + (index + 4)" :src="category.imageSrc"   />
          <span :class="'text-group_' + (index + 1)">{{ category.title }}</span>
        </div>
        <span :class="'paragraph_' + (index + 4)">
          <template v-for="(problem, idx) in category.problems">
            {{ problem }}<br v-if="idx < category.problems.length - 1" />
          </template>
        </span>
      </div>
    </div>
  </template>
  
  <script>
  import image1 from "@/images/4cecb4b29b99eeb8e0f7de4b868bc99b.png";
  import image2 from "@/images/07f3b77435693004758d44a2edb3c8f2.png";
  import image3 from "@/images/ec27304e906837ba42e2b29dd404651a.png";    
  import image4 from "@/images/93dcf3e14b22cec8d38daeffadb15f79.png";
  export default {
    name: "TroubleCategoriesComponent",
    data() {
      return {
        troubleCategories: [
          {
            title: "儿童青少年",
            // imageSrc: "@/images/4cecb4b29b99eeb8e0f7de4b868bc99b.png",
            imageSrc: image1,
            problems: ["意志行为障碍", "行为障碍问题", "情绪发展问题", "社会性交往"],
          },
          {
            title: "亲子关系",
            // imageSrc: "@/images/07f3b77435693004758d44a2edb3c8f2.png",
            imageSrc: image2,
            problems: ["与父母的沟通", "亲子关系单薄", "对父母的态度", "父母的压力"],
          },
          {
            title: "人际交往",
            // imageSrc: "@/images/ec27304e906837ba42e2b29dd404651a.png",
            imageSrc: image3,
            problems: ["社会关系", "师生关系", "沟通交流", "孤独自卑"],
          },
          {
            title: "个人成长",
            // imageSrc: "@/images/93dcf3e14b22cec8d38daeffadb15f79.png",
            imageSrc: image4,
            problems: ["学业压力", "情绪困扰", "自我评价"],
          },
        ],
      };
    },
  };
  </script>
  