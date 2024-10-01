<template>
  <hr />
  <h3>User Posts</h3>
</template>
<script>
export default {
  name: "UserPosts",
  created() {
    const fetchUser = async () => {
      const data = await fetch("https://dummyjson.com/users");
      const json = await data.json();
      this.users = json.users;
      console.log(this.users);
    };
    fetchUser();
  },
};
</script>
