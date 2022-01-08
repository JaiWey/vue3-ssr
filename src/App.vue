<template>
  <div>
  <h1>List</h1>
    <p>
    <router-link to="/">Home</router-link>
  </p>

  <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
  },
};
</script>