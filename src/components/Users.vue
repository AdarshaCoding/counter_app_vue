<template>
  <h2>User Details</h2>
  <div><img :src="userImage" :alt="`${firstName} ${lastName}`" /></div>
  <button
    :style="{ cursor: 'pointer', padding: '10px 20px', fontSize: 'large' }"
    @click="fetchUser"
  >
    Get User
  </button>
  <router-view />
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      firstName: "",
      lastName: "",
      userImage: "https://randomuser.me/api/portraits/men/62.jpg",
    };
  },
  methods: {
    async fetchUser() {
      const data = await fetch("https://randomuser.me/api");
      const json = await data.json();

      const { name, picture } = json.results[0];

      this.firstName = name.first;
      this.lastName = name.last;
      this.userImage = picture.large;
    },
  },
  created() {
    console.log("Users: created!");
  },
  updated() {
    console.log("Users updated!", this.firstName + " " + this.lastName);
  },
  mounted() {
    console.log("Users: Mounted");
  },
  unmounted() {
    console.log("Users: Unmounted");
  },
};
</script>

<style scoped></style>
