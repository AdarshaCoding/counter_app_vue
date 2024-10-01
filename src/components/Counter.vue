<template>
  <h1 class="counter-info">{{ count }}</h1>
  <div class="inc-dec-btn">
    <button v-on:click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <!-- <button :click="decrement">Decrement</button> -->
  </div>
</template>
<script>
export default {
  name: "CounterComponent",
  data() {
    return {
      count: 0,
      users: Array,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },

  created() {
    console.log("Counter: Created life cycle!");
  },

  mounted() {
    console.log("Mounted!");
  },

  updated() {
    console.log("Updated life cycle!", this.count);
  },

  unmounted() {
    console.log("Unmounted!");
  },
};
</script>
<style scoped>
button {
  padding: 5px 15px;
  margin: 5px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: large;
  cursor: pointer;
}
.counter-info,
.inc-dec-btn {
  display: flex;
  justify-content: center;
}
</style>
