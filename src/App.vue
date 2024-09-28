<template>
  <HeaderComponent />
  <CounterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import CounterComponent from "./components/CounterComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    CounterComponent,
  },
};
</script>

<style scoped></style>
