<template>
  <div class="app-header">
    <h3 :style="{ cursor: 'pointer' }">Counter App</h3>
    <ul class="nav-bar">
      <li><router-link to="/"> Home</router-link></li>
      <li><router-link to="/about"> About</router-link></li>
    </ul>
  </div>
</template>

<script>
import About from "./About.vue";
import Home from "./Home.vue";

export default {
  name: "Header",
  components: {
    Home,
    About,
  },
};
</script>

<style>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border: 1px solid black;
}
.nav-bar {
  display: flex;
}

.nav-bar > li {
  list-style: none;
  padding-left: 10px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.nav-bar > li a {
  text-decoration: none;
}
</style>
