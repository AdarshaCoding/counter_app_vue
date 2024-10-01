<template>
  <h2>User Details</h2>
  <div><img :src="userImage" :alt="`${firstName} ${lastName}`" /></div>
  <button @click="fetchUser">Get User</button>
</template>

<script>
export default {
  name: "UserInfo",
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

  updated() {
    console.log("New Profile updated!", this.firstName + " " + this.lastName);
  },
};
</script>

<style scoped></style>
