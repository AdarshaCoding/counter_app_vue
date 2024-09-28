<template>
  <h4 class="counter-info">{{ count }}</h4>
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
};
</script>
<style scoped>
button {
  padding: 5px 15px;
  margin: 5px;
  background-color: black;
  color: white;
  font-weight: bolder;
  cursor: pointer;
}
.counter-info,
.inc-dec-btn {
  display: flex;
  justify-content: center;
}
</style>
