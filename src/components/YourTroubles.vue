<!-- src/components/YourTroubles.vue -->
<template>
    <section class="your-troubles">
      <div class="trouble-category" v-for="category in categories" :key="category.title">
        <img :src="category.image" :alt="category.title" />
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'YourTroubles',
    data() {
      return {
        categories: [
          {
            title: '儿童青少年',
            description: '意志行为障碍、行为障碍问题、情绪发展问题、社会性交往',
            image: './images/4cecb4b29b99eeb8e0f7de4b868bc99b.png',
          },
          {
            title: '亲子关系',
            description: '与父母的沟通、亲子关系单薄、对父母的态度、父母的压力',
            image: './images/07f3b77435693004758d44a2edb3c8f2.png',
          },
          {
            title: '人际交往',
            description: '社会关系、师生关系、沟通交流、孤独自卑',
            image: './images/ec27304e906837ba42e2b29dd404651a.png',
          },
          {
            title: '个人成长',
            description: '学业压力、情绪困扰、自我评价',
            image: './images/93dcf3e14b22cec8d38daeffadb15f79.png',
          },
        ],
      };
    },
  };
  </script>
  