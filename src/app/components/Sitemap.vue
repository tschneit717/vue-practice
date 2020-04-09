<template>
  <div>
    <h1>Sitemap</h1>
    <ul>
    <!-- eslint-disable vue/valid-v-bind -->
    <!-- eslint-disable vue/no-parsing-error -->
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <li v-for="(item, key) in pages" :key="key">
        <a v-bind:href="'/' + key + '.html'">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable no-console */
  const data = require('./../../../pages.json')

  export default {
    name: "Sitemap",
    props: {},
    data () {
      return {
        pages: data
      }
    },
    methods: {
      logData() {
        console.log(data);
      }
    },
    mounted() {
      this.logData();
    }
  }
</script>
<style lang="scss" scoped>
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  ul {
    li {
      list-style: none;
      padding:4px;
    }
  }
</style>