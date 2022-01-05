<template>
  <div>
  <h1>Hello from the AppComponent</h1>
    <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/detail">Go to About</router-link> -->
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