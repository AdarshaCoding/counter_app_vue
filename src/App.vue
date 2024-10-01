<template>
  <Header />
  <router-view></router-view>
  <Counter />
  <UserInfo />
</template>

<script>
import Header from "./components/Header.vue";
import Counter from "./components/Counter.vue";
import UserInfo from "./components/UserInfo.vue";
export default {
  name: "App",
  components: {
    Header,
    Counter,
    UserInfo,
  },
};
</script>

<style scoped></style>
