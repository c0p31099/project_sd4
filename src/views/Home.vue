<template>
  <div class="home">
    <h1>ようこそ的なサンプルテキスト</h1>
    <lists/>
  </div>
</template>

<script>
// @ is an alias to /src
import lists from '@/components/List.vue'

export default {
  name: 'Home',
  components: {
    lists
  }
}
</script>

<style scoped>
h1 {
  padding: 60px 0;
  margin:0;
}
a {
  color: #42b983;
}
</style>
