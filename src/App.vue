<template>
  <Header />
  <router-view />
  <Counter />
</template>

<script>
import Header from "./components/Header.vue";
import Counter from "./components/Counter.vue";
import User from "./components/Users.vue";
export default {
  name: "App",
  components: {
    Header,
    Counter,
    User,
  },
};
</script>

<style scoped></style>
