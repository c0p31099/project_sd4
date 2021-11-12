<template>
  <div>
    <div id="nav">
      <sidebar class="sidebar-area"></sidebar>
    </div>
    <div>
    <div class="scafold-wrapper text-center">
      <router-view/>
    </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Shared/sidebar.vue' // サイドバー

export default {
  components: {
    Sidebar
  }
}
</script>

<style>
.sidebar-area {
  float: left;
}

.scafold-wrapper {
  min-height: 100vh; /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */
  /* サイドバーのwidth分だけ範囲を削除 */
  width: calc(100% - 250px);
  margin: 0 0 0 250px;
}

body{
  margin:0;
  padding:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>