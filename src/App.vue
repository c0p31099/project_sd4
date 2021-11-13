<template>
  <div class="flex-wrapper">
    <div id="nav">
      <Sidebar class="sidebar-area"/>
    </div>
    <div class="scafold-wrapper">
      <div class="width-limit">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue' // サイドバー

export default {
  components: {
    Sidebar
  }
}
</script>

<style>

body{
  margin:0;
  padding:0;
}

.flex-wrapper{
  display: flex;
}

#nav{
  width:250px;
  z-index:5;
}

#app {
  font-family: "Noto Sans Japanese", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.scafold-wrapper {
  min-height: 100vh; /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */
  flex:1;
}

.width-limit{
  min-width:600px;
  margin:auto;
}
</style>